import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import Login from "./Login"; // Assuming you have a Login component
import { selectCurrentUser } from "./feature/userSlice";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(selectCurrentUser);
  console.log(user);
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app_wrapper">
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
