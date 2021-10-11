import React, { Component } from "react";
import { connect } from "dva";
class IndexPage extends Component {
  handleClick = () => {
    this.props.dispatch({
      type: "example/setExample",
      data: {
        example: 'newExample'
      }
    })
  }
  render() {
    return (
      <div>
        <h2>index...</h2>
        {this.props.example}<br/>
        <button onClick={this.handleClick}>setExample</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    msg: "indexState",
    example: state.example.example,
  };
};
export default connect(mapStateToProps)(IndexPage);
