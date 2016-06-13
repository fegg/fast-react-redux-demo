import React, { Component } from 'react';

class User extends Component {
  _handleClick () {
    
  }

  render() {
    const { id, name } = this.props;

    return (
      <div>
        <h3>{id}</h3>
        <p>{name}</p>
        <button onClick={this._handleClick.bind(this)}>删除</button>
      </div>
    );
  }
}

export default User;