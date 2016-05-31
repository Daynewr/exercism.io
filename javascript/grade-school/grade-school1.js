var School = function(){
  this.buildRoster = {};
};

School.prototype.add = function(name, grade){
    if(this.buildRoster[grade]){
      this.buildRoster[grade].push(name);
    } else {
      this.buildRoster[grade] = [];
      this.buildRoster[grade].push(name);
    }
};

School.prototype.roster = function(){
    for(singleGrade in buildRoster){
      this.grade(singleGrade);
    }
    return this.buildRoster;
};

School.prototype.grade = function(sortGrade){
    if(this.buildRoster[sortGrade]){
      return this.buildRoster[sortGrade].sort();
    }
    return [];
};

module.exports = School;
