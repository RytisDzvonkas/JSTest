/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.wasExpensive = this.budget >= 100000000 ? true : false;
    this.print = function () {
      console.log(
        `Movie ${this.title} directed by ${this.director} had a budget of ${this.budget}`
      );
    };
  }
}

const avengers = new movie(
  "Avengers: Endgame",
  "Joe Russo and Anthony Russo",
  400000000
);
const kingsMan = new movie("The Kings Man", "Matthew Vaughn", 100000000);
const menInBlack = new movie("Men in Black", "Barry Sonnenfield", 90000000);

avengers.print();
console.log(avengers.wasExpensive);
