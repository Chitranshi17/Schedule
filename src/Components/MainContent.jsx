import React from "react";
import ListGroup from "./ListGroup";
import Form from "./Form";

const MainContent = () => {
  return (
    <>
      {/* Form Container */}
      <div className="TodoContainer  d-flex align-items-center justify-content-center flex-column">
        <Form />
        <ListGroup />
      </div>
    </>
  );
};

export default MainContent;
