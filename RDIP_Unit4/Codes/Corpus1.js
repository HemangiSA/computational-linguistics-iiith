// functions

function corpus1()
{
 var one = document.getElementById("text1");
 var two = document.getElementById("text2");
 if(one.value==="173" && two.value==="82")
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


