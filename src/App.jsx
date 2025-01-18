import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
const App = () => {
  return (
    <div className="app_wrapper">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widget/>
      </div>
    </div>
  );
};

export default App;
