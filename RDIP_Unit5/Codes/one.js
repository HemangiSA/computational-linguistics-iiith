// Adding Pos in the javascript file

var pos = require('pos');
var words = new pos.Lexer().lex('This is some sample text. This text can contain multiple sentences.'); //You have to enter the sentences here
var tagger = new pos.Tagger();
var taggedWords = tagger.tag(words);
for (i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var tag = taggedWord[1];
    console.log(word + " /" + tag);
}

//Corpus Requirements

//English sentences

var one="The child liked the chocolate.";
var two="She was stopped by the bravest knight.";
var three="Mary baked a cake for his birthday";
var four="She decorated the cake carefully";
var five="Mary wore a dress with polka dots.";

//Hindi Sentences

var six="राम ने सीता के लिए फल तोड़ा।";
var seven="छोटे बच्चे पाठशाला जल्दी आयेंगे।";
var eight="मेहनत का फल मीठा होता है।";
var nine="वाह! वह खूबसूरत है।";
var ten="पेड़ से पत्ते गिर गए।";

//Functionalities related to selection options

//Adding symbols tick and cross mark when answer is validated

function one1()
{
	var a=document.getElementById("one");
	var b=document.getElementById("three");
	var c=document.getElementById("five");
	var d=document.getElementById("seven");
	var e=document.getElementById("nine");
	if(a.value==="determiner" && b.value==="noun" && c.value==="verb" && d.value==="determiner" && e.value==="noun")
	{
		//display in column 3
		
		a.style.backgroundColor = "green";
		b.style.backgroundColor = "green";
		c.style.backgroundColor = "green";
		d.style.backgroundColor = "green";
		e.style.backgroundColor = "green";
	}
	else
	{
		a.style.backgroundColor = "red";
		b.style.backgroundColor = "red";
		c.style.backgroundColor = "red";
		d.style.backgroundColor = "red";
		e.style.backgroundColor = "red";
	}
}

function two2()
{
	var a=document.getElementById("one");
	var b=document.getElementById("three");
	var c=document.getElementById("five");
	var d=document.getElementById("seven");
	var e=document.getElementById("nine");
	var f=document.getElementById("ele");
	var g=document.getElementById("thi");
	if(a.value==="pronoun" && b.value==="verb" && c.value==="verb" && d.value==="preposition" && e.value==="determiner" && f.value==="adjective" && g.value==="noun")
	{
		//display in column 3
		
		a.style.backgroundColor = "green";
		b.style.backgroundColor = "green";
		c.style.backgroundColor = "green";
		d.style.backgroundColor = "green";
		e.style.backgroundColor = "green";
		f.style.backgroundColor = "green";
		g.style.backgroundColor = "green";
	}
	else
	{
		a.style.backgroundColor = "red";
		b.style.backgroundColor = "red";
		c.style.backgroundColor = "red";
		d.style.backgroundColor = "red";
		e.style.backgroundColor = "red";
		f.style.backgroundColor = "red";
		g.style.backgroundColor = "red";
	}
}

function three3()
{
	var a=document.getElementById("one");
	var b=document.getElementById("three");
	var c=document.getElementById("five");
	var d=document.getElementById("seven");
	var e=document.getElementById("nine");
	var f=document.getElementById("ele");
	var g=document.getElementById("thi");
	if(a.value==="noun" && b.value==="verb" && c.value==="determiner" && d.value==="noun" && e.value==="preposition" && f.value==="determiner" && g.value==="noun")
	{
		//display in column 3
		
		a.style.backgroundColor = "green";
		b.style.backgroundColor = "green";
		c.style.backgroundColor = "green";
		d.style.backgroundColor = "green";
		e.style.backgroundColor = "green";
		f.style.backgroundColor = "green";
		g.style.backgroundColor = "green";
	}
	else
	{
		a.style.backgroundColor = "red";
		b.style.backgroundColor = "red";
		c.style.backgroundColor = "red";
		d.style.backgroundColor = "red";
		e.style.backgroundColor = "red";
		f.style.backgroundColor = "red";
		g.style.backgroundColor = "red";
	}
}

