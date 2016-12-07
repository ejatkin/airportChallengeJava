'use strict';

describe('AirTrafficController', function(){

  var airtrafficcontroller;
  var plane;
  var airport;

  beforeEach(function(){
    airtrafficcontroller = new AirTrafficController();
    plane = new Plane();
    airport = new Airport();
  });

  describe('instructs a plane to land', function() {
    it('in the airport', function() {
      spyOn(plane, "landed");
      spyOn(airport, "receiveLandedPlane");
      airtrafficcontroller.land(airport, plane);
      expect(plane.landed).toHaveBeenCalled();
    });
  });

  describe('instructs the airport', function() {
    it('to receive a landed plane', function() {
      spyOn(airport, "receiveLandedPlane");
      spyOn(plane, "landed");
      airtrafficcontroller.land(airport, plane);
      expect(airport.receiveLandedPlane).toHaveBeenCalled();
    });
  });






});
