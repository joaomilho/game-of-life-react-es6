import _ from 'lodash';
import {unique, neighbours, includes} from "./utils.es6";

export default class GameLogic {
  constructor(livingCells) {
    this.livingCells = livingCells;

    this.survive     = this.survive.bind(this);
    this.isAlive     = this.isAlive.bind(this);
    this.isDead      = this.isDead.bind(this);
    this.isBorn      = this.isBorn.bind(this);
    this.newBornsFor = this.newBornsFor.bind(this);
  }

  get next() {
    return this.survivors.concat(this.newBorns);
  }

  // private

  get newBorns() {
    return unique(_.flatten(_.map(this.livingCells, this.newBornsFor)));
  }

  get survivors() {
    return _.filter(this.livingCells, this.survive);
  }

  isBorn(cell) {
    return this.liveNeighbours(cell).length == 3;
  }

  newBornsFor(cell) {
    return _.filter(this.deadNeighbours(cell), this.isBorn);
  }

  survive(cell) {
    var liveNeighboursCount = this.liveNeighbours(cell).length;
    return liveNeighboursCount == 2 || liveNeighboursCount == 3;
  }

  liveNeighbours(cell) {
    return _.filter(neighbours(cell), this.isAlive);
  }

  deadNeighbours(cell) {
    return _.filter(neighbours(cell), this.isDead);
  }

  isAlive(cell) {
    return includes(this.livingCells, cell);
  }

  isDead(cell) {
    return ! this.isAlive(cell);
  }
}