function four4()
{
	var a=document.getElementById("one");
	var b=document.getElementById("three");
	var c=document.getElementById("five");
	var d=document.getElementById("seven");
	var e=document.getElementById("nine");
	if(a.value==="pronoun" && b.value==="verb" && c.value==="determiner" && d.value==="noun" && e.value==="adverb")
	{
		//display in column 3
		
		a.style.backgroundColor = "green";
		b.style.backgroundColor = "green";
		c.style.backgroundColor = "green";
		d.style.backgroundColor = "green";
		e.style.backgroundColor = "green";
	}
	else
	{
		a.style.backgroundColor = "red";
		b.style.backgroundColor = "red";
		c.style.backgroundColor = "red";
		d.style.backgroundColor = "red";
		e.style.backgroundColor = "red";
	}
}
 
function five5()
{
	var a=document.getElementById("one");
	var b=document.getElementById("three");
	var c=document.getElementById("five");
	var d=document.getElementById("seven");
	var e=document.getElementById("nine");
	var f=document.getElementById("ele");
	var g=document.getElementById("thi");
	if(a.value==="noun" && b.value==="verb" && c.value==="determiner" && d.value==="noun" && e.value==="preposition" && f.value==="noun" && g.value==="noun")
	{
		//display in column 3
		
		a.style.backgroundColor = "green";
		b.style.backgroundColor = "green";
		c.style.backgroundColor = "green";
		d.style.backgroundColor = "green";
		e.style.backgroundColor = "green";
		f.style.backgroundColor = "green";
		g.style.backgroundColor = "green";
	}
	else
	{
		a.style.backgroundColor = "red";
		b.style.backgroundColor = "red";
		c.style.backgroundColor = "red";
		d.style.backgroundColor = "red";
		e.style.backgroundColor = "red";
		f.style.backgroundColor = "red";
		g.style.backgroundColor = "red";
	}
}

function h1()
{
	var a=document.getElementById("one");
	var b=document.getElementById("three");
	var c=document.getElementById("five");
	var d=document.getElementById("seven");
	var e=document.getElementById("nine");
	var f=document.getElementById("ele");
	var g=document.getElementById("thi");
	if(a.value==="noun" && b.value==="postposition" && c.value==="noun" && d.value==="postposition" && e.value==="postposition" && f.value==="noun" && g.value==="verb")
	{
		//display in column 3
		
		a.style.backgroundColor = "green";
		b.style.backgroundColor = "green";
		c.style.backgroundColor = "green";
		d.style.backgroundColor = "green";
		e.style.backgroundColor = "green";
		f.style.backgroundColor = "green";
		g.style.backgroundColor = "green";
	}
	else
	{
		a.style.backgroundColor = "red";
		b.style.backgroundColor = "red";
		c.style.backgroundColor = "red";
		d.style.backgroundColor = "red";
		e.style.backgroundColor = "red";
		f.style.backgroundColor = "red";
		g.style.backgroundColor = "red";
	}
}

function h2()
{
	var a=document.getElementById("one");
	var b=document.getElementById("three");
	var c=document.getElementById("five");
	var d=document.getElementById("seven");
	var e=document.getElementById("nine");
	if(a.value==="adjective" && b.value==="noun" && c.value==="noun" && d.value==="adverb" && e.value==="verb")
	{
		//display in column 3
		
		a.style.backgroundColor = "green";
		b.style.backgroundColor = "green";
		c.style.backgroundColor = "green";
		d.style.backgroundColor = "green";
		e.style.backgroundColor = "green";
	}
	else
	{
		a.style.backgroundColor = "red";
		b.style.backgroundColor = "red";
		c.style.backgroundColor = "red";
		d.style.backgroundColor = "red";
		e.style.backgroundColor = "red";
	}
}

