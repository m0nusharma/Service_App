
import React from "react";
import ClickButton from "./ClickButton";

const Heading = ({Name, UserImg,Caption}) => {
  return (
    <div className="p-[20px] bg-[#f1f9fe] flex justify-between ">
      <div>
        <p className=" ">{Name}</p>
        <p className="fs-1 fw-semibold">{Caption}</p>
        <ClickButton/>
      </div>
      <img src={UserImg} className="h-[300px] mix-blend-darken relative top-[50px]"/>
    </div>
  );
};

export default Heading;
