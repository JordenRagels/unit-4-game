


// Global Variable
var compNumber = randomNumberGen(19, 120);
var gem1 = randomNumberGen(1, 19);
var gem2 = randomNumberGen(1, 19);
var gem3 = randomNumberGen(1, 19);
var gem4 = randomNumberGen(1, 19);
var userNumber = 0;
var wins = 0;
var loses = 0;
var score = 0;

// Functions 

// Reset Function 

function reset() {
   
    userNumber = 0;
    compNumber = randomNumberGen(19, 120);
    gem1 = randomNumberGen(1, 19);
    gem2 = randomNumberGen(1, 19);
    gem3 = randomNumberGen(1, 19);
    gem4 = randomNumberGen(1, 19);
    $("#compNumber").text(compNumber);

}



// A function that randomly creates a numnber 
function randomNumberGen(start, end) {
    var randomNumber;

    randomNumber = Math.floor(Math.random() * (end - start) + start);

    return randomNumber;
}
// Puts the computer number on the html page

$("#compNumber").text(compNumber);

// Making gemClick function


// onClick event 

$("#gem1").click(function () {
    gemClick(gem1);
});

$("#gem2").click(function () {
    gemClick(gem2);
});

$("#gem3").click(function () {
    gemClick(gem3);
});

$("#gem4").click(function () {
    gemClick(gem4);
});


function gemClick(gemValue) {
    userNumber += gemValue;
    $("#userNumber").text(userNumber);

    if (userNumber > compNumber) {
        loses++;
        $("#loses").text(loses);
        reset();
    }
    else if (userNumber === compNumber) {
        wins++;
        $("#wins").text(wins);
        reset();
    }
    else {
        console.log(userNumber, compNumber);
    }
}
//Writes out the userNumber to the html


/*
// click function for gem 1
$("#gem1").click(function(){
    userNumber += 1;
  });
  $("#gem2").click(function(){
    userNumber += 1;
  });
  $("#gem3").click(function(){
    userNumber += 1;
  });
  $("#gem4").click(function(){
    userNumber += 1;
  });

*/

// Keeps track of wins 

// Keeps track of loses










// $('.gem').click(function(){
//     var checkValue = this.value;
//     console.log(checkValue);
//     if (checkValue == "gem1") {
//         userNumber += gem1

//     }
//     else if (checkValue == "gem2") {
//         userNumber += gem2
//         console.log("hey2");
//     }
//     else if (checkValue == "gem3") {
//         userNumber += gem3
//         console.log("hey3");
//     }
//     else if (checkValue == "gem4") {
//         userNumber += gem4
//         console.log("hey4");
//     }

// console.log(userNumber);
// })

// console.log(gem1,gem2,gem3,gem4);


































