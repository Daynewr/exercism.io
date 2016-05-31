var RobotName = function(){
    this.giveName = function(){
        var robotName = "";
        var possibleLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var possibleNumber = '1234567890';

        for( var i=0; i < 2; i++ ){
            robotName += possibleLetter.charAt(Math.floor(Math.random() * possibleLetter.length));
        }

        for(var i=0; i < 3; i++){
            robotName += possibleNumber.charAt(Math.floor(Math.random() * possibleNumber.length));
        }
        return robotName;
    }
};


RobotName.prototype.name =

module.exports = RobotName;
