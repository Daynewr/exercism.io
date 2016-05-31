var BeerSong = function(){
  this.returnSong = function(number){
    var plural = number > 1 ? 's ':' ',
        amount = number > 1 ? 'one ':'it ',
          left = number > 1 ? number-1:'no more',
    leftPlural = left === 'no more' || left > 1 ? 's ':' ',
       newVerse = '';

    if(number > 0) {
      newVerse = number + ' bottle' + plural + 'of beer on the wall, ' + number + ' bottle' + plural + 'of beer.\nTake '+ amount + 'down and pass it around, '+ left + ' bottle' + leftPlural + 'of beer on the wall.\n';
    } else {
      newVerse = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    }
    return newVerse;
  }
};

BeerSong.prototype.verse = function(number){
    return this.returnSong(number);
}

BeerSong.prototype.sing = function(startVerse, amount){
    var newSong = '';

    if(amount){
        for(var i = startVerse; i >= amount; i--){
          newSong += this.returnSong(i);
          newSong += '\n';
        }
    } else {
      for(var i = startVerse; i >= 0; i--){
        newSong += this.returnSong(i);
        newSong += '\n';
      }
    }

  newSong = newSong.slice(0, -1);

  return newSong;


}

module.exports = BeerSong;
