import React from "react";
import { NavLink } from "react-router-dom";

const FootComp = () => {
  return (
    <div className="px-[20px] flex justify-between vw-100 items-center">
      <NavLink to="/" activeClassName="">
        <i className="fa-solid fa-house text-gray-500 fs-3"></i>
      </NavLink>

      <NavLink to="/about" activeClassName="">
        <i className="fa-solid fa-bag-shopping text-gray-500 fs-3" />
      </NavLink>

      <NavLink to="/scanner" activeClassName="">
        <div className="h-[60px] w-[60px] bg-orange-400 rounded-full relative bottom-[25px] shadow-lg flex justify-center items-center">
        <i className="fa-solid fa-layer-group text-white text-2xl"></i>
        </div>
      </NavLink>
      <NavLink to="/massege" activeClassName="">
        <i className="fa-brands fa-facebook-messenger text-gray-500 fs-3"></i>
      </NavLink>

      <NavLink to="/notification" activeClassName="">
      <i className="fa-solid fa-qrcode fs-3 text-gray-500 fs-3"></i>
      </NavLink>
    </div>
  );
};

export default FootComp;
