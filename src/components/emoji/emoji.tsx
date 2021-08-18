import React from "react";

interface Props {
  className?: string;
  label?: string;
  symbol: string;
}

const Emoji = React.memo(({ className, label, symbol }: Props) => {
  return (
    <span
      className={className}
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  );
});

export default Emoji;
