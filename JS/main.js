document.addEventListener("DOMContentLoaded", function (event) {

//var userName = prompt("Hi there! What is your name?");
  //alert("Welcome to Word Scramble " + userName + "." + " This is an opportunity to improve your spelling skills and expand your vocabulary. So Enjoy!");

  //When you click the button, it should display the instructions//
  function instructionBtn (){
    document.getElementById("instructionText").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun";
  }
  var wordListArray = ["ARRAY", "FLEX", "CASCADING", "SHOW" , "SYNTAX", "MULTIPLY" , "TECHNOLOGY" , "SHEET"]
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
      var rmv = joinArray.replace(/,/g , "");
      console.log(rmv);
      return rmv;
    }
    removeComma(joinArray);

    //displays the string without commas onto the webpage
    var actualGameWords = removeComma(joinArray);
    console.log("a="+actualGameWords.length);
    var scrambledWordsOnScreen = document.getElementById("actualGameWords").innerHTML = actualGameWords;
    }
    randomWordGen();

    //created an empty array
    //for loop--> makes sure that for the length of random scrambled word, I need to have the same number of underscores
    //Replaces the empty array with underscores
    var underscoreArray = [];
    for (var i = 0; i < actualGameWords.length; i++) {
     underscoreArray[i] = "_";
     }
    console.log(underscoreArray);

    //.join --joins the elements of an array into a string + returns the string
    //joins the [_,_,] into a string to remove commas
    var joinArray = underscoreArray.join();
    console.log(joinArray);

    //joinArray contains a string of underscore with commas, now replace the commas with spaces
    var addSpaceBtwUnderScores = joinArray.replace(/,/g , " ");
    console.log(addSpaceBtwUnderScores);

    //the underscore will now be displayed on the webpage in place of the text in "User Types" of html file

   var writeUnderscoreOnPage = document.getElementById("underscore").innerHTML = addSpaceBtwUnderScores;

   //User's input SECTION
   document.getElementById("testButtonId").addEventListener("click",function(){
     var userInput = document.getElementById("test").value;
     console.log(userInput);
     if (userInput.toUpperCase() === randomWord) {
       console.log(userInput.toUpperCase );
       document.getElementById("correctOrIncorrect").innerHTML="You are correct!"
       }
       else {
         document.getElementById("correctOrIncorrect").innerHTML="Sorry this is incorrect. The answer is: " + randomWord
       }
   });
   document.getElementById("tryAgain").addEventListener("click", function (event) {
      randomWordGen();
      3
   })
})
