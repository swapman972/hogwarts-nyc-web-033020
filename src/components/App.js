import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
// import HelloWorld from "./HelloWorld";
import CardContainer from "./CardContainer";

class App extends Component {
  state = {
    hogs: hogs,
    filter: "none"
  }

  filterHogs = e =>{
    let filteredHogs = [...hogs]
    let newFilter = this.state.filter
    if(e.target.value === "greased"){
      filteredHogs = filteredHogs.filter(hog => hog.greased)
    } else if(e.target.value === "name"){
      filteredHogs = filteredHogs.sort((a,b) => (a.name - b.name))
    } else if(e.target.value === "weight"){
      filteredHogs = filteredHogs.sort((a,b) => (a.weight - b.weight))
    } else { 
      filteredHogs = hogs 
      newFilter = "none"
    }

    this.setState({
      hogs: filteredHogs,
      filter: newFilter
    })
  }
  render() {
    return (
      <div className="App">
        <Nav filter={this.filterHogs}/>
        <CardContainer hogs={this.state.hogs}/>
      </div>
    );
  }
}

export default App;
