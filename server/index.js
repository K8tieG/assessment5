const express = require("express");
const cors = require("cors");


const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

//random fortune

app.get("/api/fortune", (req,res) => {
  const fortune = ["Your family is young, gifted and attractive.", 
  "Your character can be described as natural and unrestrained.",
  "Your dreams are worth your best efforts to achieve them.",
  "Your love life will be happy and harmonious.",
  "You have had a good start. Work harder!",
];

let randomIndex = Math.floor(Math.random() * fortune.length);
let randomFortune = fortune[randomIndex];

res.status(200).send(randomFortune);

});

//Color 
app.get("/api/color", (req,res) => {
  const color = ["red",
  "Orange",
  "Yellow",
  "Blue",
  "Green",
  "Indigo",
  "Violet"
];

let randomIndex = Math.floor(Math.random() * color.length);
let randomColor = color[randomIndex];

res.status(200).send(randomColor);

});

//word input 
app.post("/api/word", (req,res) => {
  let { word1, word2, word3 } = req.body
  let dayWords = {
    word1,
    word2,
    word3,
  }
  
.push(dayWords)
res.status(200).send(dayWords)
}),


//Intention Select






app.listen(4000, () => console.log("Server running on 4000"));
