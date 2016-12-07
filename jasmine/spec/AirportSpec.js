'use strict';

describe('Airport', function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  describe('confirms a landed plane is', function() {
    it('in the airport', function() {
      airport.receiveLandedPlane();
      expect(airport.planes.length).toEqual(1);
    });
  });

  describe('confirms a flying plane is', function() {
    it('NOT in the airport', function() {
      expect(airport.planes.length).toEqual(0);
    });
  });

  describe('confirms a landed plane', function() {
    it('has landed', function() {
      airport.receiveLandedPlane(plane);
      expect(airport.confirmLanding(plane)).toEqual(true);
    });
  });

  describe('confirms a taken off plane', function() {
    it('has taken off', function() {
      airport.releasesTakenOffPlane(plane);
      expect(airport.confirmLanding(plane)).toEqual(false);
    });
  });


});
