import React from 'react';
import ReactDOM from 'react-dom';

import Form from './form'; 
import Calculator from './temperatureInput'; 
import EssayForm from './textarea';
import Reservation from './multiInput';
import { BrowserRouter, Route, Link } from 'react-router-dom';

ReactDOM.render(
  
  <BrowserRouter>
  <div align="center">
      <Route exact path ='/' component={Form} />
      <Route exact path='/liftingstate' component={Calculator}/>
      <Route exact path='/textareaform' component={EssayForm}/>
      <Route exact path='/multiinput' component={Reservation}/>
      
      <Link to={"/"}><button>Form </button></Link>
      <br/>
      <Link to={"/textareaform"}><button> Form Textarea </button></Link>
      <br/>
      <Link to={"/multiInput"}><button> Multiple Inputs Reservation Form </button></Link>
      <br/>
      <Link to={"/liftingstate"}><button> Lifting State </button></Link>
      <br/>
  </div>
</BrowserRouter>,
  document.getElementById('root')
);
