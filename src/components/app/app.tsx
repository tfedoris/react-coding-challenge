import React from "react";
import "./app.css";
import OrderedList from "components/ordered-list";

function App() {
  return (
    <div id="container">
      <OrderedList className={"ordered-list"} />
    </div>
  );
}

export default App;
