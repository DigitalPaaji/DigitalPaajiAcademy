"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// import { paajiResponses } from "./PaajiResponses";
// import {paajiResponsesHindi} from './Hindi'
import { CiMicrophoneOn } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function VoiceAssistant() {
  const [chatHistory, setChatHistory] = useState([])
  const [listening, setListening] = useState(false);
  const [language, setLanguage] = useState('hi')
  const recognitionRef = useRef(null);
  const [transcript, setTranscript] = useState("");
  const [spokenResponse, setSpokenResponse] = useState("");
 
  const [isRecognizing, setIsRecognizing] = useState(false);
const [isProcessing, setIsProcessing] = useState(false);
const [isSpeaking, setIsSpeaking] = useState(false);



// backend warmup
useEffect(()=>{
  const warmUpBackend = async ()=>{
    try{
      await fetch("https://digitalpaajiacademy.onrender.com/api/ask-paaji",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },body:JSON.stringify({
          query:"hi",
          history:[],
          language:"hi"
        })
      })
      console.log("Backend warmed up");
    } catch(err){
      console.error("backend warm-up failed: ",err)
    }
  }
  warmUpBackend()
},[])


const startRecognitionSafely = () => {
  const recognition = recognitionRef.current;
  if (!recognition || !listening) return;

  if (!speechSynthesis.speaking && !speechSynthesis.pending) {
    try {
      recognition.abort(); // 🚫 Force-reset if browser is confused
      recognition.start();
      // console.log("🎤 recognition restarted safely");
    } catch (e) {
      // console.warn("🔁 Retry recognition start failed, retrying...", e);
      setTimeout(startRecognitionSafely, 1000); // Retry again after 1s
    }
  } else {
    setTimeout(startRecognitionSafely, 500); // Retry after speaking ends
  }
};



    const stopSpeaking = (text)=>{
        if(speechSynthesis.speaking || speechSynthesis.pending){
            speechSynthesis.cancel()
        }
    }


  const PaajiSpeaking = (text) =>{
    stopSpeaking();
    setSpokenResponse(text);
    setIsSpeaking(true)
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    const preferredLang = language === "hi" ?"hi":"hi";

      // Known female voices for better control
  const knownFemaleVoices = {
    hi: ["Google हिन्दी", "Microsoft Heera"],
    en: ["Microsoft Heera","Google UK English Female", "Microsoft Zira", "Google US English"]
  };


     // First try matching known good female voices
     const preferredVoice =
     voices.find(
       (v) =>
         v.lang.toLowerCase().includes(preferredLang) &&
         knownFemaleVoices[preferredLang].some((name) =>
           v.name.toLowerCase().includes(name.toLowerCase())
         )
     ) ||
     voices.find(
       (v) =>
         v.lang.toLowerCase().includes(preferredLang) &&
         v.name.toLowerCase().includes("female")
     ) ||
     voices.find((v) => v.lang.toLowerCase().includes(preferredLang)) ||
     voices.find((v) => v.name.toLowerCase().includes("female")) ||
     voices[0];

  if (preferredVoice) {
    utterance.voice = preferredVoice;
    utterance.lang = 'hi-IN';
  } else {
    utterance.lang = preferredLang === "hi" ? "en-IN" : "en-IN";
  }

  utterance.rate = 1;
    utterance.onstart = () => {
  // console.log("utterance started...");
   
  };

utterance.onend = () => {
  setIsSpeaking(false);
  // console.log("🟢 Speech ended...");
  // if (listening) {
  //   setTimeout(() => {
      if (listening && recognitionRef.current) {
        console.log("🔁 Starting listening again after speaking...");
         recognitionRef.current.start();
  // const recorder = recognitionRef.current;
  // recorder && recorder.start(); // restart recording after reply
}
  //   }, 500);
  // }
};



  speechSynthesis.speak(utterance);
  }



  const greetUser = () => {
    PaajiSpeaking(
 "Welcome to Gupshup with Paaji . Let's talk learning - with a twist!  How can I assist you today?"


        // "Hello, I'm PaajiBot from Digital Paaji, How can I assist you today?"
     
    );
  };


  const handleResponse = async (text) =>{
  setIsProcessing(true); 
  // stopListening();
  // const reply = generatePaajiReply(text);
  // if(reply){
  //     PaajiSpeaking(reply);
  // }else{  
      try {
        // Call the GPT fallback API
        const res = await fetch("https://digitalpaajiacademy.onrender.com/api/ask-paaji", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: text ,
            history:chatHistory,
            lang:language,
          }),
        });
  
        const data = await res.json();
        // console.log("Received from backend:", data);
        const dynamicReply = data?.response || (
           "looks like I don't have the info for that right now! But no worries,  Aap hamari team se baat karein — woh aapki madad zaroor karenge!");
        
