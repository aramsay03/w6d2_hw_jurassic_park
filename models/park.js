const Park = function (name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
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
  let dinoWithMost = this.dinosaurs[0];
  for (let dino of this.dinosaurs) {
    if (dino.guestsAttractedPerDay > dinoWithMost.guestsAttractedPerDay){
      dinoWithMost = dino;
    }
  }
  return dinoWithMost;

};

Park.prototype.findAllBySpecies = function (species) {
  // let dinos = [];
  // this.dinosaurs.forEach = function (){
  //    if this.dinosaurs.species === species;
  //     dinos.push(this.dinosaur);
  // };
  //   // Check each dinos species for specified species.
  //   // Push dino into tempory dinos array.
  //   // Return dinos array.
  // return dinos;
};

module.exports = Park;
