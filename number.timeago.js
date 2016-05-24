

function NumberTimeAgo(){

  Object.defineProperty(Number.prototype, 'seconds', {
    get: function(){
      return this * 1000;
    }
  });

  Object.defineProperty(Number.prototype, 'minutes', {
    get: function(){
      return this.seconds * 60;
    }
  });

  Object.defineProperty(Number.prototype, 'hours', {
    get: function(){
      return this.minutes * 60;
    }
  });

  Object.defineProperty(Number.prototype, 'days', {
    get: function(){
      return this.hours * 24;
    }
  });

  Number.prototype.ago = function(){
    return new Date(new Date() - this) ;
  }

}

module.exports = function(){
  NumberTimeAgo();
};
