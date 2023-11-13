import React from "react";
import "../styles/loading.css";
function Loading() {
  return (
    <div className="spinner">
      <span>Loading...</span>
      <div className="half-spinner"></div>
    </div>
  );
}

export default Loading;
