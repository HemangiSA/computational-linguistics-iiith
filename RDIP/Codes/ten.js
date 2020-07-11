//hidden button after clicked
function one()
{
		var x=document.getElementById("one").value;
		document.getElementById("div1").innerHTML+=' '+x;
			document.getElementById("one").style.visibility='hidden';
			//reform();
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
function seven()
{
		var d=document.getElementById("seven").value;
		document.getElementById("div1").innerHTML+=' '+d;
			document.getElementById("seven").style.visibility='hidden';
}
function eight()
{
		var e=document.getElementById("eight").value;
		document.getElementById("div1").innerHTML+=' '+e;
			document.getElementById("eight").style.visibility='hidden';
}
function nine()
{
		var f=document.getElementById("nine").value;
		document.getElementById("div1").innerHTML+=' '+f;
			document.getElementById("nine").style.visibility='hidden';

		
}
function ten()
{
		var g=document.getElementById("ten").value;
		document.getElementById("div1").innerHTML+=' '+g;
			document.getElementById("ten").style.visibility='hidden';

}

//Reform Button

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
  var d = document.getElementById("seven");
  if (window.getComputedStyle(d).visibility === "hidden") {
    d.style.visibility = "visible";
  }
  var e = document.getElementById("eight");
  if (window.getComputedStyle(e).visibility === "hidden") {
    e.style.visibility = "visible";
  }
  var f = document.getElementById("nine");
  if (window.getComputedStyle(f).visibility === "hidden") {
    f.style.visibility = "visible";
  }
  var g = document.getElementById("ten");
  if (window.getComputedStyle(g).visibility === "hidden") {
    g.style.visibility = "visible";
  }
}

//Check correctness of the sentence functionalities

function check()
{
	var text1=document.getElementById("div1").innerHTML;
	
   if(text1.includes("some students like to study in the night") || text1.includes("at night some students like to study"))
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

function check1()
{
	var text1=document.getElementById("div1").innerHTML;
	
   if(text1.includes("John and Mary went to church") || text1.includes("Mary and John went to church"))
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

function check2()
{
	var text1=document.getElementById("div1").innerHTML;
	
   if(text1.includes("John went to church after eating") || text1.includes("after eating John went to church") || text1.includes("John after eating went to church"))
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

function check3()
{
	var text1=document.getElementById("div1").innerHTML;
	
   if(text1.includes("did he go to market") || text1.includes("he did go to market"))
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

function check4()
{
	var text1=document.getElementById("div1").innerHTML;
	
   if(text1.includes("the woman who called my sister sells cosmetics") || text1.includes("the woman who sells cosmetics called my sister") || text1.includes("my sister who sells cosmetics called the woman") || text1.includes("my sister who called the woman sells cosmetics"))
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

function check5()
{
	var text1=document.getElementById("div1").innerHTML;
	
   if(text1.includes("John goes to the library and studies") || text1.includes("John studies and goes to the library"))
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

function check6()
{
	var text1=document.getElementById("div1").innerHTML;
	
   if(text1.includes("John ate an apple so did she") || text1.includes("she ate an apple so did John"))
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

function check7()
{
	var text1=document.getElementById("div1").innerHTML;
	
   if(text1.includes("the teacher noticed the error after she returned the book") || text1.includes("after the teacher returned the book she noticed the error") || text1.includes("after the teacher noticed the error she returned the book") || text1.includes("she returned the book after the teacher noticed the error") || text1.includes("she noticed the error after the teacher returned the book") || text1.includes("after she returned the book the teacher noticed the error") || text1.includes("after she noticed the error the teacher returned the book"))
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

function check8()
{
	var text1=document.getElementById("div1").innerHTML;
	
   if(text1.includes("I told her yesterday that I bought a book") || text1.includes("yesterday I told her that I bought a book") || text1.includes("I bought a book that I told her yesterday") || text1.includes("I bought a book yesterday that I told her") || text1.includes("yesterday I bought a book that I told her"))
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






