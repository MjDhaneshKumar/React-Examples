import React, { Component } from "react";
import { withRouter } from "react-router";

class Filter extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    alert(`Child`);
  }
  render() {
    const { match, history } = this.props;
    debugger;
    debugger;
    return (
      <div>
        <h3>
          Filter Component params::: id:{match.params.id} - test:
          {match.params.id}
        </h3>
        <p onClick={e => history.push({ pathname: `/en/filter/jumbo/1230` })}>
          Click
        </p>
      </div>
    );
  }
}
const ChildSectionWithRouter = withRouter(Filter);
export default ChildSectionWithRouter;
