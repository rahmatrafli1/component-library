import React from "react";
import classnames from "classnames";

export default function Testimonial({
  image,
  logo,
  quote,
  name,
  role,
  className,
}) {
  if (image) {
    return (
      <figure className={classnames("testimonial testimonial-pic", className)}>
        <img className="testimonial-img" src={image} alt={name} />
        <div className="testimonial-body">
          <span className="testimonial-mark">“</span>
          <blockquote>{quote}</blockquote>
          <figcaption>
            <strong>{name}</strong>
            <span>{role}</span>
          </figcaption>
        </div>
      </figure>
    );
  }
  return (
    <figure className={classnames("testimonial testimonial-simple", className)}>
      {logo && <div className="testimonial-logo">{logo}</div>}
      <blockquote>“{quote}”</blockquote>
      <figcaption>
        <strong>{name}</strong>
        <span className="testimonial-divider">/</span>
        <span>{role}</span>
      </figcaption>
    </figure>
  );
}
