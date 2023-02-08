import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem";
import Heading from "./Heading";
import InputArea from "./InputArea";

function App() {
  const [items, addNewItems] = useState([]);

  function handleSubmit(input) {
    addNewItems((preValue) => {
      return [...preValue, input];
    });
  }

  function deleteItem(id) {
    addNewItems((preValue) => {
      return preValue.filter((toDoitem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <Heading />
      </div>
      <InputArea handleSubmit={handleSubmit} />

      <div>
        <ul>
          {/* {console.log(item.items)} */}
          {items.map((newOne, index) => (
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

//  <div className="form">
//         <input type="text" onChange={handleInput} value={item.newItem} />
//         <button type="submit" onClick={handleSubmit}>
//           <span>Add</span>
//         </button>
//       </div>
