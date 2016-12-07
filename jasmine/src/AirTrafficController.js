var AirTrafficController = function (){};

AirTrafficController.prototype.land = function(airport, plane){
  plane.landed();
  airport.receiveLandedPlane();
}
