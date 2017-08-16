import React, { Component } from 'react';
import axios from 'axios'

class ShowUser extends Component {
  constructor(){
    super()
    this.state = {
      recipes: [],
      user: null,
    }
  }
  componentDidMount(){
     axios.get('https://madamerouge8080.herokuapp.com/users/'+sessionStorage.userId)
       .then((response)=>{

         this.setState({user: response.data.user, recipes: response.data.recipes})
       })
   }

  render() {
    let {username} = this.state.user? this.state.user : '';


    return (
      <div className="user-show-page">
        <p>Welcome {username}</p>
        {this.state.recipes.map(function(item, index){
          return <p key={ index }>{item.dish_type}: {item.name}</p>
        })}
      </div>
    );
  }
};

export default ShowUser;
