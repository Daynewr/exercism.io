var Pangram = function(sentence){
  this.sentence = sentence;
};

Pangram.prototype.isPangram = function(){
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var sentence = this.sentence.toLowerCase();

  if(sentence === ''){
    return false;
  }

  for(var j = 0; j < alphabet.length; j++){
    if(sentence.indexOf(alphabet[j]) === -1){
      return false;
    }
  }

  return true;
};

module.exports = Pangram;
