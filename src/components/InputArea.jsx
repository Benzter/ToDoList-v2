import React, { useState } from "react";

function InputArea(props) {
  const [input, setInputText] = useState("");

  function handleInput(event) {
    const eventInput = event.target.value;
    setInputText(eventInput);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleInput} value={input} />
      <button
        type="submit"
        onClick={() => {
          props.handleSubmit(input);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
