// Adding Pos

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
