import React from "react";
import { Avatar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import "./css/Post.css";

const Post = ({ name, description, message, photoUrl }) => {
    return (
        <div className="posts">
            <div className="post__header">
                <div className="post__headerLeft">
                    <Avatar src={photoUrl} />
                    <div className="post_profile_details">
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <MoreVertIcon />
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__footer">
                <div className="post__footer__option">
                    <ThumbUpIcon />
                    <span>Like</span>
                </div>
                <div className="post__footer__option">
                    <CommentIcon />
                    <span>Comment</span>
                </div>
                <div className="post__footer__option">
                    <ShareIcon />
                    <span>Share</span>
                </div>
                <div className="post__footer__option">
                    <SendIcon />
                    <span>Send</span>
                </div>
            </div>
        </div>
    );
};

export default Post;
