import React, { Component } from 'react';
import Input from './registrationform';
import axios from 'axios';
import querystring from 'querystring'

export default class NewUser extends Component {
  constructor(){
    super()
   }

   createUser(e){
     e.preventDefault();
     debugger;
     axios.post('http://localhost:8080/users',
     querystring.stringify({user: ''}))
     .then((response) => {
       this.props.addTweet(response.data);
     })
   }
  render() {
    return (
      <div>
        <form onSubmit={this.createUser} >
          <div className="Input">
            <input ref="username-signup" className="username-signup" required type="text" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input ref="email-signup" className="email-signup" required type="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input ref="password-signup" className="password-signup" required type="password" />
            <label htmlFor="password">Password</label>
          </div>
					<input type="submit" value="Register" />
				</form>
      </div>
    );
  }
}
