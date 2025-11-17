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
  //   const transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com",
  // port: 465, // 587 is also valid (TLS)
  // secure: true, // true for 465, false for 587
  // auth: {
  //   user: process.env.EMAIL, // your Gmail address
  //   pass: process.env.APP_PASSWORD, // App password, NOT your regular password
  // },
// });



// Email options
const mailOptions = {
  from: `Digital Paaji <${process.env.EMAIL}>`,
  to: process.env.receiverEMAIL,
  subject: `New Contact Form Submission from ${name}`,
  html: `
  <div style="font-family: Arial, sans-serif; background: #FAF8EA; padding: 20px; margin: 0; width: 100%; box-sizing: border-box;">
    
    <!-- Card Container -->
    <div style="
      max-width: 600px; 
      background: #fff; 
      margin: auto; 
      border-radius: 10px; 
      padding: 25px; 
      border: 1px solid #e6e6e6;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    ">

      <!-- Header -->
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="
          color: #B67032; 
          margin: 0; 
          font-size: 24px;
          font-weight: bold;
        ">
          New Contact Form Submission
        </h2>
        <p style="color: #444; margin-top: 8px;">A new lead has contacted you through Digital Paaji</p>
      </div>

      <!-- Info Table -->
      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #333;">Name:</td>
          <td style="padding: 10px; color: #555; background:#fafafa; border-radius:6px;">${name}</td>
        </tr>

        <tr>
          <td style="padding: 10px; font-weight: bold; color: #333;">Email:</td>
          <td style="padding: 10px; background:#fafafa; border-radius:6px;">
            <a href="mailto:${email}" style="color: #B67032; text-decoration:none;">
              ${email}
            </a>
          </td>
        </tr>

        <tr>
          <td style="padding: 10px; font-weight: bold; color: #333;">Phone:</td>
          <td style="padding: 10px; color: #555; background:#fafafa; border-radius:6px;">${phone}</td>
        </tr>

        <tr>
          <td style="padding: 10px; font-weight: bold; color: #333;">Qualification:</td>
          <td style="padding: 10px; color: #555; background:#fafafa; border-radius:6px;">${qualification}</td>
        </tr>

        <tr>
          <td style="padding: 10px; font-weight: bold; color: #333;">Course:</td>
          <td style="padding: 10px; color: #555; background:#fafafa; border-radius:6px;">${interest}</td>
        </tr>

        <tr>
          <td style="padding: 10px; font-weight: bold; color: #333;">Lead Source:</td>
          <td style="padding: 10px; color: #555; background:#fafafa; border-radius:6px;">${hear}</td>
        </tr>

        <tr>
          <td style="padding: 10px; font-weight: bold; color: #333; vertical-align: top;">Message:</td>
          <td style="
            padding: 10px; 
            background:#fafafa; 
            border-radius:6px; 
            color:#555; 
            white-space: pre-wrap;
            line-height: 1.5;
          ">
            ${message}
          </td>
        </tr>
      </table>

      <!-- Signature -->
      <div style="text-align: center; margin-top: 25px;">
        <p style="color: #B67032; font-size: 16px; font-weight: bold;">Digital Paaji</p>
        <p style="font-size: 13px; color: #888;">
          Digital Marketing Academy • Patiala
        </p>
      </div>

    </div>
  </div>
`,

  
  // html: `
  //   <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; word-wrap: break-word; overflow-wrap: break-word;">
  //     <h2 style="color: #007bff; text-align: center; word-wrap: break-word;">New Contact Form Submission</h2>
  //     <p style="font-size: 16px; word-wrap: break-word;">You have received a new message:</p>
  //     <table style="width: 100%; border-collapse: collapse; word-wrap: break-word; overflow-wrap: break-word;">
  //       <tr>
  //         <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
  //         <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
  //       </tr>
      
  //       <tr>
  //         <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
  //         <td style="padding: 8px; border-bottom: 1px solid #ddd; word-break: break-all;"><a href="mailto:${email}" style="color: #007bff;">${email}</a></td>
  //       </tr>
  //       <tr>
  //         <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
  //         <td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone}</td>
  //       </tr>
  //       <tr>
  //         <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Qualification:</strong></td>
  //         <td style="padding: 8px; border-bottom: 1px solid #ddd;">${qualification}</td>
  //       </tr>
  //       <tr>
  //         <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Course:</strong></td>
  //         <td style="padding: 8px; border-bottom: 1px solid #ddd;">${interest}</td>
  //       </tr>
      
  //       <tr>
  //         <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Leads From:</strong></td>
  //         <td style="padding: 8px; border-bottom: 1px solid #ddd;">${hear}</td>
  //       </tr>
  //       <tr>
  //         <td style="padding: 8px; border-bottom: 1px solid #ddd; vertical-align: top;"><strong>Message:</strong></td>
  //         <td style="padding: 8px; border-bottom: 1px solid #ddd; word-wrap: break-word; overflow-wrap: break-word;">${message}</td>
  //       </tr>
  //     </table>
  //     <p style="text-align: center; margin-top: 20px;"><strong>Digital Paaji</strong></p>
  //   </div>
  // `,
};


    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");

    // WhatsApp API Trigger
    const whatsappUrl = "https://console.authkey.io/restapi/requestjson.php";
    // const whatsappPayload = {
    //   country_code: "91",
    //   mobile: phone, // Send message to the provided phone number
    //   wid: "6351",
    //   type: "interactive",
     
    //   bodyValues: {
    //     "1": fname // Use "1" to target the first variable in your template
    //   }
    // };
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



