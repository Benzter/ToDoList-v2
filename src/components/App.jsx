import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem";
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

  function deleteItem(id) {
    AddNewItem((preValue) => {
      const newArr = preValue.items.filter((toDeleteItem, index) => {
        return id !== index;
      });
      return {
        newItem: item.newItem,
        items: newArr,
      };

      // return preValue;
    });
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
          {item.items.map((newOne, index) => (
            <ToDoListItem
              item={newOne}
              handleClick={deleteItem}
              key={index}
              id={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
