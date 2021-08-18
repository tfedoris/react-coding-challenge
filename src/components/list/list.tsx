import React, { ReactElement } from "react";

interface Props {
  items: Array<any>;
}

function list({ items }: Props): ReactElement {
  const listItems = items.map((item) => <li key={item.toString()}>{item}</li>);

  return <ul>{listItems}</ul>;
}

export default list;
