var firstCrystalNumber = Math.floor(Math.random()*4 + 1);
var secondCrystalNumber = Math.floor(Math.random()*4 + 1);
var thirdCrystalNumber = Math.floor(Math.random()*4 + 1);
var fourthCrystalNumber = Math.floor(Math.random()*4 + 1);

// console.log(firstCrystalNumber, secondCrystalNumber, thirdCrystalNumber, fourthCrystalNumber);
randomNumber = Math.floor(Math.random()*99);
$("#random-number-box").html("<h2>Random Number: " + randomNumber + "</h2>");
console.log(randomNumber);

var totalScore = 0;
var wins = 0;
var losses =0;
var gameReset = false;


$("#first-crystal").on("click", function(){
    clickFunction(firstCrystalNumber); 
});
$("#second-crystal").on("click", function(){
    clickFunction(secondCrystalNumber);
});
$("#third-crystal").on("click", function(){
    clickFunction(thirdCrystalNumber);
});
$("#fourth-crystal").on("click", function(){
    clickFunction(fourthCrystalNumber);
});

function clickFunction(crystalNumber){
    if (gameReset) {
        randomNumber = Math.floor(Math.random()*99);
        $("#random-number-box").html("<h2>Random Number: " + randomNumber + "</h2>");
        $("#your-total-score").html("<h2>" + "" + "</h2>");
        firstCrystalNumber = Math.floor(Math.random()*4 + 1);
        secondCrystalNumber = Math.floor(Math.random()*4 + 1);
        thirdCrystalNumber = Math.floor(Math.random()*4 + 1);
        fourthCrystalNumber = Math.floor(Math.random()*4 + 1);
        $("#win-loss-announcement").html("<h2></h2>");
        gameReset = false;
    }
    else {
        console.log("entered click function 1");
        totalScore += crystalNumber;
        $("#your-total-score").html("<h2>" + totalScore+ "</h2>");
        winlose();
    }
}

function winlose(){
    if (totalScore === randomNumber){
        wins ++;
        $("#wins-losses-box").html("<h3>Wins: " + wins + "</h3>" + "<h3>losses: " + losses + "</h3>");
        $("#win-loss-announcement").html("<h2> You Won!. Press any crystal to restart the game. </h2>");
        gameReset = true;
        totalScore = 0;
    }
    else if (totalScore > randomNumber){
        losses ++;
        $("#wins-losses-box").html("<h3>Losses: " + losses + "</h3>" + "<h3>losses: " + losses + "</h3>");
        $("#win-loss-announcement").html("<h2> Sorry. You lost!. Press any crystal to restart the game. </h2>");
        gameReset = true;
        totalScore = 0;

    }
};
