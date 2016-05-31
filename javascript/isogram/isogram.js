var Isogram = function(word){
  this.word = word;
};

Isogram.prototype.isIsogram = function(){

  var word = this.word.toLowerCase().replace(/-|\s/g, "");

  for(var i = 0; i < word.length; i++){
    if(word.indexOf(word[i]) != word.lastIndexOf(word[i])){
      return false;
    }
  }
  return true;
};

module.exports = Isogram;
