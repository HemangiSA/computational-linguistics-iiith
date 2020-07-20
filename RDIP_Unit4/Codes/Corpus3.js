//function corpus3
function corpus3()
{
 var one = document.getElementById("text1");
 var two = document.getElementById("text2");
 if(one.value==="219" && two.value==="95")
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

//Stemming words functions after algorithm and display correct and wrong answer

function new3()
{
	var one = document.getElementById("text3");
 if(one.value==="98")
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


//Algorithm for stemming algorithm

      var Stem = function(lng) {
        var testStemmer = new Snowball(lng);
        return function(word) {
          testStemmer.setCurrent(word);
          testStemmer.stem();
          return testStemmer.getCurrent();
        }
      };
      function println(lng, word){
        document.getElementById("result").innerHTML = "<b>" + new Stem(lng)(word) + "</b>";
      }