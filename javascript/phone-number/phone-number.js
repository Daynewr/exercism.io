var PhoneNumber = function(phoneNumber){
  this.phoneNumber = phoneNumber;

  this.sliceAreaCode = function(){
    if(phoneNumber.length = 10){
      var areaCode = phoneNumber.slice(0,3);
      return areaCode;
    }
  }
};

PhoneNumber.prototype.number = function(){
    var cleanNumber = this.phoneNumber;

    cleanNumber = cleanNumber.replace(/-|\s|\(|\)|\./g, "");

    if(cleanNumber.length !== 10){
      if(cleanNumber[0] === '1' && cleanNumber.length === 11){
        cleanNumber = cleanNumber.substring(1);
      } else {
        cleanNumber = '0000000000';
      }
    }
    return cleanNumber;
}

PhoneNumber.prototype.areaCode = function(){
  return this.sliceAreaCode();
}

PhoneNumber.prototype.toString = function(){
  var phoneNumber = this.phoneNumber;

  var formatPhoneNumber  = '('+ this.sliceAreaCode() + ') ';
      formatPhoneNumber += phoneNumber.substring(3,6) + '-' + phoneNumber.substring(6,10);

  return formatPhoneNumber;
}

module.exports = PhoneNumber;
