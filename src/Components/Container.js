import React from 'react';
import './styles.css';
import Leftpanel from './Leftpanel.js';
import Rightpanel from './Rightpanel.js';

class Container extends React.Component {

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