function h3()
{
	var a=document.getElementById("one");
	var b=document.getElementById("three");
	var c=document.getElementById("five");
	var d=document.getElementById("seven");
	var e=document.getElementById("nine");
	var f=document.getElementById("ele");
	if(a.value==="noun" && b.value==="postposition" && c.value==="noun" && d.value==="adjective" && e.value==="verb" && f.value==="verb")
	{
		//display in column 3
		
		a.style.backgroundColor = "green";
		b.style.backgroundColor = "green";
		c.style.backgroundColor = "green";
		d.style.backgroundColor = "green";
		e.style.backgroundColor = "green";
		f.style.backgroundColor = "green";
	}
	else
	{
		a.style.backgroundColor = "red";
		b.style.backgroundColor = "red";
		c.style.backgroundColor = "red";
		d.style.backgroundColor = "red";
		e.style.backgroundColor = "red";
		f.style.backgroundColor = "red";
	}
}

function h4()
{
	var a=document.getElementById("one");
	var b=document.getElementById("three");
	var c=document.getElementById("five");
	var d=document.getElementById("seven");
	if(a.value==="interjective" && b.value==="pronoun" && c.value==="adjective" && d.value==="verb")
	{
		//display in column 3
		
		a.style.backgroundColor = "green";
		b.style.backgroundColor = "green";
		c.style.backgroundColor = "green";
		d.style.backgroundColor = "green";
		
	}
	else
	{
		a.style.backgroundColor = "red";
		b.style.backgroundColor = "red";
		c.style.backgroundColor = "red";
		d.style.backgroundColor = "red";
		
	}
}

function h5()
{
	var a=document.getElementById("one");
	var b=document.getElementById("three");
	var c=document.getElementById("five");
	var d=document.getElementById("seven");
	var e=document.getElementById("nine");
	if(a.value==="noun" && b.value==="postposition" && c.value==="noun" && d.value==="verb" && e.value==="verb")
	{
		//display in column 3
		
		a.style.backgroundColor = "green";
		b.style.backgroundColor = "green";
		c.style.backgroundColor = "green";
		d.style.backgroundColor = "green";
		e.style.backgroundColor = "green";
		
	}
	else
	{
		a.style.backgroundColor = "red";
		b.style.backgroundColor = "red";
		c.style.backgroundColor = "red";
		d.style.backgroundColor = "red";
		e.style.backgroundColor = "red";
		
	}
}


//Functionality of get answer button

function get1()
{
	myFunction1();
	var a=document.getElementById("two").value="determiner";
	var b=document.getElementById("four").value="noun";
	var c=document.getElementById("six").value="verb";
	var d=document.getElementById("eight").value="determiner";
	var e=document.getElementById("ten").value="noun";
}

function get2()
{
	myFunction();
	var a=document.getElementById("two").value="pronoun";
	var b=document.getElementById("four").value="verb";
	var c=document.getElementById("six").value="verb";
	var d=document.getElementById("eight").value="preposition";
	var e=document.getElementById("ten").value="determiner";
	var f=document.getElementById("twe").value="adjective";
	var g=document.getElementById("for").value="noun";
}

function get3()
{
	myFunction();
	var a=document.getElementById("two").value="noun";
	var b=document.getElementById("four").value="verb";
	var c=document.getElementById("six").value="determiner";
	var d=document.getElementById("eight").value="noun";
	var e=document.getElementById("ten").value="preposition";
	var f=document.getElementById("twe").value="determiner";
	var g=document.getElementById("for").value="noun";
}

