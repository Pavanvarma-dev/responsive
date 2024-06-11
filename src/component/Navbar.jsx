import React, { Component } from "react";
import Car from "./car.png";
import "./Navbar.css";
import { click } from "@testing-library/user-event/dist/click";

class Navbar extends Component {
  state = { clicked: false };

  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav className="Nav-bar">
          <a>
            <img src={Car} height="150" width="150" />
          </a>
          <div>
            <ul
              id="Nav-bar"
              className={this.state.clicked ? "#Nav-bar active " : "#Nav-bar"}
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleclick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
