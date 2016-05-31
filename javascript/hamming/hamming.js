var Hamming = function(){}


Hamming.prototype.compute = function(strandOne, strandTwo){
    var count = 0;

    if(strandOne.length === strandTwo.length){
      if(strandOne.length = 1 && strandOne === strandTwo){
       return count;
      }
      for(var i = 0; i <= strandOne.length; i++){
        if(strandOne[i] !== strandTwo[i]){
            count++;
        }
      }
      return count;
    }

  throw Error('DNA strands must be of equal length.');
};


module.exports = Hamming;
