import React from 'react';
import './styles.css';
import Header from './Header.js';
import Searchbar from './Searchbar.js';
import Repolist from './Repolist.js';

class Rightpanel extends React.Component {

  render() {
    return (
      <span className="Rightpanel">
        <Header/>
        <Searchbar/>
        <Repolist/>
      </span>
    );
  }
}

export default Rightpanel;
