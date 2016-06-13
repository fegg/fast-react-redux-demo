import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../actions/user';

import { UserList } from '../../components';

class UserListApp extends Component {
  
  componentWillMount() {
    const { actions } = this.props;
    actions.getUsers();
  }

  render() {
    return (
      <div>
        <UserList usersById={this.props.usersById} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      users: state.user.users,
      usersById: state.user.usersById
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userAction, dispatch),
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListApp);