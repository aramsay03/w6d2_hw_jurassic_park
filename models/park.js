const Park = function (name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = []
};

Park.prototype.addDinosaur = function (dino) {
  this.dinosaurs.push(dino);
};

Park.prototype.removeDinosaurByName = function (dino) {
  let index = this.dinosaurs.indexOf(dino);
  if (index > -1) {
    this.dinosaurs.splice(index, 1);
  };
};

Park.prototype.findDinoWithMostVisits = function () {
  let dino
  this.dinosaurs.species.forEach( function(){
    //if statment to work out which dino has the most visits.
  });
};

module.exports = Park;
