import piggy from "../porco.png";
import React from "react";

class Nav extends React.Component {
  render(){
    return (
      <div className="navWrapper">
        <span className="headerText">Hogwarts</span>
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>
        <span className="normalText">A React App for County Fair Hog Fans</span>
        <div>
          <h3>Choose a Filter: </h3>
          <select onChange={this.props.filter}>
            <option value="none"> none</option>
            <option value="greased"> greased </option>
            <option value="name"> By name </option>
            <option value="weight"> By weight </option>
          </select>
        </div>
      </div>
    );
  }
};

export default Nav;
