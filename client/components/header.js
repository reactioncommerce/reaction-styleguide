import React, { Component } from "react";
import classnames from "classnames";
import SearchField from "./search"

import ChatIcon from "./svgIcons/ChatIcon"
import DownloadIcon from "./svgIcons/DownloadIcon"
import ForumIcon from "./svgIcons/ForumIcon"
import DocsIcon from "./svgIcons/DocsIcon"
import TutorialIcon from "./svgIcons/TutorialIcon"
import CustomizeIcon from "./svgIcons/CustomizeIcon"
import ForkIcon from "./svgIcons/ForkIcon"


class Header extends Component {

  state = {
    showNavDropdown: false,
    showMobileNavigation: false
  }

  handleMenuToggle = () => {
    if (Meteor.isClient) {
      if (Session.equals("isMenuVisible", true)) {
        Session.set("isMenuVisible", false);
      } else {
        Session.set("isMenuVisible", true);
      }
    }
  }

  handleShowMobileNavigation = () => {
    this.setState({
      showMobileNavigation: !this.state.showMobileNavigation
    })
  }

  handleShowNavDropdown = () => {
    this.setState({
      showNavDropdown: !this.state.showNavDropdown
    })
  }

  renderToolbar() {
    return (
      <div className="redoc header">
        <div className="main-header">
          <div className="navbar-item brand">
            <button className="redoc menu-button" onClick={this.handleMenuToggle}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div className="navbar-item filters">
            <div className="item">

            </div>
            <div className="item">
              <SearchField />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const dropDownClassName = classnames({
      "reaction-nav-dropdown-links": true,
      "active": this.state.showNavDropdown
    })

    const dropDownToggleClassName = classnames({
      "reaction-nav-link": true,
      "reaction-nav-dropdown-toggle": true,
      "flipped": this.state.showNavDropdown
    })

    const navLinksClassName = classnames({
      "reaction-nav-group": true,
      "reaction-nav-links": true,
      "reaction-nav-links-show": this.state.showMobileNavigation
    })

    const menuToggleClassName = classnames({
      "reaction-nav-toggle": true,
      "active": this.state.showMobileNavigation
    })

    return (
      <div className="header">
        <nav className="reaction-nav" role="navigation">
          <div className="reaction-nav-group reaction-nav-header">
            <a href="https://reactioncommerce.com" className="reaction-nav-item">
              <img
                src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAAAXNSR0IArs4c6QAAEEFJREFUeAHtXAt4VMUVnrl3H4AEgUhrlc2LR8IurUWp1mq19mH97ENoCVqLyCPJJlTRUuXDamu0tD6rtlSSTQIULIr4wtZqtbXa4gsR2/plNwmvsBuLNmhAHiG7e++d/ucmc/dmdwMkhRrIzgeZuWfOzJ3575kz55yZhDOksbVbRke16D2c8wuFEJ8iWiZ1RwDYvCcYf9mtOhduLR33LjdB02P/YkKM7M6aeUqLAOdtbtV1hoMkDQwZ0NKilIYIASPMFFqeaaozpEMgQJg5knVaS8VEfog2A7bKU1Uv5OQJM0U+ZPLeIZABrnd4WdwZ4CwoelfIANc7vCzuDHAWFL0rZIDrHV4WdwY4C4qeC7k1DV9Irs0Al4xI0nNuIFQiDOOlJDJzJBMyz50InBUQzlbRcL9hGD9Ih0kGuDSojF2+ZVRrLPQ4Ah8XpKk2SZmlmoRMbl1wUjQWe8sOGmf8L0lsLAOcDZG86vrvGXH2KkDLkWTO2QPnZHsvkc8yzwAHJCqFUHIC9Xfpgj3MmBhM4CAC0sG5cnWkfOIPH5vOdQmYzAe8jstb0Tx8WSD0CBMsIVWc/9uhOKZuLyvcSEDlL2ss1GKaxMzMB7TE5VQHvXq0/U0sTQs0xNReU91ssgQttzp0qR7XN3RDDQ8DFjhPTfDbmP8bAG2cBAVLszYrm1+0Y7bvfaLlBIKLDCH+gPjbyZJH5gNuqQIEnlcTvMUw2G1UJiCwAcQ5U64Pl3uX0vNZgZ1DdondK4QhptNzujSggPOtDQ6FFK2EPvsONoEuPPgulfFpzeXevxMhr6ohr1W0rUP1GTbA3kH5M7bngbNUc5ZvLtj7IXu9E7ROCLBzvu1U2GQJWm6g8SKdGxvtoIHnsREnnTIwfdWcmtBXRSyOHVJMTEgNf/j0kcPO3+73RYiWWxW8xjC0F6DzTumC1cAWcEuk3Df9nZmnHki06yyd8EvVUx1cAF11NwBRJSDwBG6KVHjvbgFh7LNb3NFIrAqbwGwJDur3coVfGfZ7/0i0Mau2fiJ2oENWm/kJCxzss0FGR3sNNoCr5IyxCexRFOWKHWUTnicaIh+fioZjT0ISP2/xMN6kutTLmucWNXXxnAnQ1sl6mZ+Q5gjdTjCiB9YLZgeNh5wO/jkJWl5t6PMAdVM30Dj/o0MZdE4CtOCVhiFeAVgeCZjMTziJy6lqPC+mR58Qgn1SThIK/unBTvWqprlF+4iWVx2cbWiiCsC6bTx3zPF7b6nk3CheK9QNbaE7ANqNsj45P6GAg6lRxoS+BKC5zIlyTobaz6CrgAcXX3pJOLY3he7ThbjWAoKzdnDNxiawtrIcRu/q8IgNbcE16ONiG8+72GlHW88o9FvgKJDYZoQmcVXZs71swmb7oJPLxLtLhH6NTQBTl4nvVwSfGa7wPsVBHR9oOmV7U3AtALnI4uB8h8ocU5orCv9FNHLBxN79T6M4NsHDXlXVId/VtHbTm5D0fqnjoLTPbBWhoMbEhriuN3mq65/IWxE8VQ7antOOt8sIvQh9ZYGGTWCby8nPJdCIN7+66YwOoW3sDhp7aRB3fK65vBO0vEBoCljfgM6zgcZrskbyLzeXFvzH/k4q9zvgaLlBcl6z+5BktBpR0ZBbE5xjn0BObcNZ2PHegq76oqRjSf45y8HP3lbirSdaTlVwusbirwHYPBvPkoJC38Wb/YUfgM7xzluxfJ9EOYt4yAVjijIPy9cfnO6LyXb2vN8s1S7/MADQZtgHKMuQluFCF8uwnK7E9/4VVFaRoRm3od6MnxEfrl7dd/ZI70KKn1UixrY8EFoMMG4C8GaCfRZVOKvYUe5bEQGl0wULPYSPRNJmJujEVqHyaS2l3vWSli7vF8DlBZqK4FQ/jkn6rEFyvgWTWIJnDyY+X+6A4PkKY/pXAKSVIGVknZaGy32/C6NQENh2MkB7GLyXSiaAtlNR2Hd2+H1miMgT2DJmX1vsaYBmvRP9vO10uadsmzOWbONDpo8dOE916HLd0OqgW4bKkWICj8J8KJXmAwKJyxATqwMQ50seK+fsXcHUqS3lRW8RjT6CZnSsA9CFFg/jb8ATAGje94jmCTRczI3oGmA/wsZDLljJ69M9BxO0nksfG3BYJq69u9kvmWFcI4cHwEif3ADdQpJmJTJIAdoFCAfNg0q6A+UuXcRfUdXB06Tyzqlp+Kaha6sB2jCrMePL3bmueVsvHRclWm4g+CNDGHcBNNXk4VyHol8Eab33sGKW6PTjMUcKAsGcvW3sMSyTs62xcB5RBSturvC9KWmeZY2nOTXnge3+MR8BVFqcD+bXbn9cN9ovwXPr7FLv82SwEr+nKnSz0I3bIbnAwUwaeBbIj3Du2pbB/27bWwuj9vtd9QyqYLfgyhVh/4QXJO1Ic26/aUiNjvWNTApFG0yQQrbdO+bPnTREuarx6gkf0hjy60K5elw8RLulucMxvnT4kOyb00UpPrPq/ZP2tH/4W0jhNGprJs4/UIVSvKNiwsv0PGb5Vk88Gn0K/Z1l1uMHQA06HWzKthLfVkk7VJ6Mk/w6h2pzVOrIjcEyWQzQnkmAxg2FKz+JlHu/IUGDDfcNTRNvE2j0YmwCToByHcCpJ91kH0xubWP+7gMfkKlhgQZA/ulw8MkSNJga58ejpsligQbU1kGHnnukoNnfKcu91nHkHBu6oCUBx5f/wTXUtXjrjHF7ZYfpciyvT8KNeaSbAYptnzvY98Kl3r+SZd/lH/4M4Z1FQAurqHsCOHlwp57PqQqt5E7xK66JIl3TSRdmS06A9ugoPmLOppLT2okGG86PvpZgjTtNHnLBBLsdLtht4KWl3+fUq6WaUx26jjHjHpIC+UZs8+9zhf0o7PfhTDI1eWqDX8Sp5KOYuPWLJxj0K8KpXt4yt2gntSBgNb19DcyOLyV64Lu4IlbAHMMHElekA9PGa2AMN0f8vjuJZrpgLLQENqHfxrNfVfhV2FlTQkQJnp5LyUv1iCSucFlj1sG4vkwIozi5ayypU4XBVudU15dw1fWDcOn4BsmDZXcjjNRf4NMm3sP5vQWF3ptevohrxJdfHbpA1w8SaBawWEp/hzELpe3rNB9qg1VM53UAb7zsW+b4CB/h41HQ8VmzP3yEXXqIbELLdCEXDD7SZTvKvEHZ7n/NDytxY+pCE2OaeMI+aAzkP0zwzYwLxLRs0keuCnY+KM43dcZnos0lcoBoswe/0jOrpdxHTjSqBIfOWwjaz/EgTQOBFXRPwXjfzRJY2b4rMHkrPtQNoJkfAn02OhT1MhkE8FQ3TmZMewofYbRsB54XWFbWFZHv5+6WtL7kvZI4uDczYpoRwECGyJdhIKtG8ZEVm8pPay+oaRiv6caDmMxXqb4LxOt1kzmhQiAR/2Au57SWOeO3UxWdngO0VeD/FlqZ3CawCrs6Ujbx9xFQKrFGlwUaijl2QoC7qXlW3lpI100Y00PAfCpnRivGsXpTWZc+w1jhUdSiz0Fmh/QD0n3OSO+idFcYLJ4+FtJKHMXhY5HYA5AKqO3OhMlHIe7zoUdqJE3m5EijfD8APE3SZE6HvIp78Pwds/PNoD055kw3HkPf+Qke/jZX1Wnh0qJmohWtbMg+0K6vRvHrFg/j6x2qUiKlS9JpU3mzLXQ3NpUFkgbEDkLqS8MVPurjqKRkiUsBTmVqvsF1TIxB7DsTvnQzU5XiSOmETZKWnJMe7IjrlZjAfNQ50GYfJnANTI1VkhcHJ+XYyx4AwG5JgysUcHlc10nLnnZtXTPWoh6bQveEPjtgtd5WMN57Ly1lCjqyfftp4/majbOFO9SphxqrjfeIi4cFzrSmbT4cnp9hw7JmSh0xpi44FvdPfgz6aEziGUxiqV0fkbXviBtjhXvwO5CyPTSyLiM1gAlaVjvaHoAUl8Oy/50cfbpdW9bZcwBISh5nCljqQpwu69DfeudJ7mnbZo5tlbSjlR8WOOtF8OEAzk+wW92JgZqKCPqFDM3lAMD0FYmXJoGT8HnyUNdq31XIrd08Qehx2uW8so6UOmJA0yJlPnOX69q1qV/q30zodx+kfr7DMfg5XTs4BRvRnXgeLuuTc/BXj+Le+Zv8nDaoo56OCDgA1soVB8yBopdoBGQXfcAa7sJ92B/2NCJ87YdUx+AbpcNNfHRRTxccOjER+QB5zbBsXooA4X7iKQg0fDouDLo2ajM1eL1TVb5r12d0lAc1sBR8VuyM2uMjxPHjmnS6l+qPVjoscPhy3YzT8VVNp3ew+FqI3BfkIMBDiv49SEi+pFEO+kfgux1xh42w7GeiXCLrUReD4C4I+yc+KGmequAslJcCWCsYicsvK0cpw+dt8nfulpJX5nChivHe+zpNDr6VM3VWpKLoVVl/rPLDAjemyOeUOgtLkwKGj2Bio+SAIFl/gWTNIMkir4Bp5sRtVwskZyJHm7BDdRTLO2dkk+Fe2m8gPXMlF30M/L8WqqFO0nrKK2GqrFnVOEL6tz3xHU16MnDYtbsnAg1fFLstwjQCxqMEjfQcZ4vnlHu/LpdjS6lv/Zgi7yRF4TdA3syl1703UwqfzXKyMyVoFHk1ou24/GIHjW1DdPbcIwGN+q9EKOn/CVrynOg5xRwZ5uTZ+zQGIzMRdsYabMPEZoTLfM/JTihUo/NoXF7CM5c01+5Hu2KTB5sLgP5ppMx7ByQJq5YutoSmwsteAZ6TZT/oe52TD5pFMTeL1g8LyRKXAhwtK9hZubaxb3Q4leLmEm+YaHRMZ0QZrH7YTgAEG8njLtW1gP4yAtXT0R6ktMhgrg0t/nHbiEYHwc1Nobug3G1GKtMgqYvgj/6SePp7Oixw9gkojFcNzWbXyyOyvJqGCw3dQKxeJJ1x4vAXhml+ofcBqR9lP52SGIeRys6TNHycnfBCLsdO+Iqk9fc8GbgUHWdOAMYpQJsBl2UegQbp4oiDLdQN48VU0KiFGAppugfXC/5J0Q4JAt1LO8i0f3QDjfMXYaROOp5Ak/Ox56lLNck4JYcc16VWArBvy4amQ87Yb3DFAP8EDlC6G6a080KpkSEKX7PrDID0nOCL55ZPqCTlLvs6XvJkiUsBDsZpljROcar0WUR7nwAIBXKCUPTdHHK6ghBv76Dg5kzJk5rzD1XOZuAg+E+pdccHJRm4lKUqQcOhylzczH69G2iM1SnuIefJKAZNmfxC/PbJ1XDrsUR5fQoMnG9wud2TjmfQUuYEQorEjc4+eci7bXsfhJ01O9GAH8SirIj4J65M0FJL5u65OXQdIsLXwrdEXIwvh/9467HyH1NHcOwoyRKXAhxsL/ydJdtVdVxFcCBW1lxa9M6xG1b/7zkZuJSl2h009qR7qGvyQAct3Wd1pCOCdlwZpz3M4ZiSU4CTxiks+uPGOD2mCPXQeQpwiHycKZ34HtpkyEAgRcdlQDsyuUgB7siaZbgywPVRBjLAZYDrIwJ9bJaRuAxwfUSgj80yEtdH4DiOAHciwpu4m9bHjgZSM8Qk31MA2t8G0qSPxlxxTvqy4na4b6Tjv6PR4YDow/yT3c6FCh3r0d/uxqTXkAgOiMn3YZJd2KwhrAiz/wJvyFYbGw353AAAAABJRU5ErkJggg==`}
                alt="Reaction"
              />

              <span>Reaction Commerce</span>
            </a>
          </div>

          <div className={navLinksClassName}>
            <div className="nav-links-left">
              <a href="https://reactioncommerce.com/features" className="reaction-nav-link">Features</a>
              <div className="reaction-nav-dropdown">
                <a href="#" className={dropDownToggleClassName}
                   data-event-action="showNavDropdown" onClick={this.handleShowNavDropdown}>
                  Developers
                </a>
                <ul className={dropDownClassName}>
                  <li>
                    <a href="https://github.com/reactioncommerce/reaction">
                      <DownloadIcon />
                      Download
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.reactioncommerce.com/reaction-docs/master/tutorial">
                      <CustomizeIcon />
                      Customize
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.reactioncommerce.com/reaction-docs/master/contributing-to-reaction">
                      <ForkIcon />
                      Contribute
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.reactioncommerce.com">
                      <DocsIcon />
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="https://forums.reactioncommerce.com/">
                      <ForumIcon />
                      Forums
                    </a>
                  </li>
                  <li>
                    <a href="https://gitter.im/reactioncommerce/reaction">
                      <ChatIcon />
                      Chat
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*
            <div className="github-stars-link">
              <a className="github-link" href="https://github.com/reactioncommerce/reaction/stargazers">
                <span className="github-icon"><i className="fa fa-github fa-2x" aria-hidden="true"></i></span>
                <span className="github-star-number"><i className="fa fa-star-o" aria-hidden="true"></i> {this.getStargazersCount()}</span>
              </a>
            </div>
            */}
            <a href="https://docs.reactioncommerce.com" className="reaction-nav-link reaction-nav-link-docs">
              <DocsIcon height={"22px"} />
              Docs
            </a>
            <a className="reaction-btn" href="https://reactioncommerce.com/features#get-a-demo">
              Get a demo
              <div className="btn__arrow"></div>
            </a>
          </div>

          <div className="reaction-nav-group reaction-nav-final">
            <button type="button" className={menuToggleClassName} data-event-action="showMobileNavigation" onClick={this.handleShowMobileNavigation}>
              Menu
            </button>
          </div>
        </nav>
        {this.renderToolbar()}
      </div>
    )
  }
}

export default Header;
