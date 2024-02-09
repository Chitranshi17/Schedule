import React from "react";
import LeftNav from "./Components/LeftNav";



const App = () => {
  return (
    <>
      <div className="main-container d-flex align-items-center justify-content-center">
        <div className="mid-container container-fluid">
          <LeftNav/> 
        </div>
      </div>
    </>
  );
};

export default App;
