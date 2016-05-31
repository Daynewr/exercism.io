
var Gigasecond = function(startDate){
  this.startDate = startDate;
};

Gigasecond.prototype.date = function(){
    var gigaSecond = 1e12;
    var answerDate = Number(this.startDate) + gigaSecond;
    
    return new Date(answerDate);
};

module.exports = Gigasecond;
