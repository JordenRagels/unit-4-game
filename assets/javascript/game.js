


// Global Variable
var compNumber = randomNumberGen(19,120);
var gem1 = randomNumberGen(1,19);
var gem2 = randomNumberGen(1,19);
var gem3 = randomNumberGen(1,19);
var gem4 = randomNumberGen(1,19);
var userNumber = 0;
var wins = 0;
var loses = 0;

// Functions 

// A function that randomly creates a numnber 
function randomNumberGen (start,end) {
    var randomNumber;

    randomNumber = Math.floor(Math.random() * (end - start) + start);

    return randomNumber;
}
$("#userNumber").text(userNumber);

$("#gem1").click(function(){
    userNumber += 1;
    alert("clicked" + userNumber);
  });



// A function that randomly assigns a number from 1-19 for my gems


// onClick event 

// Keeps track of wins 

// Keeps track of wins








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


































