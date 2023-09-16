let homeScoreE1 = document.getElementById("home-score");
let guestScoreE1 = document.getElementById("guest-score");

let homeScoreBtnOne  = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo  = document.getElementById("home-score-btn-2");
let homeScoreBtnThree  = document.getElementById("home-score-btn-3");

let resetHomeScore = document.getElementById("reset-home-score");
let resetGuestScore = document.getElementById("reset-guest-score");

let guestScoreBtnOne  = document.getElementById("guest-score-btn-1");
let guestScoreBtnTwo  = document.getElementById("guest-score-btn-2");
let guestScoreBtnThree  = document.getElementById("guest-score-btn-3");


// Home Scores

homeScoreBtnOne.addEventListener("click", function() { 
    homeScoreE1.textContent++;
});

homeScoreBtnTwo.addEventListener("click", function(){
    homeScoreE1.textContent = Number(homeScoreE1.textContent) + 2;
});

homeScoreBtnThree.addEventListener("click", function(){
    homeScoreE1.textContent = Number(homeScoreE1.textContent) + 3;
});

resetHomeScore.addEventListener("click", function(){
    homeScoreE1.textContent = 0;
});


// Guest Scores

guestScoreBtnOne.addEventListener("click", function() { 
    guestScoreE1.textContent++;
});

guestScoreBtnTwo.addEventListener("click", function(){
    guestScoreE1.textContent = Number(guestScoreE1.textContent) + 2;
});

guestScoreBtnThree.addEventListener("click", function(){
    guestScoreE1.textContent = Number(guestScoreE1.textContent) + 3;
});

resetGuestScore.addEventListener("click", function () {
    guestScoreE1.textContent = 0;
});