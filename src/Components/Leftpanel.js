import React from 'react';
import './styles.css';
import axios from 'axios';


class Leftpanel extends React.Component {
  state = {
    //set status value to true to see the change
    leftPanelData : '',
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/supreetsingh247')
      .then(response => 
        
        this.setState({ leftPanelData: response.data })
      );
  }

  render() {
    console.log("STATE", this.state);
    const {name, login, bio, email, avatar_url} = this.state.leftPanelData;
    return (
      <span className="Leftpanel">
        <img src={avatar_url} className="picture"></img>
        <div className= "name">{name}</div>
        <div className="username">{login}</div>
        <div className="bio"> 
          <div>{bio}</div>
        </div>
        <div>
          <a className="email">{email}</a>
        </div>
        <button className="btn">Edit</button>
      </span>
    );
  }
}

export default Leftpanel;
