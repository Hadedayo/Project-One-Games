document.addEventListener("DOMContentLoaded", function (event) {

  var userName = prompt("Hi there! What is your name?");
  alert("Welcome to Word Scramble " + userName + "." + " This is an opportunity to improve your spelling skills and expand your vocabulary. So Enjoy!");

//When you click the button, it should display the instructions//
  function instructionBtn (){
    document.getElementById("instructionText").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.";
  }

  //var count = 0;

  var wordListArray = ["program","enthrall", "official", "flex", "cascading", "developer", "syntax", "multiply", "technology", "software", "function", "sheet"]

  var randomWord = wordListArray[Math.floor(Math.random() * wordListArray.length)];

    //access a randomWord
    //split the randomword into array (Arr) of letters
    //then randomly

  function scrambleWord(randomWord) {
    var characters = randomWord.split("");
    console.log(characters);
    return characters;
  }
  scrambleWord (randomWord);













})
