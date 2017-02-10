'use strict';
//QUIZ ABOUT ME
var confirmQuiz = confirm('Hello, would you like to take a quiz?');
if (confirmQuiz){
  console.log('Awesome, lets get started!');
//----------------------------------------------------------------------------
//put evrything inside the origional confirm so that user can skip the quiz.
  var userName = prompt('Before we get started, what is your name?');
  console.log(userName);
// Questions to be prompted to the user...(still needs prompt argument)
  var questions = [
    'blank space to make numbers line up',
    ('Thanks' + ' ' + userName + ' ' + 'Please answer with Yes or No. Does Saul have a dog?'),
    'Please answer with Yes or No. Does Saul play any sports?',
    'Please answer with Yes or No. Does Saul own a car?',
    'Please answer with Yes or No. Is Saul new to coding?',
    'Please answer with Yes or No. Does Saul like Code Fellows?'];
  var responses = [
    'Awesome, you are correct!',
    'Too Bad, you were wrong.'];
  var score = 0;
//Question 1-5 ----------------------------------------------------------------
  //creating the function
  function questionsOneThroughFive(){
    for(var i = 1; i < questions.length; i++){
      var answer = prompt(questions[i]);
      if(answer.toUpperCase() === 'YES'){
        console.log(responses[0]);
        alert(responses[0]);
        score += 1;
      }else{
        console.log(responses[1]);
        alert(responses[1]);
      }
    }
  }
  //calling the function
  questionsOneThroughFive();
//Question 6 (4 tries and responses)------------------------------------------
//creating the function...
  function questionSix() {
    var min = 0;
    var max = 50;
    var tries = 4;
    var guesses = 0;
    for (var i = 0; i < tries; i++) {
      guesses += 1;
      var myAge = Math.floor(Math.random() * ( max - min + 1) + min);
      var ageGuess = prompt('Guess how old Saul is...');
      ageGuess = parseInt(ageGuess, 10);
      if (ageGuess < myAge) {
        alert('too low');
      }else if (ageGuess > myAge) {
        alert('too high');
      }else if ( ageGuess === myAge) {
        if ( guesses === 1){
          alert('right!, you got it in ' + guesses + ' guess');
          score += 1;
        }else{
          alert('right!, you got it in ' + guesses + ' guesses');
          score += 1;
        }
        break;
      }else {
        alert('try again');
      }
    }
  }
//calling the function
  questionSix();

  // Question 7 (6 tries)--------------------------------------------------------
  //creating the function...
  function questionSeven(){
    var maxGuess = 7;
    for(var guess = 0; guess < maxGuess; guess++){
      var carBrands = ['chevy', 'ford', 'infiniti', 'lexus', 'jeep', 'range rover', 'audi', 'bmw'];
      var userInput = prompt('What is one brand of car Saul has owned?');
      var brandGuessedCorrectlyFlag = false;
      for(var carPosition = 0; carPosition < carBrands.length; carPosition++){
        if(userInput.toLowerCase() === carBrands[carPosition]){
          brandGuessedCorrectlyFlag = true;
          break;
        }
      }
      if(brandGuessedCorrectlyFlag === true){
        console.log('correct, saul has owned a ' + carBrands);
        alert('correct, saul has owned a ' + carBrands);
        score += 1;
        break;
      }else{
        console.log('sorry, you must not know saul very well');
        alert('sorry, you must not know saul very well');
        if(guess === 6){
          console.log('Sorry, you are out of guesses, if you were wondering though, saul has owned a: ' + carBrands);
          alert('Sorry, you are out of guesses, if you were wondering though, saul has owned a: ' + carBrands);
        }
      }
    }
  }
  //calling the function..
  questionSeven();
  //Scoring Code----------------------------------------------------------------
  //creating the function...
  function totalScore(){
    alert('Your Score: ' + score + '/7');
  }
// calling the function...
  totalScore();
}else{
  alert('Thats Fine');
  console.log('Thats fine...');
}
