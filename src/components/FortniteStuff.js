import React from "react";

import locations from "../assets/fortniteLocations.json";
import "../styles/FortniteStuff.css";

class FortniteStuff extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      selection: "",
      displayList: true
    };
  }

  componentDidMount() {
    console.log("component did mount");
  }

  randomNumber = () => {
    var randomNumber = Math.random();
    var randomized = Math.round(randomNumber * locations.length);

    this.setState({
      number: randomized,
      selection: locations[randomized]
    });

    console.log("Starting loop");

    var interval = setInterval(function() {
      console.log("Let's repeat for 2 seconds...");
    }, 100);

    setTimeout(function() {
      clearInterval(interval);

      console.log("Finished loop");
    }, 2000);
  };

  testFunc = () => {
    console.log("test");
  };

  resetRandom = () => {
    this.setState({
      number: 0,
      selection: ""
    });
  };

  toggleList = () => {
    this.setState({
      displayList: this.state.displayList ? false : true
    });
  };

  render() {
    return (
      <div className="App-body">
        <h2>Fortnite</h2>
        <div className="fortnite-container">
          <div>
            <button
              type="button"
              onClick={this.randomNumber}
              className="buttonStyle"
            >
              randomize
            </button>

            <div className="output">{this.state.selection}</div>

            <button
              type="button"
              onClick={this.resetRandom}
              className="buttonStyle"
            >
              reset button
            </button>
          </div>

          <div>
            <button
              type="button"
              onClick={this.toggleList}
              className="buttonStyle"
            >
              {this.state.displayList ? "hide list" : "show list"}
            </button>

            <div style={{ display: this.state.displayList ? "block" : "none" }}>
              {locations.map((item, index) => {
                return (
                  <div key={index} className="listItem">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FortniteStuff;
