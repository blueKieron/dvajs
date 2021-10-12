import React, { Component } from "react";
import { connect } from "dva";
import * as apis from "../services/example";

class IndexPage extends Component {
  componentDidMount() {
    // apis.getExample().then((res) => {});

    // mock
    apis.getMock()
      .then(res => {
      console.log(`resMOCK`, res)
      })
  }
  handleClick = () => {
    this.props.dispatch({
      type: "examplenamespace/setExample",
      data: {
        example: "newExample",
      },
    });
  };
  handleClickAsync = () => {
    this.props.dispatch({
      type: "examplenamespace/setExampleAsync",
      data: {},
    });
  };
  getCnodeAsync = () => {
    this.props.dispatch({
      type: "examplenamespace/getCnodeAsync",
      data: {
        example: "newExampleAsync",
      },
    });
  };
  render() {
    return (
      <div>
        <h2>index...</h2>
        {this.props.example}
        <br />
        <button onClick={this.handleClick}>setExample</button>
        <button onClick={this.handleClickAsync}>setExampleAsync</button>
        <button onClick={this.getCnodeAsync}>getCnodeAsync</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    msg: "indexState",
    example: state.examplenamespace.example,
    cnode: state.examplenamespace.cnode
  };
};
export default connect(mapStateToProps)(IndexPage);
