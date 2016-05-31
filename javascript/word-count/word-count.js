var Words = function(){};

Words.prototype.count = function(phrase){
  var phraseArray = phrase.trim().replace(/\s+/g, " ").split(" ");
  var wordObj = {};
  var word = '';

  for(var i = 0; i < phraseArray.length; i++){
      word = phraseArray[i].toLowerCase();

      if(wordObj.hasOwnProperty(word)){
        wordObj[word] = wordObj[word]+1;
      } else {
        wordObj[word] = 1;
      }
  }

  return wordObj;

};

module.exports = Words;
