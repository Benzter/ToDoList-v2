import React, { useState } from "react";
import ListItem from "./ListItem";
import Heading from "./Heading";

function App() {
  const [item, AddNewItem] = useState({ newItem: "", items: ["Hello"] });

  function handleInput(event) {
    const eventInput = event.target.value;
    AddNewItem((preValue) => {
      return {
        ...preValue,
        newItem: eventInput,
      };
    });
  }

  function handleSubmit() {
    item.items.push(item.newItem);
    AddNewItem((preValue) => {
      return {
        ...preValue,
      };
    });

    item.newItem = "";
  }

  return (
    <div className="container">
      <div className="heading">
        <Heading />
      </div>
      <div className="form">
        <input type="text" onChange={handleInput} value={item.newItem} />
        <button type="submit" onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* {console.log(item.items)} */}
          {item.items.map((newOne) => (
            <ListItem item={newOne} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
