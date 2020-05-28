import React from "react";

// https://getbootstrap.com/docs/4.5/components/alerts/

export const Alert = ({ alert }) => {
  return (
    <div
      className={`alert alert-${
        alert.type || "secondary"
      } alert-dismissible fade show`}
      role="alert"
    >
      <strong>Holy guacamole!</strong> {alert.text}
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
