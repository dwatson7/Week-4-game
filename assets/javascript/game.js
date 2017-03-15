var wins = 0;
var losses = 0;
var redCrystalGuess = '';
var greenCrystalGuess = '';
var blueCrystalGuess = '';
var yellowCrystalGuess ='';
var uniqueNumber = '';
var results = '';

window.onload= function() {

//when the user uploads the screen this block of code will reset the number of wins to 0
wins = 0;
document.getElementById('wins').innerHTML = wins;
console.log(wins);

//when the user uploads the screen this block of code will reset the number of losses to 0

losses = 0 ;
document.getElementById('losses').innerHTML = losses;
console.log(losses);


//when a user uploads the screen this block of code will reset the value of 'redCrystal' to a random number between 1-12
document.getElementById('redCrystal').innerHTML = Math.floor(Math.random() * (12 - 1));  redCrystalGuess;
console.log(redCrystal);

//when a user uploads the screen this block of code will reset the value of 'blueCrystal' to a random number between 1-12

document.getElementById('blueCrystal').innerHTML = Math.floor(Math.random() * (12 - 1)); blueCrystalGuess;
console.log(blueCrystal);

//when a user uploads the screen this block of code will reset the value of 'greenCrystal' to a random number between 1-12

document.getElementById('greenCrystal').innerHTML = Math.floor(Math.random() * (12 - 1)); greenCrystalGuess;
console.log(greenCrystal);


//when a user uploads the screen this block of code will reset the value of 'yellowCrystal' to a random number between 1-12

document.getElementById('yellowCrystal').innerHTML = Math.floor(Math.random() * (12 - 1)); yellowCrystalGuess;
console.log(yellowCrystal);


//when a user uploads the screen this block of code will reset the number to guess to a random number between 19-120

document.getElementById('randomNumber').innerHTML = Math.floor(Math.random() * (120 - 19)); randomNumber;
console.log(randomNumber);

//when a user uploads the screen this block of code will reset the value of 'results' to 0

results = 0;
document.getElementById('results').innerHTML = results;
console.log(results);


}




  //if the user calculations add up to the random generated number then the number of wins would increase

    if (results === randomNumber) {
            wins++;



    }

    if (redCrystalGuess > 0) {
        results++;
        results = results + redCrystalGuess;
        document.getElementById('results').innerHTML = results;
        document.getElementById('')




      if (results === randomNumber) {
              wins++;



      }
    $("#blueCrystal").click(function(event){
      //if the user clicks on redCrystal then the results increase by that random generated number
      if (blueCrystalGuess) {
          results++;
          results = results + blueCrystalGuess;
          document.getElementById('results').innerHTML = results;

      }
      else if (randomNumber === results) {
              wins++;
              document.getElementById('')

      }
      $("#greenCrystal").click(function(event){
        //if the user clicks on redCrystal then the results increase by that random generated number
        if (greenCrystalGuess) {
            results++;
            results = results + greenCrystalGuess;
            document.getElementById('results').innerHTML = results;

        }
        $("#yellowCrystal").click(function(event){
          //if the user clicks on redCrystal then the results increase by that random generated number
          if (yellowCrystalGuess) {
              results++;
              results = results + yellowCrystalGuess;
              document.getElementById('results').innerHTML = results;

          }



        });
      });
      });
};
