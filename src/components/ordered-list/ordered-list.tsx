import React, { ReactElement } from "react";
import useLocalStorage from "components/hooks";
import InputTextField from "components/input-text-field";
import Button from "components/button";
import Emoji from "components/emoji";
import "./ordered-list.css";

interface Props {}

function OrderedList(props: Props): ReactElement {
  const [list, setList] = useLocalStorage("list", []);
  const [sortAscending, setSortAscending] = React.useState(true);

  function handleSubmitEntry(entry: string) {
    setList([...list, entry]);
  }

  function handleClearList() {
    setList([]);
  }

  return (
    <div>
      <InputTextField onEnterKeyDown={handleSubmitEntry} />
      <br />
      <Button
        onClick={() => {
          console.log("Button was pressed!");
        }}
        aria-label="sort ascending"
      >
        <Emoji label={"up arrow"} symbol={"⬆️"} />
      </Button>
      <Button
        onClick={() => {
          console.log("Button was pressed!");
        }}
        aria-label="sort descending"
      >
        <Emoji label={"down arrow"} symbol={"⬇️"} />
      </Button>
      <Button onClick={handleClearList} aria-label="clear list">
        <Emoji label={"clear"} symbol={"🆑"} />
      </Button>
    </div>
  );
}

export default OrderedList;
