var ETL = function(){};

ETL.prototype.transform = function(old){

  var newObj = {};

  for(var key in old){
    old[key].forEach(function(e,i){
      prop = old[key][i].toLowerCase();
      newObj[prop] = parseInt(key);
    });
  }

  return newObj;
};

module.exports = ETL;
