import React from 'react';
import './styles.css';


class Header extends React.Component {
  state = {
    //set status value to true to see the change
  };

  render() {
    return (
      <nav className="nav_items">
        <ul className="nav_items_container">
          <li className="nav_item">Overview</li>
          <li className="nav_item_selected">Repositories</li>
          <li className="nav_item">Stars</li>
          <li className="nav_item">Followers</li>
          <li className="nav_item">Following</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
