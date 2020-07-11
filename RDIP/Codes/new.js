//Random Function for english

function getRandomSentence () {
    var index= Math.floor(Math.random() * (sentences.length));
	//document.write(sentences[index]);
	document.getElementById("div1").innerHTML=sentences[index];
	return sentences[index];
	
}
var sentences= [
    'John ate an apple before afternoon',
    'some students like to study in the night',
    'John and Mary went to church',
    'John went to church after eating',
    'did he go to market',
    'the woman who called my sister sells cosmetics',
    'John goes to the library and studies',
    'John ate an apple so did she',
    'the teacher returned the book after she noticed the error',
    'I told her that I bought a book yesterday'
];
function reform() 
{
	document.getElementById("div1").innerHTML = "";
  var x = document.getElementById("one");
  if (window.getComputedStyle(x).visibility === "hidden") {
    x.style.visibility = "visible";
  }
  var y = document.getElementById("two");
  if (window.getComputedStyle(y).visibility === "hidden") {
    y.style.visibility = "visible";
  }
  var z = document.getElementById("three");
  if (window.getComputedStyle(z).visibility === "hidden") {
    z.style.visibility = "visible";
  }
  var a = document.getElementById("four");
  if (window.getComputedStyle(a).visibility === "hidden") {
    a.style.visibility = "visible";
  }
  var b = document.getElementById("five");
  if (window.getComputedStyle(b).visibility === "hidden") {
    b.style.visibility = "visible";
  }
  var c = document.getElementById("six");
  if (window.getComputedStyle(c).visibility === "hidden") {
    c.style.visibility = "visible";
  }
  
}

function one()
{
		var x=document.getElementById("one").value;
		document.getElementById("div1").innerHTML+=' '+x;
		document.getElementById("one").style.visibility='hidden';
}
function two()
{
		var y=document.getElementById("two").value;
		document.getElementById("div1").innerHTML+=' '+y;
		document.getElementById("two").style.visibility='hidden';
}
function three()
{
		var z=document.getElementById("three").value;
		document.getElementById("div1").innerHTML+=' '+z;
		document.getElementById("three").style.visibility='hidden';
}
function four()
{
		var a=document.getElementById("four").value;
		document.getElementById("div1").innerHTML+=' '+a;
		document.getElementById("four").style.visibility='hidden';
}
function five()
{
		var b=document.getElementById("five").value;
		document.getElementById("div1").innerHTML+=' '+b;
		document.getElementById("five").style.visibility='hidden';
}
function six()
{
		var c=document.getElementById("six").value;
		document.getElementById("div1").innerHTML+=' '+c;
		document.getElementById("six").style.visibility='hidden';
}


//Check correctness of the sentence

function check()
{
	var text1=document.getElementById("div1").innerHTML;
	
   if(text1.includes("John ate an apple before afternoon") || text1.includes("before afternoon John ate an apple") || text1.includes("John before afternoon ate an apple"))
   {
	   var str1="Right Answer";
	   var res=str1.fontcolor('green');
	   document.getElementById("p1").innerHTML=res;
   }
   else
   {
	   var str2="Wrong Answer";
	   var res2=str2.fontcolor('red');
	   document.getElementById("p1").innerHTML=res2;
   }
}




