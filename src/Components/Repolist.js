import React from 'react';
import './styles.css';
import Repos from './Repos.js';

class Repolist extends React.Component {
  
  render() {
    return (
      <div className="repos_container">
        <Repos/>
      </div>
    );
  }
}

export default Repolist;
