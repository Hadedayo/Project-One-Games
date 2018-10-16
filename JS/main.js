document.addEventListener("DOMContentLoaded", function (event) {

  var userName = prompt("Hi there! What is your name?");
  alert("Welcome to Word Scramble " + userName + "." + " This is an opportunity to improve your spelling skills and expand your vocabulary. So Enjoy!");

  //When you click the button, it should display the instructions//
  function instructionBtn (){
    document.getElementById("instructionText").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun";
  }

  var wordListArray = ["PROGRAM","VARIABLE", "OFFICIAL", "FLEX", "CASCADING", "DEVELOPER", "SYNTAX", "MULTIPLY", "TECHNOLOGY", "SOFTWARE", "FUNCTION", "SHEET"]

  var randomWord = wordListArray[Math.floor(Math.random() * wordListArray.length)];

    //access a randomWord
    //splits the randomword into array (Arr) of letters

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
  var scrambledWords = document.getElementById("actualGameWords").innerHTML = actualGameWords;

  var userArray = [];
  for (var i = 0; i < actualGameWords.length; i++) {
    userArray[i] = "_";
  }
  console.log(userArray);










})
