import React, { Component } from "react";
import Radium from "radium"
import { Switch, FlatButton, IconButton, Divider, Card, CardBody, CardHeader, Section, TextField } from "../components"

const colors = [
  { label: "Primary", bg: "#8DBBD3", color: "#1999dd", fg: "#11A7F0" },
  { label: "Primary", bg: "#CCEEE5", color: "#94E8D1", fg: "#8FF4D8" },
  { label: "Primary", bg: "#EDEDED", color: "#ffffff", fg: "#EDEDED" },
  { label: "Primary", bg: "#ADDFC9", color: "#34D891", fg: "#34E598" },
  { label: "Primary", bg: "#809DAA", color: "#23566D", fg: "#257294" },
  { label: "Primary", bg: "#BFC8CC", color: "#343434", fg: "#4A5052" },
  { label: "Primary", bg: "#EAD9AB", color: "#EFC95F", fg: "#FBD05A" },
  { label: "Primary", bg: "#E79FA6", color: "#EB4D5C", fg: "#E79FA6" },
  { label: "Primary", bg: "#B0D1F0", color: "#B0D1F0", fg: "#128DFC" }
]

const styles = {
  colors: {
    display: "flex",
    flexWrap: "wrap"
  },
  colorGroup: {
    flex: "1 1 auto",
    minWidth: "33%",
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
  circle: {
    width: "100%",
    height: 60,
    // borderRadius: 30
  },
  circleSM: {
    display: "flex",
    alignItems: "center",
    // width: 30,
    height: 30,
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

  renderColorCircle(color, size = "normal", offset = 0) {
    return (
      <div
        style={[
          styles.circle,
          size === "sm" ? styles.circleSM : undefined,
          {
            backgroundColor: color,
            transform: `translateX(${offset})`
          }
        ]}
      >
        <span>{color}</span>
      </div>
    )
  }

  renderColorGroup() {
    console.log("okok");
    return colors.map((colorGroup, index) => {
      return (
        <div key={index} style={styles.colorGroup}>
          <div style={styles.colorCircles}>
            {this.renderColorCircle(colorGroup.color)}
            {this.renderColorCircle(colorGroup.bg, "sm")}
            {this.renderColorCircle(colorGroup.fg, "sm")}
          </div>
        </div>
      )
    })
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
