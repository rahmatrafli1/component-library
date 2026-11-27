import React from "react";
import classnames from "classnames";
import { BsInbox, BsXLg } from "react-icons/bs";

export default function Tooltip({
  title,
  children,
  color = "gray",
  variant = "bold",
  icon = <BsInbox />,
  onClose,
  className,
}) {
  return (
    <div
      className={classnames(
        "tooltip",
        `tooltip-${color}-${variant}`,
        className,
      )}
      role="tooltip"
    >
      <span className="tooltip-icon">{icon}</span>
      <div className="tooltip-content">
        <div className="tooltip-title">{title}</div>
        <p className="tooltip-text">{children}</p>
      </div>
      <button className="tooltip-close" onClick={onClose} aria-label="Close">
        <BsXLg />
      </button>
    </div>
  );
}
