import React from 'react';
import _ from 'lodash';
import Board from './board.es6';
import GameLogic from './game_logic.es6';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      livingCells: props.livingCells
    };

    setInterval(this.tick.bind(this), 20);
  }

  tick() {
    this.setState({livingCells: this.newLivingCells});
  }

  get newLivingCells() {
    return new GameLogic(this.state.livingCells).next;
  }

  render() {
    return <Board cells={ this.state.livingCells } />;
  }
}
