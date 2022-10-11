import React from "react";
import './wrapper.scss';

const Wrapper = ({ children, checked }) => {
  return (
    <div className={checked  ? "wrapper___theme" : "wrapper"}>
      {children}
    </div>
  );
};

export default Wrapper;
