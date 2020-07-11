//Random Function for hindi

function getRandomSentence () {
    var index= Math.floor(Math.random() * (sentences.length));
	//document.write(sentences[index]);
	document.getElementById("div1").innerHTML=sentences[index];
	return sentences[index];
	
}
var sentences= [
    'राम और श्याम बाजार गयें',
    'राम सोया और श्याम भी',
    'मैंने उसे बताया कि राम सो रहा है',
    'राम खाकर सोया',
    'बिल्लियों को मारकर कुत्ता सो गया ',
    'एक लाल किताब वहाँ है',
    'एक बड़ी सी किताब वहाँ है '
];
//hidden button after clicked

function back() {
    var value = document.getElementById("div1").value;
    document.getElementById("div1").value = value.substr(0, value.length - 1);
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


//Reform button

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



//Check answer correct or not

function check()
{
	var text1=document.getElementById("div1").innerHTML;
	
   if(text1.includes("राम और श्याम बाजार गयें") || text1.includes("राम और श्याम गयें बाजार") || text1.includes("बाजार गयें राम और श्याम") || text1.includes("गयें बाजार राम और श्याम"))
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
	
   if(text1.includes("राम सोया और श्याम भी") || text1.includes("श्याम सोया और राम भी") || text1.includes("सोया श्याम और राम भी") || text1.includes("सोया राम और श्याम भी"))
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
	
   if(text1.includes("मैंने उसे बताया कि राम सो रहा है") || text1.includes("मैंने उसे बताया कि सो रहा है राम") || text1.includes("उसे मैंने बताया कि राम सो रहा है") || text1.includes("उसे मैंने बताया कि सो रहा है राम") ||
   text1.includes("मैंने बताया उसे कि राम सो रहा है") || text1.includes("मैंने बताया उसे कि सो रहा है राम") || text1.includes("उसे बताया मैंने कि राम सो रहा है") || text1.includes("उसे बताया मैंने कि सो रहा है राम") || text1.includes("बताया मैंने उसे कि राम सो रहा है") || text1.includes("बताया मैंने उसे कि सो रहा है राम") || text1.includes("बताया उसे मैंने कि राम सो रहा है") || text1.includes("बताया उसे मैंने कि सो रहा है राम"))
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
	
   if(text1.includes("राम खाकर सोया") || text1.includes("खाकर राम सोया") || text1.includes("राम सोया खाकर") || text1.includes("खाकर सोया राम") || text1.includes("सोया खाकर राम") || text1.includes("सोया राम खाकर"))
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
	
   if(text1.includes("बिल्लियों को मारकर कुत्ता सो गया ") || text1.includes("मारकर बिल्लियों को कुत्ता सो गया") || text1.includes("बिल्लियों को मारकर सो गया कुत्ता") || text1.includes("मारकर बिल्लियों को सो गया कुत्ता") || text1.includes("कुत्ता सो गया बिल्लियों को मारकर") || text1.includes("कुत्ता सो गया मारकर बिल्लियों को") || text1.includes("सो गया कुत्ता बिल्लियों को मारकर") || text1.includes("सो गया कुत्ता मारकर बिल्लियों को"))
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
	
   if(text1.includes("एक लाल किताब वहाँ है") || text1.includes("एक लाल किताब है वहाँ") || text1.includes("वहाँ है एक लाल किताब") || text1.includes("है वहाँ एक लाल किताब"))
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
	
   if(text1.includes("एक बड़ी सी किताब है वहाँ") || text1.includes("बड़ी सी एक किताब वहाँ है") || text1.includes("बड़ी सी एक किताब है वहाँ") || text1.includes("वहाँ है एक बड़ी सी किताब") || text1.includes("वहाँ है बड़ी सी एक किताब") || text1.includes("है वहाँ एक बड़ी सी किताब") || text1.includes("है वहाँ बड़ी सी एक किताब"))
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





























