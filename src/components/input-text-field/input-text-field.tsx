import React, { ReactElement, useState } from "react";

interface Props extends React.HTMLProps<HTMLInputElement> {
  onSubmit: () => void;
}

function InputTextField(props: Props): ReactElement {
  const [value, setValue] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      props.onSubmit();
      clearInput();
    }
  }

  function clearInput() {
    setValue("");
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
}

export default InputTextField;
