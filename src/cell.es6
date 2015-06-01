import React from 'react';

export default class Cell extends React.Component {
  style() {
    return {
      background: 'green',
      width: '15px',
      height: '15px',
      position: 'absolute',
      border: '1px solid white',

      left: this.props.x * 15,
      top: this.props.y * 15
    }
  }

  render() {
    return <div style={ this.style() }></div>;
  }
}
