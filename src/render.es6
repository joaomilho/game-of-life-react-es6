import React from 'react';
import Game from './game.es6';
import patterns from './patterns.es6';

React.render(<Game livingCells={ patterns.gosper_gun } />, document.getElementById('gol'));
