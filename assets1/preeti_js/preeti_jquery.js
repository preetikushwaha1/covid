function check()
{
 	var question1=document.quiz.question1.value;
 	var question2=document.quiz.question2.value;
 	var question3=document.quiz.question3.value;
 	var question4=document.quiz.question4.value;
 	var correct=0;
 	 if(question1 == "option3")
 	 {
 	 	correct++;
 	 }
 	 if(question2 == "option3")
	{
		correct++;
	}
	if(question3 == "option1")
	{
		correct++;
	}
	if(question4 == "option1")
	{
		correct++;
	}

	var messages= ["Please take a corona test","Recommend you to 'Please self Qurantine for 7 days'",
					"Please answer the question"];
	var range;
	if(correct<1)
	{
		range=2;
	}
	if(correct>0 && correct<3)
	{
		range=1;
	}
	if(correct>2)
	{
		range=0;
	}
	if(correct==0)
	{
		range=2;
	}
	//document.getElementById("after_submit").style.visibility="visible";
	document.getElementById("message").innerHTML=messages[range];
	alert(messages[range]);
	document.getElementById("number_correct").innerHTML="you got" + correct + "correct";

}


/*function searchFun()
{
	let filter=document.getElementById('my_input').value.toUpperCase();
	let my_country_table=document.getElementById('country_table');
	let tbody=document.getElementById('country_wise_data');
	for(var i=0;i<186;i++)
	{
		let td=country_wise_data.getElementsByTagName('tr')[i].getElementsByTagName('td')[1];
		if(td)
		{
			let textvalue=td.textContent||td.innerHTML;
			if(textvalue.toUpperCase().indexOf(filter)>-1)
			{
				country_wise_data.getElementsByTagName('tr')[i].style.display="";
			}
			else
			{
				country_wise_data.getElementsByTagName('tr')[i]="none";
			}
		
		}

		//country_wise_data.getElementsByTagName('td')[1];
	}
}
*/





