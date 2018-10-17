document.addEventListener("DOMContentLoaded", function (event) {

//var userName = prompt("Hi there! What is your name?");
  //alert("Welcome to Word Scramble " + userName + "." + " This is an opportunity to improve your spelling skills and expand your vocabulary. So Enjoy!");

  //When you click the button, it should display the instructions//

  var wordListArray = ["DISCOMBOBULATE", "FLEX", "CASCADING", "SHOW" , "SYNTAX", "MULTIPLY" , "TECHNOLOGY" , "SHEET", "SOFTWARE", "ENTHRALL"]
  var randomWord = wordListArray[Math.floor(Math.random() * wordListArray.length)];

  function randomWordGen() {
    function splitToCharacters(randomWord) {
      var characters = randomWord.split("");
      console.log(characters);
      return characters;
    }
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
    function removeComma(joinArray) {
      var rmv = joinArray.replace(/,/g , " ");
      console.log(rmv);
      return rmv;
    }
    removeComma(joinArray);

    //displays the string without commas onto the webpage
    var actualGameWords = removeComma(joinArray);
    console.log("a="+actualGameWords.length);
    var scrambledWordsOnScreen = document.getElementById("actualGameWords").innerHTML = actualGameWords;
    }
    //randomWordGen();

    document.getElementById('Hints').addEventListener("click", function (event) {
      var Hint = document.getElementById("hintInformation").innerHTML = "Give me Hintss";
    })



    var count = 60;
    setInterval(function(){
      if (count > 0) {
        count --;
        console.log(count);
        document.getElementById("counter").innerHTML = count;
      };
      if (count < 10) {
        document.getElementById("counter").style.color = "red";
      }
    }, 1000);










       //User's input SECTION
       document.getElementById("testButtonId").addEventListener("click",function(){
         var userInput = document.getElementById("test").value;
         console.log(userInput);
         if (userInput.toUpperCase() === randomWord) {
           console.log(userInput.toUpperCase );
           document.getElementById("correctOrIncorrect").innerHTML="You are correct!"
           document.getElementById("correctOrIncorrect").style.backgroundColor = "green";
           }
           else {
             document.getElementById("correctOrIncorrect").innerHTML="Incorrect. The answer is: " + randomWord
             document.getElementById("correctOrIncorrect").style.backgroundColor = "red";
           }
       })



    














})
