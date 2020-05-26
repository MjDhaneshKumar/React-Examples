import React, { Component } from "react";

export class Child extends Component {
  componentDidMount() {
    alert();
  }

  render() {
    return (
      <div>
        <h3>Child Component</h3>
      </div>
    );
  }
}
