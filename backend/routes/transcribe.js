const express = require("express");
const multer = require("multer");
const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/transcribe", upload.single("file"), async (req, res) => {
  const filepath = req.file.path;

  try {
    const audioData = fs.readFileSync(filepath);

    const response = await axios.post(
      "https://api.deepgram.com/v1/listen",
      audioData,
      {
        headers: {
          Authorization: `Token ${process.env.DEEPGRAM_API_KEY}`,
          "Content-Type": "audio/webm", // or 'audio/wav' if you change the format
        },
      }
    );

    const transcript = response.data.results.channels[0].alternatives[0].transcript;

    res.status(200).json({ transcript });
  } catch (error) {
    console.error("Deepgram transcription error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Failed to transcribe audio." });
  } finally {
    fs.unlinkSync(filepath);
  }
});

module.exports = router;





// const express = require('express')
// const router = express.Router()
// const multer = require('multer')
// const fs = require('fs')
// const {OpenAI} = require('openai')

// require('dotenv').config();

// const upload = multer({dest:"uploads/"})
// const openai = new OpenAI({apikey:process.env.OPENAI_API_KEY})

// router.post('/transcribe',upload.single('file'),async (req,res)=>{
//      console.log("🎧 Transcribe route hit");
//     const filepath = req.file.path;
//     try{
//         const transcription = await openai.audio.transcriptions.create({
//             file:fs.createReadStream(filepath),
//             model:'whisper-1'
//         })
//         res.status(200).json({transcript : transcription.text})
//     }catch(error){
//         console.error("transcription error: ",error)
//         res.status(500).json({error:"failed to transcribe audio"})
//     }finally{
//         fs.unlinkSync(filepath)
//     }
// })

// module.exports = router;
