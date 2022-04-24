import React from "react";
import { MenuItem } from "./MenuItem";
import { GoNote } from "react-icons/go";
import { GiWrappedSweet } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";

const entries = [
  { title: "Explore", icon: <GoNote /> },
  { title: "Create", icon: <FaPlus /> },
];
const Left = () => {
  return (
    <div className="left">
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <h5 style={{ textWarp: "nowrap" }}>Yarmy</h5>
        <GiWrappedSweet />
      </div>

      <div className="menu-parent">
        {entries.map((entry) => {
          return <MenuItem title={entry.title} icon={entry.icon} key={entry} />;
        })}
      </div>
    </div>
  );
};

export default Left;
