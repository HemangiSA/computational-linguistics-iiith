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

function back() {
    var value = document.getElementById("div1").value;
    document.getElementById("div1").value = value.substr(0, value.length - 1);
}
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
function seven()
{
		var d=document.getElementById("seven").value;
		document.getElementById("div1").innerHTML+=' '+d;
}
function eight()
{
		var e=document.getElementById("eight").value;
		document.getElementById("div1").innerHTML+=' '+e;
}
function nine()
{
		var f=document.getElementById("nine").value;
		document.getElementById("div1").innerHTML+=' '+f;
}
function ten()
{
		var g=document.getElementById("ten").value;
		document.getElementById("div1").innerHTML+=' '+g;
}





















