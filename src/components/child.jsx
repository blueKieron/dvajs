import React, { Component } from 'react';
import { withRouter } from 'dva/router';

class Child extends Component {
  handleClick =() => {
    // console.log(this.props)
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>index_child</button>
      </div>
    );
  }
}

export default withRouter(Child);
