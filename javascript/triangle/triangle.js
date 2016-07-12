
var Triangle = function(a,b,c){
  this.sorted = [a,b,c].sort(function (a, b) {  return a - b;  });

  console.log(this.sorted);
}

Triangle.prototype.kind = function(){
  var a = this.sorted[0];
  var b = this.sorted[1];
  var c = this.sorted[2];

 if(a <= 0){
   throw "Cannot be 0 or less.";
 } else if(a+b < c) {
   throw "Triangles violating triangle inequality are illegal.";
 }

  if(a === b && b === c){
    return "equilateral";
  } else if(a === b || b === c){
    return "isosceles";
  } else if( (a !== b) || (b !== c)){
    return "scalene";
  }
}



module.exports = Triangle;
