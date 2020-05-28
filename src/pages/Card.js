import React from "react";
import { Link } from "react-router-dom";

export const Card = () => (
  <div className="card">
    <img src={""} alt={""} className="card-img-top" />
    <div className="card-body">
      <h4 className="card-title">React JS</h4>
      <Link to={"/profile/user"} className="btn btn-primary">
        Открыть
      </Link>
    </div>
  </div>
);
