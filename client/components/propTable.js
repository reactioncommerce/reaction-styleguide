import React, { Component } from "react";
import { Select, Switch, TextField } from "./";

class PropTable extends Component {

  handleSelectChange = (value, name) => {
    this.props.onPropChange(value, name)
  }

  handleSwitchChange = (event, value, name) => {
    this.props.onPropChange(value, name)
  }

  handleTextChange = (event, value, name) => {
    this.props.onPropChange(value, name)
  }

  renderControl(property) {
    const { control } = property;

    if (control) {
      const value = this.props.exampleProps[property.name];


      if (control.type === "text") {
        return (
          <TextField
            value={value}
            name={property.name}
            onChange={this.handleTextChange}
          />
        )
      }

      if (control.type === "select") {
        return (
          <Select
            name={property.name}
            onChange={this.handleSelectChange}
            options={control.options}
            value={this.props.exampleProps[property.name]}
          />
        )
      }

      if (control.type === "switch") {
        return (
          <Switch
            checked={value}
            name={property.name}
            onChange={this.handleSwitchChange}
          />
        )
      }
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
            <td>{this.renderControl(prop)}</td>
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
        <table className="table sg-table">
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
