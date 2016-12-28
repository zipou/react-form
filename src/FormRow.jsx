import React from "react";
import {Button} from "react-bootstrap";

module.exports = class FormRow extends React.Component {

  render() {
    return (
      <div style={{margin: 10}}>
        {this.props.children}
      </div>
    )
  }
}
