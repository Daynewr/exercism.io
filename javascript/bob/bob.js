//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  var response;
  var lastChar = input.slice(-1);
  var strippedInput = input.replace(/\W+|\d+/g, '');

  console.log(strippedInput);

  if(yelling(strippedInput)){
    response = 'Whoa, chill out!';
  } else if(lastChar === '?'){
    response = 'Sure.';
  } else if(strippedInput === '' && !input.match(/\d+/g)){
    response = 'Fine. Be that way!';
  } else {
    response = 'Whatever.';
  }

  return response;


    function yelling(statement){
      var answer;

      for(var i = 1; i < statement.length; i++){

    		if(statement[i] === statement[i].toUpperCase() && statement[i-1] === statement[i-1].toUpperCase()){
    			answer = true;
    		} else {
    			return false;
    		}
      }
    	return answer;
    }
}

// Still need to correct one test case: 'Bob calmly speaking about umlauts'


module.exports = Bob;
