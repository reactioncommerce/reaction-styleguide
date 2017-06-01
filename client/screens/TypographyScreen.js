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
  },
  colorCircles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem"
  },
  colorValues: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  circleSM: {
    width: 30,
    height: 30,
    borderRadius: 15,
    zIndex: 1
  },
  input: {
    border: "none",
    backgroundColor: "transparent",
    textAlign: "center",
    width: "90px"
  }
}

const titleText = "Pack my box with five dozen liquor jugs"

class TypographyScreen extends Component {
  state = {
    checked: true
  }

  render() {
    return (
      <Section title="Typography">
        <div>
          <div>
            <h1>{"Source Sans Pro"}</h1>
            <p>{"​‌A​‌B​‌C​‌Ć​‌Č​‌D​‌Đ​‌E​‌F​‌G​‌H​‌I​‌J​‌K​‌L​‌M​‌N​‌O​‌P​‌Q​‌R​‌S​‌Š​‌T​‌U​‌V​‌W​‌X​‌Y​‌Z​‌Ž​‌a​‌b​‌c​‌č​‌ć​‌d​‌đ​‌e​‌f​‌g​‌h​‌i​‌j​‌k​‌l​‌m​‌n​‌o​‌p​‌q​‌r​‌s​‌š​‌t​‌u​‌v​‌w​‌x​‌y​‌z​‌ž​‌Ă​‌Â​‌Ê​‌Ô​‌Ơ​‌Ư​‌ă​‌â​‌ê​‌ô​‌ơ​‌ư​‌1​‌2​‌3​‌4​‌5​‌6​‌7​‌8​‌9​‌0​‌‘​‌?​‌’​‌“​‌!​‌”​‌(​‌%​‌)​‌[​‌#​‌]​‌{​‌@​‌}​‌/​‌&​‌<​‌-​‌+​‌÷​‌×​‌=​‌>​‌®​‌©​‌$​‌€​‌£​‌¥​‌¢​‌:​‌;​‌,​‌.​‌*012345"}</p>
          </div>
          <div>
            <h2>AaBbCc</h2>
            <h2>012345</h2>
          </div>
        </div>


        <h1>{titleText}</h1>
        <h2>{titleText}</h2>
        <h3>{titleText}</h3>
        <h4>{titleText}</h4>
        <h5>{titleText}</h5>
        <h6>{titleText}</h6>
      </Section>
    )
  }
}

export default Radium(TypographyScreen)
