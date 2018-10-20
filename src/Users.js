import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from './actions/userActions';
import UserList from './UserList';

class Users extends PureComponent {
  
  render() {
    return <UserList users={this.props.users} />
  }
}

function mapState(state, ownProps) {
  return { users: state.users };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapState, mapDispatch)(Users);