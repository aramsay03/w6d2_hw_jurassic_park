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

module.exports = Park;
