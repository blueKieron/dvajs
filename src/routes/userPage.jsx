import React, { Component, Fragment } from "react";
import { Link } from "dva/router";
import Child from '../components/child'


class UserPage extends Component {
  handleToIndex = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <Fragment>
        <div>user</div>
        <Link to="/">index</Link>
        <button onClick={this.handleToIndex}>index</button><br/>
        <Child/>
      </Fragment>
    );
  }
}

export default UserPage;

// export default connect()(UserPage);
