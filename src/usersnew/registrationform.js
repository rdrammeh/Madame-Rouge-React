import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input id={this.props.id} required type={this.props.type} />
        <label htmlFor={this.props.id}>{this.props.id}</label>
      </div>
    );
  }
};
