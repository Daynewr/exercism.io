var Grains = function(){};

Grains.prototype.square = function(number){
  var holder = 1;

  if(number > 1){
    for(var i = 1; i < number; i++){
      holder = holder + holder;
    }
  }
  return holder.toString();
};


module.exports = Grains;
