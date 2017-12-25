import React from 'react';
import ReactDOM from 'react-dom';

import Form from './form'; // how you important
import Calculator from './temperatureInput';
import NumberList from './listAndKeys';

//const numbers = [1, 2, 3, 4, 5]; used for NumberList
ReactDOM.render(
  
  <Calculator />,
  document.getElementById('root')
);
