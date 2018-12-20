import React from 'react';
import './styles.css';
import Header from './Header.js';
import Searchbar from './Searchbar.js';
import Repolist from './Repolist.js';



class Rightpanel extends React.Component {
  state = {
    //set status value to true to see the change
  };

  

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
