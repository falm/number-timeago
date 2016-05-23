

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

  Number.prototype.ago = function(){
    return new Date(new Date() - this) ;
  }

}

module.exports = function(){
  NumberTimeAgo();
};
