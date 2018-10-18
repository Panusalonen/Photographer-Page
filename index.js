const express = require('express');
const https = require('https');
const app = express();
const fs = require('fs');
const mailer = require('nodemailer');
const handlebars = require('handlebars');
const hb = require('express-handlebars');
const ca = require('chalk-animation');
const images = require('./image.json');
const videos = require('./video.json');
const path = require('path');
const bp = require('body-parser');

////// MIDDLEWARE //////

app.use(require('body-parser').urlencoded({ extended: false }));
app.use(bp.json());
app.set("view engine", "handlebars");
app.engine(
    "handlebars",
    hb({
        defaultLayout: "main"
    })
);
app.use(express.static("./public"));

////// ROUTING ///////

app.get('/image/:id', (req, res) => {
    res.render("images", {
        layout: "main",
        images
    });
})
app.get("/", (req, res) => {
    res.render("welcome");
});
app.get("/home", (req, res) => {
    res.render("home");
});
app.get("/about", (req, res) => {;
    res.render("me");
});
app.get("/portfolio", (req, res) => {
    res.render("portfolio");
});
app.get("/images", (req, res) => {
    res.render("images", {
        layout: "main",
        images
    });
})
app.get("/videos", (req, res) => {
    res.render("videos", {
        layout: "main",
        videos
    });
})
app.get("/references", (req, res) => {
    res.render("references");
});
app.get("/contact", (req, res) => {
    res.render("home");
});
app.get("*", (req, res) => {
    res.redirect("/");
});
// app.post('/home#contact', function(req, res) {
//     const output =
//         `
//         <p>You have a new contact</p>
//         <h3>Contact Details</h3>
//         <ul>
//             <li>Name: ${req.body.email}}</li>
//             <li>Name: ${req.body.name}</li>
//             <li>Name: ${req.body.message}}</li>
//         </ul>
//             `;
//     const transporter = nodemailer.createTransport({
//         host: 'mail.google.com',
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: "benozlemsen@gmail.com", // generated ethereal user
//             pass: "HeyHeyHey12345" // generated ethereal password
//         },
//         tls: {
//             rejectUnauthorized: false
//         }
//     });
//     const mailOptions = {
//         from: `"Page Contact" <${req.body.email}}>`, // sender address
//         to: 'benozlemsen@gmail.com, panusalonen@gmail.com', // list of receivers
//         subject: 'Page Contact request', // Subject line
//         text: 'Hello world?', // plain text body
//         html: output // html body
//     };
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log("ERROR :", error);
//         }
//         res.render('home', {
//             msg: 'Email has been sent!'
//         });
//     });
//     console.log("BODY :", req.body);
// });

/////// PORT ///////

app.listen(process.env.PORT || 8080, () =>
    ca.rainbow("I am listening, Master")
);