function get4()
{
	myFunction1();
	var a=document.getElementById("two").value="pronoun";
	var b=document.getElementById("four").value="verb";
	var c=document.getElementById("six").value="determiner";
	var d=document.getElementById("eight").value="noun";
	var e=document.getElementById("ten").value="adverb";
}
function get5()
{
	myFunction();
	var a=document.getElementById("two").value="noun";
	var b=document.getElementById("four").value="verb";
	var c=document.getElementById("six").value="determiner";
	var d=document.getElementById("eight").value="noun";
	var e=document.getElementById("ten").value="preposition";
	var f=document.getElementById("twe").value="noun";
	var g=document.getElementById("for").value="noun";
}
function get6()
{
	myFunction();
	var a=document.getElementById("two").value="noun";
	var b=document.getElementById("four").value="postposition";
	var c=document.getElementById("six").value="noun";
	var d=document.getElementById("eight").value="postposition";
	var e=document.getElementById("ten").value="postposition";
	var f=document.getElementById("twe").value="noun";
	var g=document.getElementById("for").value="verb";
}
function get7()
{
	myFunction1();
	var a=document.getElementById("two").value="adjective";
	var b=document.getElementById("four").value="noun";
	var c=document.getElementById("six").value="noun";
	var d=document.getElementById("eight").value="adverb";
	var e=document.getElementById("ten").value="verb";
}
function get8()
{
	myFunction2();
	var a=document.getElementById("two").value="noun";
	var b=document.getElementById("four").value="postposition";
	var c=document.getElementById("six").value="noun";
	var d=document.getElementById("eight").value="adjective";
	var e=document.getElementById("ten").value="verb";
	var f=document.getElementById("twe").value="verb";
}
function get9()
{
	myFunction3();
	var a=document.getElementById("two").value="interjective";
	var b=document.getElementById("four").value="pronoun";
	var c=document.getElementById("six").value="adjective";
	var d=document.getElementById("eight").value="verb";
}
function get10()
{
	myFunction1();
	var a=document.getElementById("two").value="noun";
	var b=document.getElementById("four").value="postposition";
	var c=document.getElementById("six").value="noun";
	var d=document.getElementById("eight").value="verb";
	var e=document.getElementById("ten").value="verb";
}

//Hide and show get answer button

function myFunction() 
{
	var a=document.getElementById("two");
	var b=document.getElementById("four");
	var c=document.getElementById("six");
	var d=document.getElementById("eight");
	var e=document.getElementById("ten");
	var f=document.getElementById("twe");
	var g=document.getElementById("for");
  if (a.style.display === "none" && b.style.display==="none" && c.style.display==="none" && d.style.display==="none" && e.style.display==="none" && f.style.display==="none" && g.style.display==="none") {
    a.style.display = "block";
	b.style.display = "block";
	c.style.display = "block";
	d.style.display = "block";
	e.style.display = "block";
	f.style.display = "block";
	g.style.display = "block";
  } else {
    a.style.display = "none";
	 b.style.display = "none";
	  c.style.display = "none";
	   d.style.display = "none";
	    e.style.display = "none";
		f.style.display = "none";
	g.style.display = "none";
  }
}

function myFunction1()
{
	var a=document.getElementById("two");
	var b=document.getElementById("four");
	var c=document.getElementById("six");
	var d=document.getElementById("eight");
	var e=document.getElementById("ten");
	if (a.style.display === "none" && b.style.display==="none" && c.style.display==="none" && d.style.display==="none" && e.style.display==="none") {
    a.style.display = "block";
	b.style.display = "block";
	c.style.display = "block";
	d.style.display = "block";
	e.style.display = "block";
  } else {
    a.style.display = "none";
	 b.style.display = "none";
	  c.style.display = "none";
	   d.style.display = "none";
	    e.style.display = "none";
  }
}

function myFunction2()
{
	var a=document.getElementById("two");
	var b=document.getElementById("four");
	var c=document.getElementById("six");
	var d=document.getElementById("eight");
	var e=document.getElementById("ten");
	var f=document.getElementById("twe");
  if (a.style.display === "none" && b.style.display==="none" && c.style.display==="none" && d.style.display==="none" && e.style.display==="none" && f.style.display==="none") {
    a.style.display = "block";
	b.style.display = "block";
	c.style.display = "block";
	d.style.display = "block";
	e.style.display = "block";
	f.style.display = "block";
  } else {
    a.style.display = "none";
	 b.style.display = "none";
	  c.style.display = "none";
	   d.style.display = "none";
	    e.style.display = "none";
		f.style.display = "none";
  }
}
 function myFunction3()
 {
	 var a=document.getElementById("two");
	var b=document.getElementById("four");
	var c=document.getElementById("six");
	var d=document.getElementById("eight");
  if (a.style.display === "none" && b.style.display==="none" && c.style.display==="none" && d.style.display==="none") {
    a.style.display = "block";
	b.style.display = "block";
	c.style.display = "block";
	d.style.display = "block";
  } else {
    a.style.display = "none";
	 b.style.display = "none";
	  c.style.display = "none";
	   d.style.display = "none";
  }
}