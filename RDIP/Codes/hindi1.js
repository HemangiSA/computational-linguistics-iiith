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










































