import React, { ReactElement, useState } from "react";
import "./input-text-field.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onEnterKeyDown: (value: string) => void;
}

function InputTextField({ onEnterKeyDown, ...props }: Props): ReactElement {
  const [value, setValue] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      onEnterKeyDown(value);
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
