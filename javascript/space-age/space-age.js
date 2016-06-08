var SpaceAge = function(age){
  this.seconds = age;

  this.calculate = function(planetSeconds){
    var finalAge = (age / planetSeconds).toFixed(2);
    return Number(finalAge);
  }

  this.planet = function(planetOrbit){
    return planetOrbit * 31557600;
  }
};

SpaceAge.prototype.onEarth = function(){
    return this.calculate(31557600);
};

SpaceAge.prototype.onMercury = function(){
    var planet = this.planet(0.2408467);
    return this.calculate(planet);
}

SpaceAge.prototype.onVenus = function(){
    var planet = this.planet(0.61519726);
    return this.calculate(planet);
}

SpaceAge.prototype.onMars = function(){
    var planet = this.planet(1.8808158);
    return this.calculate(planet);
}

SpaceAge.prototype.onJupiter = function(){
    var planet = this.planet(11.862615);
    return this.calculate(planet);
}

SpaceAge.prototype.onSaturn = function(){
    var planet = this.planet(29.447498);
    return this.calculate(planet);
}

SpaceAge.prototype.onUranus = function(){
    var planet = this.planet(84.016846);
    return this.calculate(planet);
}

SpaceAge.prototype.onNeptune = function(){
    var planet = this.planet(164.79132);
    return this.calculate(planet);
}

module.exports = SpaceAge;
