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



useEffect(()=>{
  const warmUpBackend = async ()=>{
    try{
      await fetch("http://localhost:8000/api/ask-paaji",{
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
  console.log("utterance started...");
   
  };

  utterance.onend = () => {
    setIsSpeaking(false)
  const recognition = recognitionRef.current;

  if (listening && recognition && !isRecognizing) {
      setTimeout(() => {
      if (!speechSynthesis.speaking) {
        recognition.start();
      }
    }, 500); // Add slight delay before restarting
  }
};


  speechSynthesis.speak(utterance);
  }



  const greetUser = () => {
    PaajiSpeaking(
    
        "Hello, I'm PaajiBot from Digital Paaji, How can I assist you today?"
     
    );
  };


  const handleResponse = async (text) =>{
  setIsProcessing(true); 
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
        console.log("Received from backend:", data);
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
  console.log(text);
        
  console.log(dynamicReply);

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

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language === "hi" ? "en-IN" : "en-IN";
    recognition.interimResults = false;
    recognition.continuous = true;
    recognition.onresult = (event) => {
        const lastResult = event.results[event.results.length - 1];
        const spokenText = lastResult[0].transcript;
       stopSpeaking(); // 🔴 ADD THIS LINE: stop bot if user starts talking
        setTranscript((prev) => prev + " " + spokenText);
        handleResponse(spokenText);

    };
    recognition.onerror = (event) => {
      console.log("error occured : ", event.error);
    };
    recognition.onstart = () => {
  console.log("Speech recognition started...");

      setIsRecognizing(true);
    };

 recognition.onend = () => {
  console.log("Speech recognition ended...");
  setIsRecognizing(false);

  if (listening) {
    const retryRecognition = () => {
      if (!isRecognizing && !speechSynthesis.speaking) {
        try {
          recognition.start();
          console.log("Recognition restarted");
        } catch (err) {
          console.error("Restart error:", err);
        }
      } else {
        setTimeout(retryRecognition, 1000); // Retry after 1s
      }
    };

    setTimeout(retryRecognition, 1000); // Initial retry after 1s
  }
};






    recognitionRef.current = recognition;

    const cleanupOnHideOrUnload = ()=>{
        stopListening();
        setIsSpeaking(false)
        setIsRecognizing(false)
        stopSpeaking();
   
    };
    window.addEventListener('visibilitychange',()=>{
        if(document.hidden) cleanupOnHideOrUnload();
    })

    window.addEventListener("beforeunload", cleanupOnHideOrUnload)
    window.addEventListener("pagehide", cleanupOnHideOrUnload)

  return () => {
  cleanupOnHideOrUnload();  // full cleanup
  window.removeEventListener('visibilitychange', cleanupOnHideOrUnload);
  window.removeEventListener('beforeunload', cleanupOnHideOrUnload);
  window.removeEventListener('pagehide', cleanupOnHideOrUnload);
};

  }, []);

  const toggleListening = () => {
    
const recognition = recognitionRef.current;
    if(!recognition) return;

    if(!listening){
        if (!isRecognizing) {
    recognition.start();
  }
        setListening(true);
        greetUser();
    }else{
        // recognition.stop();
        setIsSpeaking(false)
        stopSpeaking();
        stopListening()
        setTranscript('');                                                          
        setListening(false);
        

    }
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
        onClick={toggleListening}
        className={`${
          listening ? "text-white" : isProcessing?"text-yellow-400 animate-pulse" : "text-white animate-pulse"
        }  flex items-center justify-center gap-2 cursor-pointer`}
      >
        {isSpeaking? "" : listening ? isProcessing? "" : "" : "Click to talk"}
        {isSpeaking ? (
    // <FaRegCommentDots className="w-[20px] h-[20px]" />
   
   <Image alt="" src={'/Images/audio.gif'} width={20} height={20} className="w-7 h-7 rounded-full" />
  ) : 
   listening ? isProcessing? 
     (
   <DotLottieReact
      src="https://lottie.host/038ba804-bb12-4d0b-beec-426153a23d0f/ZbItyRZZuU.lottie"
      loop
      className="w-7 h-7 rounded-full bg-white "
      autoplay
    />
   )
    :
   (
   <Image alt="" src={'/Images/mic.gif'} width={20} height={20} className="w-7 h-7 rounded-full" />
   )
   : 
  
  (
    <CiMicrophoneOn className="w-[20px] h-[20px]" /> 
  )}
  {" "}
    <p className={`${isSpeaking? "p-[1px]" : listening ? isProcessing? "p-[1px]" : "p-[1px]" : "p-0"} text-white bg-red-600  rounded-full`}>
      {isSpeaking? 
      <RxCross2   className="w-6 h-6 "/>
      : listening ? isProcessing?       <RxCross2   className="w-6 h-6 "/>
 :       <RxCross2   className="w-6 h-6 "/>
 : ""}
      </p>

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
