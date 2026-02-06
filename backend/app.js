require("dotenv").config();
const express = require("express");
// const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const transcribe = require('./routes/transcribe')
const askPaaji = require('./routes/askPaaji')

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "*", // or your frontend domain: "https://digitalpaajiacademy.com"
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());
app.use('/api',askPaaji)
app.use('/api2',transcribe)

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Backend is running"));

// Email sending route
app.post("/send-mail", async (req, res) => {
  console.log("Received form data:", req.body);
  const { name, email, phone, qualification, interest, hear, message, recaptchaToken } = req.body;

  // Verify reCAPTCHA Token





  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  try {
    const recaptchaResponse = await fetch(recaptchaUrl, {
      method: "POST",
    });
    const recaptchaData = await recaptchaResponse.json();
    const { success } = recaptchaData;

    if (!success) {
      return res.status(400).json({
        error: "reCAPTCHA verification failed. Please try again.",
      });
    }
  } catch (error) {
    // console.log("reCAPTCHA Response:", recaptchaData);

    console.error("reCAPTCHA verification error:", error);
    return res.status(500).json({ error: "Failed to verify reCAPTCHA." });
  }
 // Proceed to send the email if reCAPTCHA is successful
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD,
      },
    });




// Email options
const mailOptions = {
  from: `Digital Paaji <${process.env.EMAIL}>`,
  to: process.env.receiverEMAIL,
  subject: `New Contact Form Submission from ${name}`,
  html: `
  <div style="font-family: Arial, sans-serif; background: #FAF8EA; padding: 20px; margin: 0;">
    
    <!-- Card Wrapper -->
    <div style="
      max-width: 600px; 
      background: #ffffff; 
      margin: auto; 
      padding: 20px; 
      border-radius: 10px; 
      border: 1px solid #e5e5e5;
      box-shadow: 0 4px 10px rgba(0,0,0,0.08);
    ">

      <!-- Title -->
      <h2 style="
        text-align: center; 
        color: #B67032; 
        font-size: 22px; 
        margin-bottom: 20px;
      ">
        New Contact Form Submission
      </h2>

      <!-- Row -->
      <div style="margin-bottom: 16px;">
        <strong style="color:#333; font-size:15px;">Name:</strong>
        <p style="
          margin:6px 0 0 0; 
          background:#fafafa;
          padding:10px; 
          border-radius:6px; 
          color:#555;
          word-wrap: break-word;
          overflow-wrap: break-word;
        ">${name}</p>
      </div>

      <div style="margin-bottom: 16px;">
        <strong style="color:#333; font-size:15px;">Email:</strong>
        <p style="
          margin:6px 0 0 0; 
          background:#fafafa;
          padding:10px; 
          border-radius:6px; 
          color:#555;
          word-wrap: break-word;
          overflow-wrap: break-word;
        ">
          <a href="mailto:${email}" style="color:#B67032; text-decoration:none;">${email}</a>
        </p>
      </div>

      <div style="margin-bottom: 16px;">
        <strong style="color:#333; font-size:15px;">Phone:</strong>
        <p style="
          margin:6px 0 0 0; 
          background:#fafafa;
          padding:10px; 
          border-radius:6px; 
          color:#555;
          word-wrap: break-word;
          overflow-wrap: break-word;
        ">${phone}</p>
      </div>

      <div style="margin-bottom: 16px;">
        <strong style="color:#333; font-size:15px;">Qualification:</strong>
        <p style="
          margin:6px 0 0 0; 
          background:#fafafa;
          padding:10px; 
          border-radius:6px; 
          color:#555;
          word-wrap: break-word;
          overflow-wrap: break-word;
        ">${qualification}</p>
      </div>

      <div style="margin-bottom: 16px;">
        <strong style="color:#333; font-size:15px;">Course:</strong>
        <p style="
          margin:6px 0 0 0; 
          background:#fafafa;
          padding:10px; 
          border-radius:6px; 
          color:#555;
          word-wrap: break-word;
          overflow-wrap: break-word;
        ">${interest}</p>
      </div>

      <div style="margin-bottom: 16px;">
        <strong style="color:#333; font-size:15px;">Leads From:</strong>
        <p style="
          margin:6px 0 0 0; 
          background:#fafafa;
          padding:10px; 
          border-radius:6px; 
          color:#555;
          word-wrap: break-word;
          overflow-wrap: break-word;
        ">${hear}</p>
      </div>

      <div style="margin-bottom: 16px;">
        <strong style="color:#333; font-size:15px;">Message:</strong>
        <p style="
          margin:6px 0 0 0; 
          background:#fafafa;
          padding:10px; 
          border-radius:6px; 
          color:#555;
          word-wrap: break-word;
          overflow-wrap: break-word;
          white-space: pre-wrap;
        ">${message}</p>
      </div>

      <!-- Footer -->
      <div style="text-align:center; margin-top:25px;">
        <p style="color:#B67032; font-weight:bold; font-size:15px; margin:0;">Digital Paaji</p>
        <p style="color:#999; font-size:12px; margin-top:4px;">Digital Marketing Academy • Patiala</p>
      </div>

    </div>

  </div>
`,

};


    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");

    // WhatsApp API Trigger
    const whatsappUrl = "https://console.authkey.io/restapi/requestjson.php";
   
    const whatsappPayload = {
      country_code: "91",
      mobile: phone, // Send message to the provided phone number
      wid: "7130",
      type: "interactive",
      template_name: "academy", // Ensure correct template name
      language: {
        policy: "deterministic",
        code: "en" // Use the correct language code for your template
      },
      bodyValues: {
        "1": name,
        "2": interest
      },

    };
       

    const whatsappResponse = await fetch(whatsappUrl, {
      method: "POST",
      headers: {
        Authorization: "Basic 20b1a74e419f290e",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(whatsappPayload),
    });

    if (!whatsappResponse.ok) {
      console.error("Failed to send WhatsApp message:", whatsappResponse.statusText);
    } else {
      console.log("WhatsApp message sent successfully!");
    }

    res
      .status(200)
      .json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Error sending email or WhatsApp message:", error);
    res
      .status(500)
      .json({ error: "Failed to send message. Please try again later." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



