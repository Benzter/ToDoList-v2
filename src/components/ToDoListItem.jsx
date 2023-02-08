import React, { useState } from "react";

function ToDoListItem(props) {
  return (
    <div
      onClick={() => {
        props.handleClick(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default ToDoListItem;
