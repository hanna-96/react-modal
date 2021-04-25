import React, { Component } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Modal from "./Modal";
class Routes extends Component {
  render() {
    return <Route path="/" component={Modal} />;
  }
}
export default Routes;
