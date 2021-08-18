import React, { ReactElement } from "react";
import useLocalStorage from "components/hooks";
import List from "components/list";
import InputTextField from "components/input-text-field";
import Button from "components/button";
import Emoji from "components/emoji";
import { binaryInsert } from "binary-insert";
import "./ordered-list.css";

interface Props {
  className: string;
}

function OrderedList({ className }: Props): ReactElement {
  const [listItems, setListItems] = useLocalStorage("list", []);
  const [sortAscending, setSortAscending] = useLocalStorage(
    "sortAscending",
    true
  );

  function listItemSortComparator(a: string, b: string) {
    // if sortAscending is false, multiply the result of the comparator by -1 to sort in descending order
    const sortCoefficient = sortAscending ? 1 : -1;
    return sortCoefficient * a.localeCompare(b);
  }

  function addItem(entry: string) {
    // prevent an item from being added if it already exists in the list or if the entry is empty
    if (entry === "" || listItems.includes(entry)) {
      return;
    }

    const updatedListItems = binaryInsert(
      [...listItems],
      entry,
      listItemSortComparator
    );

    setListItems(updatedListItems);
  }

  function toggleSort() {
    setSortAscending(!sortAscending);
    setListItems(listItems.reverse());
  }

  function clearList() {
    setListItems([]);
  }

  return (
    <div className={className}>
      <InputTextField
        className={"monospaced ordered-list-input"}
        onEnterKeyDown={addItem}
      />
      <Button
        className={"emoji-button"}
        onClick={clearList}
        aria-label="clear list"
      >
        <Emoji label={"clear"} symbol={"🆑"} />
      </Button>
      <Button className={"emoji-button"} onClick={toggleSort}>
        <Emoji
          label={sortAscending ? "down arrow" : "up arrow"}
          symbol={sortAscending ? "⬇️" : "⬆️"}
        />
      </Button>
      <div className={"monospaced list"}>
        <List items={listItems}></List>
      </div>
    </div>
  );
}

export default OrderedList;
