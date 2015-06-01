import React from 'react/addons';
import _ from 'lodash';
import Cell from './cell.es6';

export default class Board extends React.Component {
  render() {
    return <div>{ this.renderCells() }</div>;
  }

  renderCells() {
    return _.map(this.props.cells, this.renderCell);
  }

  renderCell([x, y]) {
    return <Cell key={ [x, y] } x={ x } y={ y } />;
  }
}

