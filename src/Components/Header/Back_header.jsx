import React from "react";
import { NavLink } from "react-router-dom";

const Back_header = ({PageName}) => {
  return (
    <div className=" w-full flex items-center justify-between px-3 bg-blue-100">
      <NavLink to="/" activeClassName="">
      <div className="w-[30px] h-[30px] bg-blue-200 flex justify-center items-center rounded-2">
        <i className=" text-white cursor-pointer fa-solid fa-arrow-left-long" />
        </div>
      </NavLink>
      <p className="fw-bold">{PageName}</p>
      <img
        className=" h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
        src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
        alt=""
      />
    </div>
  );
};

export default Back_header;
