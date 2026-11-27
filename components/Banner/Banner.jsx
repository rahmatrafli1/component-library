import React from "react";
import classnames from "classnames";
import {
  BsCheckCircleFill,
  BsExclamationTriangleFill,
  BsXCircleFill,
  BsInfoCircleFill,
} from "react-icons/bs";

const icons = {
  success: BsCheckCircleFill,
  warning: BsExclamationTriangleFill,
  error: BsXCircleFill,
  neutral: BsInfoCircleFill,
};

export default function Banner({
  variant = "neutral",
  title,
  children,
  className,
}) {
  const Icon = icons[variant];
  return (
    <div
      className={classnames(
        "banner",
        `banner-${variant}`,
        { "banner-multiline": children },
        className,
      )}
    >
      <Icon className="banner-icon" />
      <div>
        <div className="banner-title">{title}</div>
        {children && <p className="banner-text">{children}</p>}
      </div>
    </div>
  );
}
