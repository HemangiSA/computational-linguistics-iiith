var Snowball = require(['Snowball']);

var stemmer = new Snowball('English');

stemmer.setCurrent('abbreviations');

stemmer.stem();

console.log(stemmer.getCurrent());