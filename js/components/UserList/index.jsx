import React, { Component } from 'react';
import User from '../User';

class UserList extends Component {
  render() {
    const { usersById } = this.props;
    const users = usersById.map((user) => {
      return (<User key={user.id} id={user.id} name={user.name} />);
    });

    return (
      <div>
        {users}
      </div>
    );
  }
}

export default UserList;