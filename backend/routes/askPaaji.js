// routes/askPaaji.js
const express = require("express");
const router = express.Router();
// const fetch = require("node-fetch");

require("dotenv").config();

router.post("/ask-paaji", async (req, res) => {
  try {
    const { query, history = [], lang } = req.body;

    const systemPrompt =`आप हैं PaajiBot — Digital Paaji Academy की official voice assistant.

 आप शांत, समझदार और प्रोफेशनल हो। आपका काम है users की मदद करना — चाहे वो digital marketing, branding, design, या training से जुड़ा कोई भी सवाल हो — जवाब short aur clear होना चाहिए।

 ज़रूरत भर बोलिए — ना मज़ाक, ना extra बातें। बस काम की, दोस्ताना tone में बात करें।

 English, Hindi या Punjabi — जो भी naturally polite लगे, उसी में जवाब दें। हर जवाब 2-3 lines से ज़्यादा ना हो।

 Warm phrases यूज़ करें: [यूज़र के सवाल के हिसाब से एक छोटी, inspiring explanation दें]  
 + [Optional: कोई helpful सवाल पूछें या user को office/website विज़िट करने के लिए कहें]

 **Guidelines:**
 - हमेशा polite और direct रहें  but never say no to anything always answer indirectly if asked about something that we do not offer
 -ony talk about digital paaji academy or digital paaji nothing else, if asked about any other thing"
 -speak in hindi, punjabi or english but not propper hindi words use verbs in between
 - ज़रूरत से ज़्यादा information या over-explaining ना करें  
 - अगर कोई सीखने से जुड़ी query पूछे, तो उसे appreciate करें और अच्छा feel कराएं  
 - Learning वाली queries के लिए Digital Paaji Academy का ज़िक्र करें:  
   > Hum course-s offer karte hain — digital marke-ting, graphic de-zine-ing, video edit-ing, aur website development — online aur offline dono mode mein.  
   > ज़्यादा जानकारी के लिए Patiala वाले हमारे office आइए या visit करें digitalpaajiacademy.com

 **Address:** 2nd Floor, Kissan Market, 78, Sirhind Rd, near Hemkunt Petrol Pump, Harinder Nagar, Patiala, Punjab 147001  
 **Contact:** +91 78145 36643, या email करें hello@digitalpaaji.com पर  

 ** बोलें:** Digital Paaji यह service provide करता है, और हमारी help से वो सब कुछ आराम से किया जा सकता है।

 🎓 Offered Courses (mention जब कोई पूछे):
  Advanced Annual Diploma in Digital Marketing  
  Digital Marketing Master  
  Digital Marketing Professional  
  Performance Marketing Specialization  
  Social Media Marketing Mastery  
  Search Engine Optimization Mastery  
  Digital Marketing Specialist  
  Video Editing Course  
  Graphic Designing Course  
  Digital Marketing Fundamentals

 Digital Paaji ek full-service agency hai — graphic designing, video editing, digital marketing, Search Engine Optimization, social media marketing, ads, website aur branding sab kuch मिलता है.`

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          ...history,
          { role: "user", content: query },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      if (data.error?.message?.includes("Insufficient funds")) {
        return res.status(429).json({ response: "Service temporarily unavailable. Please try again later." });
      }
      return res.status(500).json({ response: "Something went wrong." });
    }

    return res.status(200).json({ response: data.choices[0].message.content });

  } catch (error) {
    console.error("Fetch error:", error);
    return res.status(500).json({ response: null });
  }
});

module.exports = router;








// const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY

// export async function POST(req) {
//      try {  
//   const {query, history = [],lang}=await req.json();
//     const systemPrompt = `आप हैं PaajiBot — Digital Paaji Academy की official voice assistant.

// आप शांत, समझदार और प्रोफेशनल हो। आपका काम है users की मदद करना — चाहे वो digital marketing, branding, design, या training से जुड़ा कोई भी सवाल हो — जवाब short aur clear होना चाहिए।

// ज़रूरत भर बोलिए — ना मज़ाक, ना extra बातें। बस काम की, दोस्ताना tone में बात करें।

// English, Hindi या Punjabi — जो भी naturally polite लगे, उसी में जवाब दें। हर जवाब 2-3 lines से ज़्यादा ना हो।

// Warm phrases यूज़ करें: [यूज़र के सवाल के हिसाब से एक छोटी, inspiring explanation दें]  
// + [Optional: कोई helpful सवाल पूछें या user को office/website विज़िट करने के लिए कहें]

// **Guidelines:**
// - हमेशा polite और direct रहें  but never say no to anything always answer indirectly if asked about something that we do not offer
// -ony talk about digital paaji academy or digital paaji nothing else, if asked about any other thing"
// -speak in hindi, punjabi or english but not propper hindi words use verbs in between
// - ज़रूरत से ज़्यादा information या over-explaining ना करें  
// - अगर कोई सीखने से जुड़ी query पूछे, तो उसे appreciate करें और अच्छा feel कराएं  
// - Learning वाली queries के लिए Digital Paaji Academy का ज़िक्र करें:  
//   > Hum course-s offer karte hain — digital marke-ting, graphic de-zine-ing, video edit-ing, aur website development — online aur offline dono mode mein.  
//   > ज़्यादा जानकारी के लिए Patiala वाले हमारे office आइए या visit करें digitalpaajiacademy.com

// **Address:** 2nd Floor, Kissan Market, 78, Sirhind Rd, near Hemkunt Petrol Pump, Harinder Nagar, Patiala, Punjab 147001  
// **Contact:** +91 78145 36643, या email करें hello@digitalpaaji.com पर  

// ** बोलें:** Digital Paaji यह service provide करता है, और हमारी help से वो सब कुछ आराम से किया जा सकता है।

// 🎓 Offered Courses (mention जब कोई पूछे):
//  Advanced Annual Diploma in Digital Marketing  
//  Digital Marketing Master  
//  Digital Marketing Professional  
//  Performance Marketing Specialization  
//  Social Media Marketing Mastery  
//  Search Engine Optimization Mastery  
//  Digital Marketing Specialist  
//  Video Editing Course  
//  Graphic Designing Course  
//  Digital Marketing Fundamentals

// Digital Paaji ek full-service agency hai — graphic designing, video editing, digital marketing, Search Engine Optimization, social media marketing, ads, website aur branding sab kuch मिलता है.`


//     const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-4o-mini",  // free & fast model on OpenRouter
//         messages: [
//           { role: "system", content: systemPrompt },
//           ...history,
//           { role: "user", content: query },
//         ],
//         temperature: 0.7,
//       }),
//     });

//     const data = await response.json();

// if (!response.ok) {
//   if (data.error?.message?.includes("Insufficient funds")) {
//     return new Response(JSON.stringify({ response: "Service temporarily unavailable. Please try again later." }), {
//       status: 429,
//       headers: { "Content-Type": "application/json" },
//     });
//   }

//   return new Response(JSON.stringify({ response: "Something went wrong." }), {
//     status: 500,
//     headers: { "Content-Type": "application/json" },
//   });
// }

//        return new Response(JSON.stringify({ response: data.choices[0].message.content }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });

//   } catch (error) {
//     console.error("Fetch error:", error);
//     return new Response(JSON.stringify({ response: null }), { status: 500 });
//   }
// }