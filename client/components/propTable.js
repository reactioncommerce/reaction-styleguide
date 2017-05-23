import React, { Component } from "react";

class PropTable extends Component {


  renderControl(control) {
    if (control.type === "text") {
      return (
        <input defaultValue={control.value} />
      )
    }

    return null;
  }

  renderRows() {
    if (Array.isArray(this.props.componentProps)) {
      return this.props.componentProps.map((prop, index) => {
        return (
          <tr key={index}>
            <td>{prop.name}</td>
            <td>{prop.type}</td>
            <td>{prop.description}</td>
            <td>{this.renderControl(prop.control)}</td>
          </tr>
        )
      });
    }

    return null;
  }

  render() {
    return (
      <div>
        <h2>{"Properties"}</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default PropTable;
