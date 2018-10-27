document.addEventListener("DOMContentLoaded", function (event) {

//var userName = prompt("Hi there! What is your name?");
//alert("Welcome to Word Scramble " + userName + "." + " This is an opportunity to improve your spelling skills and expand your vocabulary. So Enjoy!");

var wordListArray = [
    "DISCOMBOBULATE",
    "CASCADING",
    "SHOW",
    "RECEIPT",
    // "FACEBOOK",
    // "SYNTAX",
    // "MULTIPLY",
    // "INTERNET",
    // "BASKET",
    // "TECHNOLOGY",
    //  "SHEET",
    //  "CLOUD",
    //  "SPLIT",
    //  "WINNER",
    //  "RANK",
    //  "REVOLT",
    //  "YIELD",
    //  "SUBMIT",
    //  "ATTEND",
    //  "REMEMBER",
    //  "TWITTER",
    //  "ASSURANCE"
  ]

  var clue_Object = {
  DISCOMBOBULATE: "To be in a state of confusion",
  CASCADING: "CSS",
  SHOW: "To display something",
  RECEIPT: "Proof of purchase",
}

// keys_of_object = Object.keys(clue_Object);
// values_of_object = Object.values(clue_Object);
// console.log(keys_of_object + " " + values_of_object);
console.log(Object.entries(clue_Object));

for (var i = 0; i < clue_Object[].length; i++) {

}



var randomWord = clue_Object[Math.floor(Math.random() * clue_Object.length)];
console.log("XYZ="+randomWord);



  // var randomWord = wordListArray[Math.floor(Math.random() * wordListArray.length)];

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

  function randomWordGen() {
    randomWord = wordListArray[Math.floor(Math.random() * wordListArray.length)];
    splitToCharacters (randomWord);

    var scramble = splitToCharacters (randomWord);
    scramble.sort()
    console.log(scramble);


    var joinArray = scramble.join();
    console.log(joinArray);

    var actualGameWords = removeComma(joinArray);
    console.log("a="+actualGameWords.length);
    document.getElementById("actualGameWords").innerHTML = actualGameWords;
 }
    //.sort--sorts the items of an array alphabetically or numerically
    //.join --joins the elements of an array into a string + returns the string
    // replace the commas with what ever character you want, e.g I replaced the commas with space
    //g flag - generic expression that replaces all




    function countdown() {
      var count = 31;
      setInterval(function(){
      if (count > 0) {
        count --;
        console.log(count);
        document.getElementById("counter").innerHTML = count;
      };
      if (count == 0) {
        //console.log(count);
        document.getElementsByClassName('containerGame')[0].innerHTML = "";//hides box when game is over
        // console.log(document.getElementsByClassName('containerGame')[0].innerHTML + "hide box");
        document.getElementsByClassName('containerGame')[0].style.borderStyle = "none"; //when game is over there is no border style (the dotted line)
        var test = document.getElementById("timeIsUp").innerHTML;
        console.log("test = "+test);
        document.getElementById("timeIsUp").innerHTML = "GAME OVER YOU SCORED " + gameScore + " POINTS"


        //create a replay button
        var createReplayButton = document.createElement("button");
        button.innerHTML = "REPLAY";
        var replay = document.getElementsByClassName("containerTimeUp");
        replay.appendChild(replay);

      }
     },
      1000);
    }
    // make a set interval and have it call a function every second
    // the function is going to first check if count is greater than 0
    // if it is greater than 0, decrease count by 1
    // Then, set counter's html to count
    // if it's not greater than 0, end the game

    var gameScore = 0;
    var userInput = document.getElementById("inputBox").value;



   document.getElementById('inputBox').addEventListener("keypress", function (event) {
     console.log("code"+ event.keyCode);
     if (event.keyCode == 13) {
       console.log(userInput+  "after keycode");
       userInput = document.getElementById("inputBox").value;  //gets value of input box after enter

       // console.log(userInput.toUpperCase(), randomWord);
       if (userInput.toUpperCase() === randomWord) {
         console.log("inside if");
         console.log(userInput.toUpperCase );
         document.getElementById("correctOrIncorrect").innerHTML = "You are correct!"
         document.getElementById("correctOrIncorrect").style.backgroundColor = "green";
         randomWordGen();
         document.getElementById("inputBox").value = "";
         gameScore +=5;
         document.getElementById("score").innerHTML = gameScore;
        }

        else {
           document.getElementById("correctOrIncorrect").innerHTML="Incorrect"
           document.getElementById("correctOrIncorrect").style.backgroundColor = "red";
           randomWordGen();
           document.getElementById("inputBox").value = "";
           gameScore -=5;
           document.getElementById("score").innerHTML = gameScore;
         }
     }
   })


    document.getElementById("playGame").addEventListener("click",function(){
       countdown();
       randomWordGen();
    })

    document.getElementById("hintBtn").addEventListener("click", function () {
      console.log(document.getElementById("hintBtn").addEventListener);

    })

    document.getElementById("replayBtn").addEventListener("click",function(){
      location.reload();
    })


})



// function replay() {
//   var x = document.getElementById("replayBtn");
//   if (x.style.display === "none") {
//     x.style.display = "block" ;
//   }
//   else {
//     x.style.display = "none"
//   }
//
// }
//