const formatForSpeaking = (text) => {
  return text
    .replace(/(\d+\.\s*|•\s*|\*\s*)/g, '.....') // remove 1. 2. etc.
    .replace(/\n/g, '... ') // Convert newlines into longer pause
    .replace(/  +/g, ' ')   // remove extra spaces
    .trim();
};

const cleaned = formatForSpeaking(dynamicReply);

PaajiSpeaking(cleaned);
  // console.log(text);
        
  // console.log(dynamicReply);

        setChatHistory((prev)=>{
         const updated = [ ...prev,
          {role:"user",content:text},
          {role:"assistant",content:dynamicReply}]
          return updated.slice(-6)
      })
      } catch (error) {
        console.error("Error fetching AI Reply:", error);
        PaajiSpeaking(
           "Sorry, I couldn't fetch a proper reply right now.");
      }finally{
        setIsProcessing(false)
      }

  }

  const stopListening = ()=>{
    const recognition = recognitionRef.current;
    if(recognition){
      recognition.stop();
    }
    setTranscript('');
    setListening(false);  
  }

  useEffect(()=>{
    if(typeof window !== "undefined" && speechSynthesis.onvoiceschanged !== undefined ){
      speechSynthesis.onvoiceschanged = ()=>{
        speechSynthesis.getVoices();
      }
    }
  },[])

// useEffect(() => {
//   const SpeechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;
//   if (!SpeechRecognition) {
//     alert("Your browser does not support Speech Recognition.");
//     return;
//   }

//   const recognition = new SpeechRecognition();
//   recognition.lang = language === "hi" ? "hi-IN" : "en-IN"; // Ensure correct language
//   recognition.interimResults = false;
//   recognition.continuous = true; // Ensure continuous recognition

//   recognition.onresult = (event) => {
//     const lastResult = event.results[event.results.length - 1];
//     const spokenText = lastResult[0].transcript;
//     stopSpeaking(); // Stop bot if user starts talking
//     setTranscript((prev) => prev + " " + spokenText);
//     handleResponse(spokenText);
//   };

//   recognition.onerror = (event) => {
//     // console.log("⚠️ Recognition error:", event.error);
//     // Optionally restart recognition on error
//     if (listening) {
//       setTimeout(() => {
//         startRecognitionSafely();
//       }, 1000);
//     }
//   };

//   recognition.onstart = () => {
//     setIsRecognizing(true);
//     // console.log("✅ onstart: isRecognizing = true");
//   };

//   recognition.onend = () => {
//     setIsRecognizing(false);
//     // console.log("❌ onend: isRecognizing = false");
//     if (listening) {
//       setTimeout(() => {
//         startRecognitionSafely(); // Restart recognition
//       }, 1000); // Retry safely after end
//     }
//   };

//   recognitionRef.current = recognition;



//    const cleanup = () => {
//        setIsSpeaking(false)
//         stopSpeaking();
//         stopListening()
//         setTranscript('');                                                          
//         setListening(false);
//     };

//     window.addEventListener("visibilitychange", () => {
//       if (document.hidden) cleanup();
//     });
//     window.addEventListener("beforeunload", cleanup);
//     window.addEventListener("pagehide", cleanup);

//     return () => {
//       cleanup();
//       window.removeEventListener("visibilitychange", cleanup);
//       window.removeEventListener("beforeunload", cleanup);
//       window.removeEventListener("pagehide", cleanup);
//           stopListening();
//     setIsSpeaking(false);
//     setIsRecognizing(false);
//     stopSpeaking();
//     };
 
// }, []);



