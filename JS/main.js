document.addEventListener("DOMContentLoaded", function (event) {

  var userName = prompt("Hi there! What is your name?");
  alert("Welcome to Word Scramble " + userName + "." + " This is an opportunity to improve your spelling skills and expand your vocabulary. So Enjoy!");

//When you click the button, it should display the instructions//
  function instructionBtn (){
    document.getElementById("instructionText").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.";
  }

  //var count = 0;

  var wordListArray = ["program","enthrall", "official", "flex", "cascading", "developer", "add", "multiply", "technology", "software", "function"]

  var randomWord = wordListArray[Math.floor(Math.random() * wordListArray.length)];
    console.log(randomWord);














})
