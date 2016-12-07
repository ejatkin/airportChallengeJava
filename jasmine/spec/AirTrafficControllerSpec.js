describe('AirTrafficController', function(){

  var airtrafficcontroller;

  beforeEach(function(){
    airtrafficcontroller = new AirTrafficController();
  });

  describe('instructs a plane to land', function() {
    it('in the airport', function() {
      spyOn(plane, "landed");
      airtrafficcontroller.land(plane);
      expect(plane.landed).toHaveBeenCalled();
    });
  });





});