useEffect(() => {
  let silenceTimer;
  let mediaRecorder;
  let audioChunks = [];
0
  const setupMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (e) => {
        console.log("chunk received"); // add this
        audioChunks.push(e.data);
      };
mediaRecorder.onstop = async () => {
  const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
  audioChunks = [];

  const formData = new FormData();
  formData.append("file", audioBlob);

  try {
    const res = await fetch("https://digitalpaajiacademy.onrender.com/api2/transcribe", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log("Transcription Response:", data);

  const finalTranscript = data.transcript?.trim();

if (finalTranscript) {
  setTranscript(finalTranscript);
  await handleResponse(finalTranscript);
} else {
  if (!chatHistory.length) {
    // If it's the first interaction after greeting, just retry
    console.log("⏳ Waiting for user to speak...");
    recognitionRef.current?.start(); // Retry listening
  } else {
    PaajiSpeaking("Kya aap dubara bolenge? Samajh nahi aaya.");
  }
}

  } catch (err) {
    console.error("Transcription error:", err);
    PaajiSpeaking("Kuch galti ho gayi samajhne mein.");
  }
};


let firstTime = true;

recognitionRef.current = {
  start: () => {
    console.log("🎙 Recording started");
    audioChunks = [];
    mediaRecorder.start();
    setListening(true);

    if (firstTime) {
      greetUser(); // Only once at beginning
      firstTime = false;
    }

    // Auto-stop after 3 seconds silence
    silenceTimer = setInterval(() => {
      if (mediaRecorder && mediaRecorder.state === "recording") {
        console.log("⏸ Detected silence — stopping...");
        mediaRecorder.stop();
        clearInterval(silenceTimer);
      }
    }, 3000);
  },
  stop: () => {
    console.log("🛑 Manual stop");
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
    }
    clearInterval(silenceTimer);
    setListening(false);
    firstTime = true;
  }
};


    } catch (err) {
      console.error("Mic permission error:", err);
      PaajiSpeaking("Mic access is needed to talk.");
    }
  };

  setupMedia();

  return () => {
    stopListening();
    stopSpeaking();
  };
}, []);



//   const toggleListening = () => {
    
// const recognition = recognitionRef.current;
//     if(!recognition) return;

//     if(!listening){
//         if (!isRecognizing) {
//     recognition.start();
//   }
//         setListening(true);
//         greetUser();
//     }else{
//         // recognition.stop();
//         setIsSpeaking(false)
//         stopSpeaking();
//         stopListening()
//         setTranscript('');                                                          
//         setListening(false);
        

//     }
//   };



const startListening = () => {
  // const recognition = recognitionRef.current;
  // if (!recognition || isRecognizing) return;

  // recognition.start();
  // setListening(true);


  const recorder = recognitionRef.current;
  if (recorder) {
    recorder.start();
  }

};

const stopEverything = () => {
  // const recognition = recognitionRef.current;
  // if (recognition) recognition.stop();
  const recorder = recognitionRef.current;
  if (recorder) recorder.stop();
  stopSpeaking();
  stopListening();
  setIsSpeaking(false);
  setTranscript('');
  setListening(false);
};

  return (
    <div className=" flex items-center justify-center  px-4 py-2 border-white bg-black border-2 rounded-full gap-2">
      {/* Language Selector */}
{transcript && (
        <p className="mt-4 text-lg text-center text-white">
          <strong>You said:</strong> {transcript}
        </p>
      )}  
     <button
  onClick={!listening ? startListening : undefined}
  className={`${
    listening
      ? "text-white"
      : isProcessing
      ? "text-yellow-400 animate-pulse"
      : "text-white animate-pulse"
  } flex items-center justify-center gap-2 cursor-pointer`}
>
  {/* Text */}
  {!isSpeaking && !listening && "Click to talk"}

  {/* Icon */}
  {isSpeaking ? (
    <Image alt="" src={"/Images/audio.gif"} width={20} height={20} className="w-7 h-7 rounded-full" />
  ) : listening ? (
    isProcessing ? (
      <DotLottieReact
        src="https://lottie.host/038ba804-bb12-4d0b-beec-426153a23d0f/ZbItyRZZuU.lottie"
        loop
        autoplay
        className="w-7 h-7 rounded-full bg-white"
      />
    ) : (
      <Image alt="" src={"/Images/mic.gif"} width={20} height={20} className="w-7 h-7 rounded-full" />
    )
  ) : (
    <CiMicrophoneOn className="w-[20px] h-[20px]" />
  )}

  {/* Cross button */}
  {listening || isSpeaking ? (
    <span
      onClick={(e) => {
        e.stopPropagation(); // prevent outer button click
        stopEverything();
      }}
      className="p-[1px] text-white bg-red-600 rounded-full"
    >
      <RxCross2 className="w-6 h-6" />
    </span>
  ) : null}
</button>

            <a
        href="https://wa.me/917814536643"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-white rounded-full flex items-center justify-center"
      >
         <Image
          src="/Images/whIcon.gif"
          width={20}
          height={20}
          alt=""
          className="w-8 h-8 rounded-full object-cover"
        />
      </a>

 
     
    </div>
  );
}
