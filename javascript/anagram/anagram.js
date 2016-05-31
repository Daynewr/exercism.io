var Anagram = function(word){
  this.word = word;
};

Anagram.prototype.matches = function(matches){
  var word = this.word;
  word = word.split('');

  var isMatch;
  var matchWord;
  var answer = [];

  if(!Array.isArray(matches)){
      var newArray = [];
      for(var i = 0; i < arguments.length; i++){
        newArray.push(arguments[i]);
      }
    matches = newArray;
  }

  for(var i = 0; i < matches.length; i++){
    matchWord = matches[i].split('');
    console.log(matchWord);

    for(var j = 0; j < word.length; j++){
        if(word.indexOf(matchWord[i]) === -1 || word.length !== matchWord.length){
            isMatch = false;
        } else {
            isMatch = true;
        }
    }
    if(isMatch){
      answer.push(matchWord.join(''));
    }
  }
  return answer;

};

module.exports = Anagram;
