import React from 'react';
import './styles.css';


class Searchbar extends React.Component {

  render() {
    return (
      <div className="search_bar">
        <input type="search" className="search_box" placeholder="Find a repository..."></input>
        <button className="btn_type">Type</button>
        <button className="btn_language">Language</button>
        <button className="btn_new">New</button>
      </div>
    );
  }
}

export default Searchbar;