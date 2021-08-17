import React, { ReactElement, useState } from "react";

interface Props {
  onSubmit: () => void;
}

function InputTextField({ onSubmit }: Props): ReactElement {
  const [value, setValue] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      onSubmit();
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
    />
  );
}

export default InputTextField;
