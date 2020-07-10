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


function one()
{
		var x=document.getElementById("one").value;
		document.getElementById("div1").innerHTML+=' '+x;
}
function two()
{
		var y=document.getElementById("two").value;
		document.getElementById("div1").innerHTML+=' '+y;
		x.append(y);
}
function three()
{
		var z=document.getElementById("three").value;
		document.getElementById("div1").innerHTML+=' '+z;
}
function four()
{
		var a=document.getElementById("four").value;
		document.getElementById("div1").innerHTML+=' '+a;
}
function five()
{
		var b=document.getElementById("five").value;
		document.getElementById("div1").innerHTML+=' '+b;
}
function six()
{
		var c=document.getElementById("six").value;
		document.getElementById("div1").innerHTML+=' '+c;
}








