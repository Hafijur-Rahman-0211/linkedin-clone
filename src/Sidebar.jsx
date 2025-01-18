import React from "react";
import "./css/Sidebar.css";
import { Avatar } from "@mui/material";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__profile">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8VISOuStRYgoGpmHLIVj_uH4sZskXSjoQW2gTkyKJfoC3oIuKO3t6VQz4qmurNnuqKs&usqp=CAU"
                    alt=""
                />
                <div className="profile__details">
                    <Avatar />
                    <h4>Hafijur Rahman</h4>
                    <p>Web Developer</p>
                </div>
                <div className="profile__stats">
                    <span>Who viewed your profile</span>
                    <span className="stats__number">20</span>
                </div>
                <div className="profile__stats">
                    <span>
                        Connection <br />
                        <b>Grow your Network</b>
                    </span>
                    <span className="stats__number">150</span>
                </div>
            </div>

            <div className="sidebar__recent">
                <p>Recent</p>
                <p className="hash"><span>#</span>branding</p>
                <p className="hash"><span>#</span>marketing</p>
                <p className="hash"><span>#</span>webdesign</p>
                <p className="hash"><span>#</span>programming</p>
                <p className="hash"><span>#</span>reactjs</p>
                <p className="hash"><span>#</span>reduxtoolkit</p>
            </div>
        </div>
    );
};

export default Sidebar;
