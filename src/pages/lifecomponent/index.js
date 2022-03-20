import React, { Component } from "react";

class Unmount extends Component {
  render() {
    return(
      <h2>hellow,react-mount</h2>
    )
  }
}

class LifeComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };

    console.log('执行了constructor方法');
  }

  componentDidMount() {
    console.log('执行了componentDidMount方法');
  }

  render() {
    console.log('执行了render方法');
    return (
      <div>
        <h2>计数机：{this.state.count}</h2>
        <button onClick={(e) => this.changeCount()}>+1</button>
        <br/>
        <Unmount/>
      </div>
    );
  }

  conponentDidUpdate() {
    console.log('执行了conponentDidUpdate方法');
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
}

export default LifeComponent;
