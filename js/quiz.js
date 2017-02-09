$(document).ready(function() {

	var quiz = [{
			question: "What is the capitol of Sweden called?",
			choices: ["Göteborg", "Stockholm", "Malmö", "Uppsala"],
			correctAnswer: "0100" 
		}, {
		    question: 'Where is the famous "Dala hästen" from ?',
		    choices: ["Dalarna", "Småland", "Haland", "Södermanland"],
		    correctAnswer: "1000"
		}, {
		    question: "Which month is christmas on",
		    choices: ["July", "Okotber", "May", "December"],
		    correctAnswer: "0001"
		}, {
		    question: "Which of the following countries lies in Europe",
		    choices: ["India", "Spain", "Kenya", "Argentina"],
		    correctAnswer: "0100"
		}, {
		    question: "What is not included in a triathlon?",
		    choices: ["Running", "Swimming", "skiing", "Cycling"],
		    correctAnswer: "0010"
		}];

	var counter = 0; //Tracks your number of guesses
	var correctAnswers = []; //Stores all your right guesses
	var wrongAnswers = []; //Stores all your wrong guesses
	var html; //Prints out your results at the end of the quiz

	//Function that directs where to print out the message at the end of the quiz
	function print(message) {
	  var outputDiv = document.getElementById("output").innerHTML = message;
	}

	//Function that is used to print out the message at the end of the quiz
	function list(arr){
		var listHTML = "<ol>";
			for (var i=0; i < arr.length; i+=1){
				listHTML += "<li>" + arr[i] + "</li>"
			}
			listHTML += "</ol>"	;
			return listHTML;
	}	

	//Quiz starts when the button with id="quiz" is pressed 
	$("#start").click(function(){
		document.getElementById("radio").style.visibility = "visible";
		document.getElementById("submit").style.visibility = "visible";
	var i = 0; //i is set to 0 so the first question in the object array will print out
		
		document.getElementById("question").innerHTML = quiz[i].question; //Prints the question
		document.getElementById("c1").innerHTML = quiz[i].choices[0]; //Prints alt 1
		document.getElementById("c2").innerHTML = quiz[i].choices[1]; //Prints alt 2
		document.getElementById("c3").innerHTML = quiz[i].choices[2]; //Prints alt 3
		document.getElementById("c4").innerHTML = quiz[i].choices[3]; //Prints alt 4

	
		$("#submit").click(function(){
		//When button with id="submit" is pressed this script will check witch radiobutton is checked.		
			if(document.getElementById("r1").checked)
				answer="1000";
			if(document.getElementById("r2").checked)
				answer="0100";
			if(document.getElementById("r3").checked)
				answer="0010";
			if(document.getElementById("r4").checked)
				answer="0001";
			if(answer===quiz[i].correctAnswer){ //Checks if you have the correct answer
				console.log("correct");//This line is not neccesary
				correctAnswers.push(quiz[i].question); //Adds all your correct answers to correctAnswers Array
				counter+=1; //Add 1 to counter for each correct guess
			}else{
				console.log("wrong");//This line is not neccesary
				wrongAnswers.push(quiz[i].question);//Adds all your wrong answers to wrongAnswers Array
			}
					
		i+=1; //Adds 1 to submit every time that submit is pressed so that next question and alternatives will load
		
			if(i>=quiz.length){ //When you have answered all questions
				console.log("stop");//This line is not neccesary
				$("#question, #radio, #submit").fadeOut(1000);
				$("#output").fadeIn(2000);
				
				html = "<p>You got " + counter + " out of " + quiz.length + " correct answers.</p>";

				if(counter > 4){
					html += "<h4>Congratulations! You made it</h4>"; //Insert custom message
				} else if (counter < 5) {
					html += "<p>Keep practice!</p>"; //Insert custom message
				} 

				html += "<p>You got these questions correct:</p>";
				html += list(correctAnswers);
				html += "<p>You got these questions wrong:</p>"
				html += list(wrongAnswers);
				print(html);

			} else{

			document.getElementById("question").innerHTML = quiz[i].question;
			document.getElementById("c1").innerHTML = quiz[i].choices[0];
			document.getElementById("c2").innerHTML = quiz[i].choices[1];
			document.getElementById("c3").innerHTML = quiz[i].choices[2];
			document.getElementById("c4").innerHTML = quiz[i].choices[3];
			}
		});
	});

	/*
	=============================
	==========End quiz===========
	=============================
	*/

}); // Close (document).ready	


