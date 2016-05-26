

(function (NumberTimeAgo) {

  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = NumberTimeAgo;
  } else if (typeof define === 'function' && define.amd) {
    define(['number_time_ago'], NumberTimeAgo);
  } else {
    NumberTimeAgo();
  }

})(function () {

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

  Object.defineProperty(Number.prototype, 'weeks', {
    get: function(){
      return this.days * 7;
    }
  });

  Object.defineProperty(Number.prototype, 'months', {
    get: function(){
      return this.days * 30;
    }
  });

  Object.defineProperty(Number.prototype, 'years', {
    get: function(){
      return this.days * 365.25;
    }
  });

  Number.prototype.ago = function(){
    return new Date(new Date() - this) ;
  }

});
