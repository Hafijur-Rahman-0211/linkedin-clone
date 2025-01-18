import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import "./css/Widget.css";

const Widget = () => {
    return (
        <div className="widget">
            <div className="widget__top">
                <div className="widget__header">
                    <h4>LinkdIn News</h4>
                    <InfoIcon />
                </div>
                <div className="widget__body">
                    <ul className="widget__options">
                        <li>
                            <h4>Slaying Job Search Fees</h4>
                            <p>6days ago * 4,55 readers</p>
                        </li>
                        <li>
                            <h4>Slaying Job Search Fees</h4>
                            <p>6days ago * 4,55 readers</p>
                        </li>
                        <li>
                            <h4>Slaying Job Search Fees</h4>
                            <p>6days ago * 4,55 readers</p>
                        </li>
                        <li>
                            <h4>Slaying Job Search Fees</h4>
                            <p>6days ago * 4,55 readers</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="widget__bottom">
                <div className="widget__header">
                    <h4>Lorem ipsum dolor sit.</h4>
                    <InfoIcon />
                </div>
            <div className="widget__body">
                <ul className="widget__options">
                    <li>
                        <h4>Lorem ipsum dolor sit.</h4>
                        <p>Lorem, ipsum.</p>
                    </li>
                    <li>
                        <h4>Lorem ipsum dolor sit.</h4>
                        <p>Lorem, ipsum.</p>
                    </li>
                    <li>
                        <h4>Lorem ipsum dolor sit.</h4>
                        <p>Lorem, ipsum.</p>
                    </li>
                    <li>
                        <h4>Lorem ipsum dolor sit.</h4>
                        <p>Lorem, ipsum.</p>
                    </li>
                    <li>
                        <h4>Lorem ipsum dolor sit.</h4>
                        <p>Lorem, ipsum.</p>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Widget;
