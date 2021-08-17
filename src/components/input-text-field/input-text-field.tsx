import React, { ReactElement, useState } from "react";
import "./input-text-field.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onSubmit: () => void;
}

function InputTextField({ onSubmit, ...props }: Props): ReactElement {
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
      {...props}
    />
  );
}

export default InputTextField;
