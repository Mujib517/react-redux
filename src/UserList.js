import React, { PureComponent } from 'react';

export default class UserList extends PureComponent {

  constructor() {
    super();

    this.createUser = this.createUser.bind(this);
  }

  createUser(user) {
    return (
      <div key={user.login}>
        <h3>{user.login}</h3>
        <img alt="img" src={user.avatar_url} width="120" height="120" />
      </div>
    )
  }

  render() {
    return <div>
      {this.props.users.map(user => this.createUser(user))}
    </div>
  }
}