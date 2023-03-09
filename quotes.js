document.addEventListener('DOMContentLoaded', function() {
    let btn = document.getElementsById("btn");
let output = document.getElementById("output");
let quotes = 
[
"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
"The greatness of a man is not in how much wealth he acquires, but in his integrity and his ability to affect those around him positively.",
"Emancipate yourselves from mental slavery. None but ourselves can free our minds.",
"In this great future, you can't forget your past.",
"Love the life you live. Live the life you love.",
"The good times of today are the sad thoughts of tomorrow.",
"If you don't stand for something you will fall for anything.",
"Don't gain the world and lose your soul, wisdom is better than silver or gold.",
"One good thing about music, when it hits you, you feel no pain.",
"The day you stop racing, is the day you win the race.",
];

btn.addEventListener('click', function() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  output.innerHTML = randomQuote;  
});
  });