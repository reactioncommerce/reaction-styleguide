import React, { Component } from "react";
import Radium from "radium"
import { Switch, FlatButton, IconButton, Divider, Card, CardBody, CardHeader, Section, TextField } from "../components"
import colors from "../../lib/colors"
import tinycolor from "tinycolor2";

const styles = {
  colors: {
    display: "flex",
    flexWrap: "wrap",
  },
  colorGroup: {
    flex: "1 1 auto",
    minWidth: "25%",
    maxWidth: "25%",
    padding: "10px"
  },
  colorCircles: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    marginBottom: "40px"
  },
  colorValues: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  block: {
    width: "100%",
    display: "flex",
    height: 60,
    padding: "10px",
    fontSize: "12px"
  },
  blockLG: {
    display: "flex",
    height: 120,
    // borderRadius: 15,
    // zIndex: 1
  },
  input: {
    border: "none",
    backgroundColor: "transparent",
    textAlign: "center",
    width: "90px"
  }
}

class ColorScreen extends Component {
  state = {
    checked: true
  }

  renderColorGroup() {
    return colors.map((colorsGroups, index) => {

      const group = colorsGroups.map((color, colorIndex) => {
        const isLight = tinycolor(color.color).isLight();

        return (
          <div
            key={colorIndex}
            style={[
              styles.block,
              colorIndex === 0 ? styles.blockLG : undefined,
              { backgroundColor: color.color }
            ]}
          >
            <span
              style={{
                flex: "1 1 auto",
                color: isLight ? "black" : "white"
              }}
            >
              {color.name}
            </span>
            <span
              style={{
                flex: "0 0 auto",
                color: isLight ? "black" : "white"
              }}>
                {color.color}
              </span>
          </div>
        )

      });

      return (
        <div key={index} style={styles.colorGroup}>
          {group}
        </div>
      )
    });
  }

  render() {
    return (
      <Section title="Colors">
        <div style={styles.colors}>
          {this.renderColorGroup()}
        </div>
      </Section>
    )
  }
}

export default Radium(ColorScreen)
