import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" pt-[60px] overflow-auto  ">
      {children}
    </div>
  );
};

export default Container;
