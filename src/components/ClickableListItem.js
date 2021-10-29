import React from "react";
import "../styles/ClickableListItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

class ClickableListItem extends React.Component {
  icon = (isChecked) => {
    return isChecked ? (
      <FontAwesomeIcon icon={faCheckSquare} />
    ) : (
      <FontAwesomeIcon icon={faSquare} />
    );
  };

  render() {
    return (
      <div
        className={[
          "clickable-list-item",
          this.props.checked ? "clicked" : "not-clicked",
        ].join(" ")}
        onClick={() => this.props.clickHandler(this.props.index)}
      >
        <div>{this.icon(this.props.checked)}</div>
        <label>{this.props.label}</label>
      </div>
    );
  }
}

export default ClickableListItem;
