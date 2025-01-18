import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "./css/Feed.css";
import Post from "./Post";
import { db, serverTimestamp } from "./firebase";
import { collection, addDoc } from "firebase/firestore"; // Import required functions

const Feed = () => {
  const [input, setInput] = useState("");

  const submitPost = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      await addDoc(collection(db, "posts"), {
        name: "Hafijur Rahman",
        description: "Software Engineer",
        message: input,
        photoUrl: "",
        timestamp: serverTimestamp(),
      });
      setInput("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="feed">
      <div className="feed__input">
        <div className="feed__form">
          <Avatar src="" />
          <form onSubmit={submitPost}>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <input type="submit" />
          </form>
        </div>

        <div className="feed__options">
          <div className="option">
            <InsertPhotoIcon style={{ color: "#70b5f9" }} />
            <span>Photo</span>
          </div>
          <div className="option">
            <YouTubeIcon style={{ color: "#7fc15e" }} />
            <span>Video</span>
          </div>
          <div className="option">
            <CalendarTodayIcon style={{ color: "#e7a33e" }} />
            <span>Event</span>
          </div>
          <div className="option">
            <AssignmentIcon style={{ color: "#fc9295" }} />
            <span>Write Article</span>
          </div>
        </div>
      </div>
      <Post
        name="Hafijur Rahman"
        description="This is a test"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis eaque eum consequuntur neque, a tenetur magnam dignissimos est! Iure dolor officia voluptatum!"
        photoURL=""
      />
    </div>
  );
};

export default Feed;
