// "use client";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";
// import { CiMicrophoneOn } from "react-icons/ci";
// import { FaRegCommentDots } from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// export default function VoiceAssistant() {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [listening, setListening] = useState(false);
//   const [language, setLanguage] = useState("hi");
//   const recognitionRef = useRef(null);
//   const [transcript, setTranscript] = useState("");
//   const [spokenResponse, setSpokenResponse] = useState("");
//   const [isRecognizing, setIsRecognizing] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);

//   useEffect(() => {
//     const warmUpBackend = async () => {
//       try {
//         await fetch("https://digitalpaajiacademy.onrender.com/api/ask-paaji", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ query: "hi", history: [], language: "hi" }),
//         });
//         console.log("✅ Backend warmed up");
//       } catch (err) {
//         console.error("❌ Backend warm-up failed:", err);
//       }
//     };
//     warmUpBackend();
//   }, []);

//   const stopSpeaking = () => {
//     if (speechSynthesis.speaking || speechSynthesis.pending) {
//       speechSynthesis.cancel();
//       console.log("🛑 Speech stopped");
//     }
//   };

//   const PaajiSpeaking = (text) => {
//     stopSpeaking();
//     setSpokenResponse(text);
//     setIsSpeaking(true);

//     const utterance = new SpeechSynthesisUtterance(text);
//     const voices = speechSynthesis.getVoices();
//     const preferredLang = language === "hi" ? "hi" : "en";

//     const knownFemaleVoices = {
//       hi: ["Google हिन्दी", "Microsoft Heera"],
//       en: ["Google UK English Female", "Microsoft Zira"],
//     };

//     const preferredVoice =
//       voices.find(
//         (v) =>
//           v.lang.toLowerCase().includes(preferredLang) &&
//           knownFemaleVoices[preferredLang].some((name) =>
//             v.name.toLowerCase().includes(name.toLowerCase())
//           )
//       ) || voices.find((v) => v.lang.toLowerCase().includes(preferredLang)) || voices[0];

//     if (preferredVoice) {
//       utterance.voice = preferredVoice;
//     }
//     utterance.lang = preferredLang === "hi" ? "hi-IN" : "en-IN";
//     utterance.rate = 1;

//     utterance.onstart = () => {
//       console.log("🔊 Speech started");
//     };

//     utterance.onend = () => {
//       setIsSpeaking(false);
//       console.log("🟢 Speech ended");
//       if (listening) startRecognitionSafely();
//     };

//     speechSynthesis.speak(utterance);
//   };

//   const greetUser = () => {
//     PaajiSpeaking("Hello, I'm PaajiBot from Digital Paaji, How can I assist you today?");
//   };

//   const handleResponse = async (text) => {
//     setIsProcessing(true);
//     try {
//       const res = await fetch("https://digitalpaajiacademy.onrender.com/api/ask-paaji", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           query: text,
//           history: chatHistory,
//           lang: language,
//         }),
//       });
//       const data = await res.json();
//       const dynamicReply =
//         data?.response ||
//         "Looks like I don't have the info right now. Please contact our team.";

//       const cleaned = dynamicReply
//         .replace(/(\d+\.\s*|•\s*|\*\s*)/g, ".....")
//         .replace(/\n/g, "... ")
//         .replace(/  +/g, " ")
//         .trim();

//       PaajiSpeaking(cleaned);
//       setChatHistory((prev) =>
//         [...prev, { role: "user", content: text }, { role: "assistant", content: dynamicReply }].slice(-6)
//       );
//     } catch (error) {
//       console.error("❌ Error fetching AI reply:", error);
//       PaajiSpeaking("Sorry, I couldn't fetch a reply right now.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

// const stopListening = () => {
//   const recognition = recognitionRef.current;
//   if (recognition) {
//     try {
//       if (isRecognizing) {
//         recognition.stop(); // ✅ Stop gracefully if running
//         console.log("🛑 Recognition stopped");
//       } else {
//         console.log("ℹ️ Recognition not running, no need to stop.");
//       }
//     } catch (e) {
//       console.warn("⚠️ Recognition stop error:", e);
//     }
//   }
//   setTranscript("");
//   setListening(false);
//   setIsRecognizing(false);
// };


//   const startRecognitionSafely = () => {
//     const recognition = recognitionRef.current;
//     if (!recognition) return;

//     if (!speechSynthesis.speaking && !speechSynthesis.pending && !isRecognizing) {
//       try {
//         recognition.start();
//         console.log("🎤 Recognition started manually");
//       } catch (e) {
//         console.error("❌ Error restarting recognition:", e);
//       }
//     }
//   };

//     useEffect(()=>{
//     if(typeof window !== "undefined" && speechSynthesis.onvoiceschanged !== undefined ){
//       speechSynthesis.onvoiceschanged = ()=>{
//         speechSynthesis.getVoices();
//       }
//     }
//   },[])


//   useEffect(() => {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       alert("Speech Recognition not supported in this browser.");
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-IN";
//     recognition.interimResults = false;
//     recognition.continuous = true;

//     recognition.onstart = () => {
//       setIsRecognizing(true);
//       console.log("✅ onstart: recognizing = true");
//     };

//     recognition.onend = () => {
//       setIsRecognizing(false);
//       console.log("❌ onend: recognizing = false");
//       if (listening) setTimeout(startRecognitionSafely, 1000);
//     };

//     recognition.onerror = (e) => {
//       console.error("⚠️ Recognition error:", e.error);
//     };

