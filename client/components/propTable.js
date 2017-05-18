import React, { Component } from "react";

class PropTable extends Component {
  renderRows() {
    if (Array.isArray(this.props.componentProps)) {
      return this.props.componentProps.map((prop) => {
        return (
          <tr>
            <td>{prop.name}</td>
            <td>{prop.type}</td>
            <td>{prop.description}</td>
          </tr>
        )
      });
    }

    return null;
  }

  render() {
    return (
      <table className="table">
        <thead>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

export default PropTable;
