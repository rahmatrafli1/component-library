import React, { useEffect } from "react";
import classnames from "classnames";
import {
  BsCheckCircle,
  BsExclamationCircle,
  BsXCircle,
  BsInfoCircle,
} from "react-icons/bs";

const icons = {
  success: BsCheckCircle,
  warning: BsExclamationCircle,
  error: BsXCircle,
  information: BsInfoCircle,
};

export default function Toast({
  variant = "information",
  title,
  children,
  duration,
  onClose,
  className,
}) {
  const Icon = icons[variant];

  useEffect(() => {
    if (!duration || !onClose) return;
    const id = setTimeout(onClose, duration);
    return () => clearTimeout(id);
  }, [duration, onClose]);

  return (
    <div
      className={classnames("toast", `toast-${variant}`, className)}
      role="alert"
    >
      <Icon className="toast-icon" />
      <div>
        <div className="toast-title">{title}</div>
        <div className="toast-text">{children}</div>
      </div>
    </div>
  );
}
