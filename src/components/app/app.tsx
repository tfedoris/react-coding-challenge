import InputTextField from "components/input-text-field";
import Button from "components/button";
import Emoji from "components/emoji";
import React from "react";
import "./app.css";

function App() {
  function handleSubmit() {
    console.log("Enter key was pressed!");
  }

  return (
    <div className="App">
      <InputTextField onSubmit={handleSubmit} />
      <br />
      <Button
        onClick={() => {
          console.log("Button was pressed!");
        }}
      >
        <Emoji label={"up arrow"} symbol={"⬆️"} />
      </Button>
    </div>
  );
}

export default App;
