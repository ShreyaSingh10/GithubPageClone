import React from 'react';
import './styles.css';
import Leftpanel from './Leftpanel.js';
import Rightpanel from './Rightpanel.js';
import axios from 'axios';


class Container extends React.Component {
  state = {
    //set status value to true to see the change
  };

  render() {
    return (
      <div className="parent">
        <Leftpanel/>
        <Rightpanel/>
      </div>
    );
  }
}

export default Container;
