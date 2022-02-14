import React, { useEffect } from "react";

const NotFound = (props) => {
  useEffect(() => {
    document.querySelector(".header").style.display = "none";
  }, []);

  return (
    <div className="NotFound">
      <h1 style={{ color: "#000" }}>404 - Page Not Found</h1>
    </div>
  );
};

export default NotFound;
