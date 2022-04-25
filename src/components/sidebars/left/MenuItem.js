import React from "react";
import { NavLink } from "react-router-dom";
import "./menuitems.css";

export const MenuItem = ({ title, icon }) => {
  const link = title.toLowerCase();
  return (
    <NavLink
      to={`/${link}`}
      className="menu-item"
      activeClassName="menu-item-active"
    >
      {icon}
      <h4>{title}</h4>
    </NavLink>
  );
};
