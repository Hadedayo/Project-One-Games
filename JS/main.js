document.addEventListener("DOMContentLoaded", function (event) {

//var userName = prompt("Hi there! What is your name?");
  //alert("Welcome to Word Scramble " + userName + "." + " This is an opportunity to improve your spelling skills and expand your vocabulary. So Enjoy!");

  //When you click the button, it should display the instructions//

  var wordListArray = ["DISCOMBOBULATE", "FLEX", "CASCADING", "SHOW" , "SYNTAX", "MULTIPLY" , "TECHNOLOGY" , "SHEET", "SPLIT", "WINNER", "RANK", "REVOLT", "YIELD", "SUBMIT", "RECEIPT", "ATTENTION", "REMEMBER"]
  var randomWord = wordListArray[Math.floor(Math.random() * wordListArray.length)];

  function splitToCharacters(randomWord) {
    var characters = randomWord.split("");
    console.log(characters);
    return characters;
  }

  function removeComma(joinArray) {
    var rmv = joinArray.replace(/,/g , " ");
    console.log(rmv);
    return rmv;
  }

  // make a set interval and have it call a function every second
  // the function is going to first check if count is greater than 0
  // if it is greater than 0, decrease count by 1
  // Then, set counter's html to count
  // if it's not greater than 0, end the game

  function countdown() {
    var count = 61;
    setInterval(function(){
    if (count > 0) {
      count --;
      console.log(count);
      document.getElementById("counter").innerHTML = count;
    };
    if (count < 11) {
      //document.getElementById("counter").style.color = "red";
    }
    if (count == 0) {
      document.getElementById("gameOverScore").innerHTML = "GAME OVER " + "YOU SCORED " +gameScore + " POINTS";
    }
   },
    1000);
  }

  function randomWordGen() {
    randomWord = wordListArray[Math.floor(Math.random() * wordListArray.length)];
    splitToCharacters (randomWord);

    //.sort--sorts the items of an array alphabetically or numerically
    var scramble = splitToCharacters (randomWord);
    scramble.sort()
    console.log(scramble);

    //.join --joins the elements of an array into a string + returns the string
    var joinArray = scramble.join();
    console.log(joinArray);

    //this function removes the commas in the string
    // replace the commas with what ever character you want, e.g I replaced the commas with space
    //g flag - generic expression that replaces all

    removeComma(joinArray);

    //displays the string without commas onto the webpage
    var actualGameWords = removeComma(joinArray);
    console.log("a="+actualGameWords.length);
    document.getElementById("actualGameWords").innerHTML = actualGameWords;
  }

  var gameScore = 0;

  document.getElementById("submitBtn").addEventListener("click",function(){
   var userInput = document.getElementById("submit").value;
   // 
   // var key = event.keyCode;
   // var userInput = document.getElementById('id').value;
   // if (key===13) {
   //
   // }
   //
   // document.getElementById('id').addEventListener("keypress", function () {
   //   var
   // })


   console.log(userInput);
   if (userInput.toUpperCase() === randomWord) {
     console.log(userInput.toUpperCase );
     document.getElementById("correctOrIncorrect").innerHTML="You are correct!"
     document.getElementById("correctOrIncorrect").style.backgroundColor = "green";
     document.getElementById('id')
     randomWordGen();
     gameScore ++;
     document.getElementById("score").innerHTML = gameScore;
    }
     else {
       document.getElementById("correctOrIncorrect").innerHTML="Incorrect. The answer was: " + randomWord
       document.getElementById("correctOrIncorrect").style.backgroundColor = "red";
       randomWordGen();
       gameScore --;
       document.getElementById("score").innerHTML = gameScore;
     }

   })


    document.getElementById("playGame").addEventListener("click",function(){
       countdown();
       randomWordGen();
    })
















})
