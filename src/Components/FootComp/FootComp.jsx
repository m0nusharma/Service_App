import React from "react";

const FootComp = () => {
  return (
    <div className="px-[20px] flex justify-between vw-100 items-center">
      <i className="fa-solid fa-house text-gray-900 fs-3"></i>
      <i className="fa-solid fa-bag-shopping text-gray-500 fs-3"></i>
      <div className="h-[60px] w-[60px] bg-orange-400 rounded-full relative bottom-[25px] shadow-lg flex justify-center items-center">
        <i className="fa-solid fa-qrcode fs-3 text-white"></i>
      </div>
      <i className="fa-brands fa-facebook-messenger text-gray-500 fs-3"></i>
      <i className="fa-solid fa-bell text-gray-500 fs-3"></i>
    </div>
  );
};

export default FootComp;
