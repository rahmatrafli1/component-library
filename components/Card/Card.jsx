import React from "react";
import classnames from "classnames";

export default function Card({ icon, title, children, className }) {
  return (
    <div className={classnames("card", className)}>
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{children}</p>
    </div>
  );
}
