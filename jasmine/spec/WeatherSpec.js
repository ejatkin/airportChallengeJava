describe('Weather', function(){

  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  describe('can check if it is stormy', function(){
    it('is stormy', function(){
      spyOn(weather, "random").and.returnValue(0.2);
      expect(weather.stormy()).toEqual(true);
    });
    it('is not stormy', function(){
      spyOn(weather, "random").and.returnValue(0.5);
      expect(weather.stormy()).toEqual(false);
    });
  });

  describe('can set the weather', function(){
    it('at random', function(){
      expect(weather.random()).toBeGreaterThan(0);
      expect(weather.random()).not.toBeGreaterThan(1);
    });
  });

});
