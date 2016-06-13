import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../actions/user';
import axios from 'axios';
import { UserList } from '../../components';

class UserListApp extends Component {
  
  componentWillMount() {
    const { actions } = this.props;
    axios.get('/mock/users.json').then(function (ret) {
      if(ret.status === 200) {
        actions.setUser(ret.data);
      }
    });
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
  actions: bindActionCreators(userAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListApp);