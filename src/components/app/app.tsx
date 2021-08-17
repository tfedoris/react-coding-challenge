import InputTextField from "components/input-text-field";
import React from "react";
import "./app.css";

function App() {
  function handleSubmit() {
    console.log("Enter key was pressed!");
  }

  return (
    <div className="App">
      <InputTextField onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
