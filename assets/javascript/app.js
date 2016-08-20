var database = {
    questions  : ["Inside which HTML element do we put the JavaScript?", "The external JavaScript file must contain the script tag","Which event occurs when the user clicks on an HTML element?"],
    answers   :["script","false","click"],
    options   : [["script","javascript","js","body"],["True","false"],["onmouseclick","click","onmouseover","on.click"]]
     }
   var index = 0;
   var mytime=0;
   var timerId;
   var counter =0;
   var totalScore=0;
   var clicked=false;

    function trivia() {
		counter++;
		quizTime=10; //amount of time for user to think
		mytime=quizTime;
		clicked=false;

		$('#btn-container').html("<h1>Time remaining " + quizTime + " Seconds<h1>");
		setTimer(quizTime);
		$('#quest').html("<h2>"+database.questions[index]+"</h2>")
		$('#options').html(radioButtons(index));
		
	}

   //Check the answer after click
	function checkAnswer()
	{
		clicked=true;
		var value = $("input[name=ans]:checked").val();
		mytime = 2;
      	
		if ( ( value === database.answers[index] ) )
		{
			
	      	 $('#result').html("<h3>"+ value + " is Correct !!</h3>");
			 totalScore++;
		}
        else
        {
		  	if ( typeof ($("input[name=ans]:checked") ) != "undefined"  )
		  	{
		  		$('#result').html("<h4>"+ value + " is Wrong !!</h4>")
			}
        }
        
 	}
       
	function setTimer(num)
	{
         
        timerId = setInterval(timer, 1000);
        function timer() {
           

        if (mytime == 0) {
        	if (! clicked )
        	{
          		$('#result').html("<h4> Sorry Time is up!!</h4>")
          	}
            clearInterval(timerId);
	        index++;
            if ( counter < database.questions.length)
		        {
		        	trivia();
		        }
			} else {
	          mytime--;
	          $('#btn-container').html("<h1>Time remaining " + mytime + " Seconds<h1>");
	          if (( counter >= database.questions.length) && ( mytime <1))
		        {
		        	$('#game').html("<div id=\"final\"><h3> Total correct " + totalScore + " out of " + database.questions.length+ "</h3></div>")
		        }
            }  
        } 
	}

	function radioButtons(idx)
	{
	  	 var i = 0 ; 
	  	 var str=""
      	  for(i=0;i<database.options[idx].length;i++)
      	  {
      	  		str = str + '<input id="rb" type="radio" name="ans" value="'+database.options[idx][i]+'" onclick="checkAnswer()">'+database.options[idx][i]+'<br>' 
      	  }
      	  return ( str );
	}