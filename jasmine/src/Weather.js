var Weather = function(){};

Weather.prototype.stormy = function(){
  if (this.random() < 0.3){
    return true;
  } else {
    return false;
  }
};

Weather.prototype.random = function(){
  return Math.random();
}
