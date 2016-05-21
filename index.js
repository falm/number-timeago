

function NumberTimeAgo(){

  Number.prototype.seconds = function(){
    return this * 1000;
  }

  Number.prototype.minutes = function(){

    return this.seconds() * 60;
  }

  Number.prototype.hours = function(){
    return this.minutes() * 60;  
  }


}

module.exports = function(){
  NumberTimeAgo();
};
