import React from "react";
import NameDescription from "../components/NameDescription";
import NameSideBar from "../components/NameSideBar";

const Homepage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <NameSideBar />
      <NameDescription />
    </div>
  );
};

export default Homepage;
