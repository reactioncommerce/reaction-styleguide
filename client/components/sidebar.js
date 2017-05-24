import React, { Component } from "react";
import classnames from "classnames";
import "underscore";
// import s from "underscore.string";
import tocData from "../../lib/tocData"
import { Reaction, Router } from "/client/api"
import { composeWithTracker } from "/lib/api/compose"


class TOCLink extends Component {
  handleClick = (event) => {
    event.preventDefault();

    if (this.props.group !== true) {
      Router.go("guidePage", {
        guide: this.props.item.name
      });
    }
  }

  render() {
    const url = Router.pathFor("guidePage", {
      hash: {
        guide: this.props.item.name
      }
    });

    const linkClassName = classnames({
      active: this.props.active
    });

    return (
      <a className={linkClassName} href={url} onClick={this.handleClick}>
        <span>
          {this.props.item.label}
        </span>
      </a>
    )
  }
}


class TableOfContents extends React.Component {

  handleDocNavigation(name) {
    event.preventDefault();
    console.log(event.currentTarget.href);
    Router.go(event.currentTarget.href);
  }

  renderSubItems(item) {
    const items = item.items.map((item) => {

      const linkClassName = classnames({
        "sg": true,
        "guide-sub-nav-item": true
      });

      return (
        <li className={linkClassName} key={item.name}>
          <TOCLink
            item={item}
            active={item.name === this.props.guideName}
          />
        </li>
      )
    })

    return items
  }

  render() {
    const classes = classnames({
      sg: true,
      sidebar: true,
      visible: this.props.isMenuVisible
    });
    const prefix = Reaction.getShopPrefix()

    const menu = tocData.groups.map((group, groupIndex) => {
      const items = group.items.map((item) => {


        if (item.items) {
          return (
            <li className="guide-sub-nav-item" key={item.name}>
              <TOCLink
                item={item}
                group={true}
                onClick={this.handleExpandGroup}
              />

              <ul className="sg sub-menu">
                {this.renderSubItems(item)}
              </ul>
            </li>
          )
        }

        return (
          <li className="guide-sub-nav-item" key={item.name}>
            <TOCLink
              item={item}
              active={item.name === this.props.guideName}
            />
          </li>
        )
      })

      return (
        <div className="sg nav-group" key={`group-${groupIndex}`}>
          <h4>{group.label}</h4>
          <ul className="menu">
            {items}
          </ul>
        </div>
      )
    })

    return (
      <div className={classes}>
        {menu}
      </div>
    );
  }
}


function composer(props, onData) {

  onData(null, {
    guideName: Router.getParam("guide")
  });
}

export default composeWithTracker(composer)(TableOfContents)
