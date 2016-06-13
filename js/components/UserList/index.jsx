import React, { Component } from 'react';
import User from '../User';

const getUser = (user) => {
  return (<User key={user.id} id={user.id} name={user.name} />);
};

class UserList extends Component {
  render() {
    const { usersById } = this.props;
    const users = usersById.map((user) => getUser(user));

    return (
      <div>
        {users}
      </div>
    );
  }
}

export default UserList;