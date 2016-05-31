var FoodChain = function(){
  this.singing = function(verse){
    var lines = [
        'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n',
        'She swallowed the spider to catch the fly.\n',
        'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n',
        'She swallowed the cat to catch the bird.\n',
        'She swallowed the dog to catch the cat.\n',
        'She swallowed the goat to catch the dog.\n',
        'She swallowed the cow to catch the goat.\n'
      ];

    var singSong  = 'I know an old lady who swallowed a ';
        singSong += switchHelper(verse) + '\n';

     if(verse !== 8){
      for(var i = (verse-1); i >= 0; i--){
        singSong += lines[i];
     }
    }

  function switchHelper(verse){
      switch(verse) {
        case 1:
          verse = 'fly.';
          break;
        case 2:
          verse = 'spider.\nIt wriggled and jiggled and tickled inside her.';
          break;
        case 3:
          verse = 'bird.\nHow absurd to swallow a bird!';
          break;
        case 4:
          verse = 'cat.\nImagine that, to swallow a cat!';
          break;
        case 5:
          verse = 'dog.\nWhat a hog, to swallow a dog!';
          break;
        case 6:
          verse = 'goat.\nJust opened her throat and swallowed a goat!';
          break;
        case 7:
          verse = 'cow.\nI don\'t know how she swallowed a cow!';
          break;
        case 8:
          verse = 'horse.\nShe\'s dead, of course!';
          break;
      }
      return verse;
    }
    return singSong;
  }
};

FoodChain.prototype.verse = function(verse){
    return this.singing(verse);
}

FoodChain.prototype.verses = function(startingVerse, totalVerses){

  var song = this.singing(startingVerse);
  var countLeft = startingVerse+1;

  for(var i = 0; i < totalVerses-1; i++){
    song += '\n' + this.singing(countLeft++);
  }
  return song + '\n';
}

module.exports = FoodChain;
