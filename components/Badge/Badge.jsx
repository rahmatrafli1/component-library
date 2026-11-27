import React from "react";
import classnames from "classnames";

export default function Badge({
  children,
  color = "gray",
  shape = "square",
  className,
}) {
  return (
    <span
      className={classnames(
        "badge",
        `badge-${color}`,
        `badge-${shape}`,
        className,
      )}
    >
      {children}
    </span>
  );
}
