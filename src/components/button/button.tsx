import React, { ReactElement } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

function Button({ onClick, ...props }: Props): ReactElement {
  return (
    <button onClick={onClick} {...props}>
      {props.children}
    </button>
  );
}

export default Button;
