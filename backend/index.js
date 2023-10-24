require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const favicon = require("express-favicon");

const app = express();
app.use(cors({
  origin: ['http://localhost:3000', 'https://portfolio-back-alpha.vercel.app'],
  methods: ['GET', 'POST'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(favicon(__dirname + '/favicon.ico'));

const PORT = process.env.PORT || 8080;

// Reusable CORS middleware
const allowCors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  next();
};

app.use(allowCors);

app.get("/api", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

// Reusable sendMail function
const sendMail = (mailOptions, res) => {
  contactEmail.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(500).json({ error: "Failed to send email" });
    } else {
      res.json({ code: 200, status: "Message Sent!" });
    }
  });
};

app.post("/api/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  // Check if any of the required fields are empty
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const mailOptions = {
    from: name,
    to: process.env.EMAIL,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Message: ${message}</p>`,
  };

  sendMail(mailOptions, res);
});
