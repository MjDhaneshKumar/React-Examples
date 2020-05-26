import React, { Component } from "react";
import Filter from "./Filter";
class Child extends Component {
  componentDidMount() {
    alert(`Child`);
  }

  render() {
    debugger;
    debugger;
    return (
      <div>
        <h3>Child Component </h3>
        <Filter />
      </div>
    );
  }
}
export default Child;
