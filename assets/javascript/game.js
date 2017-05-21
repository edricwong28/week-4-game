//GLOBAL VARIABLES FOR HOLDING DATA
  //______________________________________________________________________________________
 
  var redCrystal = Math.floor((Math.random() * 12) + 1);
  var blueCrystal = Math.floor((Math.random() * 12) + 1);
  var greenCrystal = Math.floor((Math.random() * 12) + 1);
  var purpleCrystal = Math.floor((Math.random() * 12) + 1);


  //COUNTERS
  //______________________________________________________________________________________
  var score = 0;
  var wins = 0;
  var losses = 0;
  

  //FUNCTIONS
  //______________________________________________________________________________________

	function startGame(){
		//Resets Values
		 	targetNumber = Math.floor((Math.random() * ((120-19)+1) + 19));
			score = 0;
		//Update HTML
		$("#targetNumber").html(targetNumber);
		$("#score").html(score);
		$("#wins").html(wins);
		$("#losses").html(losses);
		
	
	}

	function setCrystal(){

		// targetNumber = Math.floor((Math.random() * ((120-19)+1) + 19));
		// score = 0;
			
		$("#targetNumber").html(targetNumber);
		$("#score").html(score);
			
				$("#crystal-1").on("click", function(){
					$("#crystal-1").attr ("data-crystalvalue", redCrystal);
					score += redCrystal;
					$("#score").html(score);
					roundComplete();
				});
				$("#crystal-2").on("click", function(){
					$("#crystal-2").attr ("data-crystalvalue", redCrystal);
					score += greenCrystal;
					$("#score").html(score);
					roundComplete();
				});
				$("#crystal-3").on("click", function(){
					$("#crystal-3").attr ("data-crystalvalue", redCrystal);
					score += blueCrystal;
					$("#score").html(score);
					roundComplete();
				});
				$("#crystal-4").on("click", function(){
					$("#crystal-4").attr ("data-crystalvalue", redCrystal);
					score += purpleCrystal;
					$("#score").html(score);
					roundComplete();
				});

   }

   function roundComplete(){

   	if(score === targetNumber){
					wins++;
					alert("You Win! Good Job!");
					startGame();

				}
				else if(score > targetNumber){
					losses++;
					alert("Game Over");
					startGame();
				}

   }

startGame();
setCrystal();


	console.log(targetNumber);
	console.log(score);