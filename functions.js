function Results(){
	var result = 0;
	var Question = [false, false, false];	
	var i = 0;
	
	var Q1 = document.forms[0].Q1;
	for (i=0; i < Q1.length; i++){
		if (Q1[i].checked){
			Question[i] = true;
		}
	}
				
	var Q2 = document.forms[0].Q2;
	for (i=0; i < Q2.length; i++){
		if (Q2[i].checked){
			result = result + i;
		}
	}
				
	var Q3 = document.forms[0].Q3;
	for (i=0; i < Q3.length; i++){
		if (Q3[i].checked){
			result = result + i;
		}
	}
				
	var Q4 = document.forms[0].Q4;
	for (i=0; i < Q4.length; i++){
		if (Q4[i].checked){
			result = result + i;
		}
	}
				
	if (result >= 0 && result <= 1){
		if (Question[0] === false && Question[1] === false && Question[2] === false){
			document.getElementById("results").innerHTML = "Beginner Sculpting";
		}else if (Question[1] === false && Question[2] === false){
			document.getElementById("results").innerHTML = "Intermediate Sculpting";
		}else if (Question[2] === false){
			document.getElementById("results").innerHTML = "Advanced Sculpting";
		}else{
			document.getElementById("results").innerHTML = "You have already completed all our courses that are suited to you";
		}
	}else if (result >= 2 && result <= 4){
		if (Question[1] === false && Question[2] === false){
			document.getElementById("results").innerHTML = "Intermediate Sculpting";
		}else if (Question[2] === false){
			document.getElementById("results").innerHTML = "Advanced Sculpting";
		}else{
			document.getElementById("results").innerHTML = "You have already completed all our courses that are suited to you";
		}
	}else if (result >= 5){
		if (Question[2] === false){
			document.getElementById("results").innerHTML = "Advanced Sculpting";
		}else{
			document.getElementById("results").innerHTML = "You have already completed all our courses that are suited to you";
		}
	}		
	
	return false;	
}