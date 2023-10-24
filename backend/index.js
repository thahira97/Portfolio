require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const favicon = require("express-favicon");

const app = express();
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());
app.use("/", router);
app.use(favicon(__dirname + '/favicon.ico'));
const PORT = process.env.PORT || 8080;

app.get("/", (req,res)=> {
  res.send("Server is running")
})
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

router.get("/contact",(req,res)=> {
  res.send("Contact also working")
})

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  // Check if any of the required fields are empty
  if (!name || !email || !message ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const mail = {
    from: name,
    to: process.env.EMAIL,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).json({ error: "Failed to send email" });
    } else {
      res.json({ code: 200, status: "Message Sent!" });
    }
  });
});
