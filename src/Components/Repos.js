import React from 'react';
import './styles.css';
import axios from 'axios';

class Repos extends React.Component {
  state = {
    //set status value to true to see the change
    repoList: [],
  };
  

  componentDidMount() {
    axios
      .get('https://api.github.com/users/supreetsingh247/repos')
      .then(response => {
        console.log("response repolist", response.data);
        this.setState({ repoList: response.data })
    }
      );
  }


  render() {
  	console.log("state 2", this.state);
  	console.log("Repos", this.state.repoList);
    return (
      <div >
        <ul className="repo_container">
        	{
        		this.state.repoList.map((repo)=>
        			<div>
	        			<li className="repo">
	        				<h3>{repo.name}</h3>
	        				<button className="btn_star"> Star </button>
	        			</li>
	        			
        			</div>
        		)
        	}
        	
        </ul>
      </div>
    );
  }
}

export default Repos;
