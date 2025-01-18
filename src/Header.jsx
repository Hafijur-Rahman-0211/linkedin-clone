import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./css/Header.css";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';  
import {Avatar} from '@mui/material';



const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__logo">
                    <img src="../src/assets/linkedin.png" alt="linkedin logo" />
                </div>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={PeopleAltIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOptions Icon={MessageIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notification" /> 
                <HeaderOptions avatar={Avatar} title="Hafijur Rahman" /> 
            </div>
        </div>
    );
};

export default Header;