//     recognition.onresult = (event) => {
//       const result = event.results[event.results.length - 1];
//       const userSpeech = result[0].transcript.trim();
//       console.log("🎙️ You said:", userSpeech);
//       stopSpeaking();
//       setTranscript((prev) => prev + " " + userSpeech);
//       handleResponse(userSpeech);
//     };

//     recognitionRef.current = recognition;

//     const cleanup = () => {
//       stopListening();
//       stopSpeaking();
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
//     };
//   }, []);

//   const toggleListening = () => {
//     const recognition = recognitionRef.current;
//     if (!recognition) return;

//     if (!listening) {
//       setListening(true);
//       if (!isRecognizing) {
//         startRecognitionSafely();
//       }
//       greetUser();
//     } else {
//       stopSpeaking();
//       stopListening();
//     }
//   };

//   return (
//     <div className="flex items-center justify-center px-4 py-2 border-white bg-black border-2 rounded-full gap-2">
//       <button
//         onClick={toggleListening}
//         className={`${
//           listening
//             ? "text-white"
//             : isProcessing
//             ? "text-yellow-400 animate-pulse"
//             : "text-white animate-pulse"
//         } flex items-center justify-center gap-2 cursor-pointer`}
//       >
//         {!isSpeaking && !listening && "Click to talk"}

//         {isSpeaking ? (
//           <Image
//             alt=""
//             src={"/Images/audio.gif"}
//             width={20}
//             height={20}
//             className="w-7 h-7 rounded-full"
//           />
//         ) : listening ? (
//           isProcessing ? (
//             <DotLottieReact
//               src="https://lottie.host/038ba804-bb12-4d0b-beec-426153a23d0f/ZbItyRZZuU.lottie"
//               loop
//               className="w-7 h-7 rounded-full bg-white"
//               autoplay
//             />
//           ) : (
//             <Image
//               alt=""
//               src={"/Images/mic.gif"}
//               width={20}
//               height={20}
//               className="w-7 h-7 rounded-full"
//             />
//           )
//         ) : (
//           <CiMicrophoneOn className="w-[20px] h-[20px]" />
//         )}

//         {(isSpeaking || listening || isProcessing) && (
//           <p className="p-[1px] text-white bg-red-600 rounded-full">
//             <RxCross2 className="w-6 h-6" />
//           </p>
//         )}
//       </button>

//       <a
//         href="https://wa.me/917814536643"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="cursor-pointer text-white rounded-full flex items-center justify-center"
//       >
//         <Image
//           src="/Images/whIcon.gif"
//           width={20}
//           height={20}
//           alt=""
//           className="w-8 h-8 rounded-full object-cover"
//         />
//       </a>
//     </div>
//   );
// }





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
      startRecognitionSafely();
  //   }, 500);
  // }
};



  speechSynthesis.speak(utterance);
  }



  const greetUser = () => {
    PaajiSpeaking(
 "Gupshup with Paaji mein aapka swagat hai . Let's talk learning - with a twist!  How can I assist you today?"


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
        const res = await fetch("http://localhost:8000/api/ask-paaji", {
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

useEffect(() => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Your browser does not support Speech Recognition.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = language === "hi" ? "hi-IN" : "en-IN"; // Ensure correct language
  recognition.interimResults = false;
  recognition.continuous = true; // Ensure continuous recognition

  recognition.onresult = (event) => {
    const lastResult = event.results[event.results.length - 1];
    const spokenText = lastResult[0].transcript;
    stopSpeaking(); // Stop bot if user starts talking
    setTranscript((prev) => prev + " " + spokenText);
    handleResponse(spokenText);
  };

  recognition.onerror = (event) => {
    // console.log("⚠️ Recognition error:", event.error);
    // Optionally restart recognition on error
    if (listening) {
      setTimeout(() => {
        startRecognitionSafely();
      }, 1000);
    }
  };

  recognition.onstart = () => {
    setIsRecognizing(true);
    // console.log("✅ onstart: isRecognizing = true");
  };

  recognition.onend = () => {
    setIsRecognizing(false);
    // console.log("❌ onend: isRecognizing = false");
    if (listening) {
      setTimeout(() => {
        startRecognitionSafely(); // Restart recognition
      }, 1000); // Retry safely after end
    }
  };

  recognitionRef.current = recognition;



   const cleanup = () => {
       setIsSpeaking(false)
        stopSpeaking();
        stopListening()
        setTranscript('');                                                          
        setListening(false);
    };

    window.addEventListener("visibilitychange", () => {
      if (document.hidden) cleanup();
    });
    window.addEventListener("beforeunload", cleanup);
    window.addEventListener("pagehide", cleanup);

    return () => {
      cleanup();
      window.removeEventListener("visibilitychange", cleanup);
      window.removeEventListener("beforeunload", cleanup);
      window.removeEventListener("pagehide", cleanup);
          stopListening();
    setIsSpeaking(false);
    setIsRecognizing(false);
    stopSpeaking();
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
 {/* {transcript && (
        <p className="mt-4 text-lg text-center text-white">
          <strong>You said:</strong> {transcript}
        </p>
      )}  */}
      <button
        onClick={toggleListening}
        className={`${
          listening ? "text-white" : isProcessing?"text-yellow-400 animate-pulse" : "text-white animate-pulse"
        }  flex items-center justify-center gap-2 cursor-pointer`}
      >
        {!isSpeaking && !listening && "Click to talk"}
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
