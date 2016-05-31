var School = function(){

  var buildRoster = {};

  this.add = function(name, grade){
    if(buildRoster[grade]){
      buildRoster[grade].push(name);
    } else {
      buildRoster[grade] = [];
      buildRoster[grade].push(name);
    }
  }

  this.roster = function(){
    for(singleGrade in buildRoster){
      this.grade(singleGrade);
    }
    return buildRoster;
  }

  this.grade = function(sortGrade){
    if(buildRoster[sortGrade]){
      return buildRoster[sortGrade].sort();
    }
    return [];
  }
};

module.exports = School;
