$( document ).ready(function(){
  
  crystals = ['assets/images/red_crystal.jpg','assets/images/clear_crystal.jpg','assets/images/blue_crystal.jpg',
  'assets/images/black_crystal.jpg'];

        var random=Math.floor(Math.random()*120+19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
  $('#randomNumber').text(random);
  // Appending random number to the randomNumber id in the html doc
  //
  var one= Math.floor(Math.random()*12+1)
  var two= Math.floor(Math.random()*12+1)
  var three= Math.floor(Math.random()*12+1)
  var four= Math.floor(Math.random()*12+1)
  // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12
  // 
  var actual= 0; 
  var win= 0;
  var lose = 0;
  //  Decaring variables for tallies
$('#scoreWins').text(win);
$('#scoreLosses').text(lose);
//resets the game
function reset(){
      random=Math.floor(Math.random()*120+19);
      console.log(random)
      $('#randomNumber').text(random);
      one= Math.floor(Math.random()*12+1);
      two= Math.floor(Math.random()*12+1);
      three= Math.floor(Math.random()*12+1);
      four= Math.floor(Math.random()*12+1);
      actual= 0;
      $('#actualTotal').text(actual);
      } 
//adds the wins to the actual
function scoreWins(){
alert("You win!");
  wins++; 
  $('#scoreWins').text(wins);
  reset();
}
//addes the losses to the actualTotal
function lose(){
alert ("You lose!");
  losses++;
  $('#scoreLosses').text(losses);
  reset()
}
//sets up click for jewels
  $('#one').on ('click', function(){
    actual = actual + num1;
    console.log("New actual= " + actual);
    $('#actualTotal').text(actual); 
          //sets win/lose conditions
        if (actual == random){
          win();
        }
        else if (actual > random){
          lose();
        }   
  })  
  $('#two').on ('click', function(){
    actual = actual + num2;
    console.log("New actual= " + actual);
    $('#actualTotal').text(actual); 
        if (actual == random){
          win();
        }
        else if ( actual > random){
          lose();
        } 
  })  
  $('#three').on ('click', function(){
    actual = actual + num3;
    console.log("New actual= " + actual);
    $('#actualTotal').text(actual);
//sets win/lose conditions
          if (actual == random){
          win();
        }
        else if ( actual > random){
          lose();
        } 
  })  
  $('#four').on ('click', function(){
    actual = actual + num4;
    console.log("New actual= " + actual);
    $('#actualTotal').text(actual); 
      
          if (actual == random){
          win();
        }
        else if (actual > random){
          lose();
        }
  });   
}); 