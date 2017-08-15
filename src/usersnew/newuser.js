import React, { Component } from 'react';
import axios from 'axios';
import querystring from 'querystring';
import {Link, Redirect} from 'react-router-dom'
export default class NewUser extends Component {
  constructor(){
    super()
    this.createUser = this.createUser.bind(this);
   }

   createUser(e){
     e.preventDefault();
     axios.post('http://localhost:8080/users',
     {user:{username:this.refs.username.value, email: this.refs.email.value, password: this.refs.password.value} }  )
     .then((response) => {
       if (response.status=== 200) {
         sessionStorage.setItem("userId", response.data.id);
         this.props.history.push('/');
       }
     }
   )
   .catch((error) => {
     alert("Something went wrong. Call IT!!!")
   })
   }

  render() {
    return (
      <div>
        <form onSubmit={this.createUser} >
          <div className="Input">
            <input ref="username" className="username-signup" required type="text" />
            <label htmlFor="username">Username</label>
          </div>
          <div>
            <input ref="email" className="email-signup" required type="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input ref="password" className="password-signup" required type="password" />
            <label htmlFor="password">Password</label>
          </div>
					<input type="submit" value="Register" />
				</form>
      </div>
    );
  }
}
// {user:{username:this.refs.username.value, email: this.refs.email.value, password: this.refs.password.value}}
// {user:{username:,
// this.refs.username.value
// this.refs.email.value
// this.refs.password.value
