//function corpus2
function corpus2()
{
 var one = document.getElementById("text1");
 var two = document.getElementById("text2");
 if(one.value==="111" && two.value==="65")
 {
	one.style.backgroundColor="green";
	 two.style.backgroundColor="green";
	   var str = "<b>Right Answer!</b>";
       var result = str.fontcolor("green");
       document.getElementById("p1").innerHTML = result;
	   change1();
 }
 else
 {
	 one.style.backgroundColor="red";
	 two.style.backgroundColor="red";
		 var str = "<br>Wrong Answer!</b>";
		 var result = str.fontcolor("red");
		 document.getElementById("p1").innerHTML = result;
	
	 
 }
 }
window.onload=function()
  {
  document.getElementById("btn").style.display='none';
  }
	function change1()
	{
	  document.getElementById("btn").style.display='block';
	}


//Add functionality of continue button

function new2()
{
	var one = document.getElementById("text3");
 if(one.value==="66")
 {
	one.style.backgroundColor="green";
	   var str = "<b>Right Answer!</b>";
       var result = str.fontcolor("green");
       document.getElementById("p1").innerHTML = result;
	  // change1();
 }
 else
 {
	 one.style.backgroundColor="red";
		 var str = "<br>Wrong Answer!</b>";
		 var result = str.fontcolor("red");
		 document.getElementById("p1").innerHTML = result;
	
	 
 }
 }