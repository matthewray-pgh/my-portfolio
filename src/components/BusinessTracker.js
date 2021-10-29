import React from "react";

import "../styles/BusinessTracker.css";
import checklist from "../assets/checklist.json";

import ClickableListItem from "../components/ClickableListItem.js";

class BusinessTracker extends React.Component {
  constructor(props) {
    super(props);

    this.initializeListItems();

    this.state = {
      currentDate: Date.now(),
      list: this.initializeListItems(),
    };
  }

  initializeListItems = () => {
    checklist.forEach(function (group) {
      group.items.forEach(function (item) {
        //var isChecked = Math.round(Math.random()) === 1 ? true : false;
        //item.checked = isChecked;
        item.checked = false;
      });
    });

    return checklist;
  };

  formatDate = (unformattedDate) => {
    var date = new Date(unformattedDate);

    var mm = ("0" + (date.getMonth() + 1)).slice(-2);
    var dd = ("0" + date.getDay()).slice(-2);
    var yy = date.getFullYear();

    var formattedDate = mm + "/" + dd + "/" + yy;

    return formattedDate;
  };

  onClickHandler = (clickedIndex) => {
    var tempList = this.state.list;
    tempList.forEach(function (group) {
      group.items.forEach(function (item) {
        if (item.index === clickedIndex) {
          item.checked = !item.checked;
        }
      });
    });

    this.setState({
      list: tempList,
    });
  };

  getCount = (index) => {
    var count = 0;
    this.state.list[index].items.forEach(function (item) {
      count = item.checked ? count + 1 : count;
    });
    return count;
  };

  render() {
    return (
      <div className="App-body">
        <h2>Success Club Tracker</h2>
        <div className="date-heading">
          {this.formatDate(this.state.currentDate)}
        </div>

        <div className="checklist-container">
          {this.state.list.map((data, index) => {
            return (
              <div key={index}>
                <div className="sub-heading">
                  {data.heading} ( {this.getCount(index)} / {data.items.length})
                </div>
                <div>
                  {data.items.map((d, i) => {
                    return (
                      <ClickableListItem
                        key={i}
                        index={d.index}
                        checked={d.checked}
                        label={d.label}
                        clickHandler={this.onClickHandler}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BusinessTracker;
