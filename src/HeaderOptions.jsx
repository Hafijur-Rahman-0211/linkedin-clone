import React from "react";
import { Avatar } from "@mui/material";
import "./css/Header.css";

const HeaderOptions = ({ Icon, title, avatar }) => {
  // Destructuring props object
  return (
    <div className="header__options">
      {Icon && <Icon />}
      {avatar && <Avatar name={avatar} />}
      <span>{title}</span>
    </div>
  );
};

export default HeaderOptions;
