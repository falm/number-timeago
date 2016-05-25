
var expect = require('chai').expect;
require('../number.timeago.js')();

describe('NumberTimeAgo', function(){

  describe('#number-time', function(){
    it('seconds', function(){
      expect(60..seconds).to.eq(1000*60);
    })
    it('days', function () {
      expect(2..days).to.eq(48..hours);
    });
  });

  describe('#time-ago', function(){
    it('ago()', function(){
      actualDay = 3..days.ago().getDay();
      expectDay = new Date(new Date() - 3..days).getDay();
      // console.log(actualDay+':'+expectDay);
      expect(actualDay).to.eq(expectDay);
    }) ;

  });

});
