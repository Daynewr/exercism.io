var DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function(dna){

  dna = dna.split('');
  return dna.map(change).join('');
}

function change(letter){
  if(letter === 'G'){
    letter = 'C';
  } else if (letter === 'A'){
    letter = 'U';
  } else if (letter === 'T'){
    letter = 'A';
  } else {
    letter = 'G';
  }
  return letter;
}

module.exports = DnaTranscriber;
