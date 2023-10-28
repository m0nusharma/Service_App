import React from "react";
import HomeClean from "../../assets/home clean.jpg";

const ServiceBox = ({CleanImg, star, Discount ,Heading,Name,sign,numaric,hour}) => {
  return (
    <div className="mx-[20px] row  bg-blue-100 rounded-3 overflow-hidden">
      <div className="col-5 border p-0">
        <img src={CleanImg}  />
      </div>
      <div className="col-7 border p-3">
        <div className="flex justify-between items-center">
          <i className="fa-solid fa-star text-orange-400">
            <span className="text-dark">{star}</span>
          </i>
          <p>{Discount}</p>
        </div>
        <p className="fw-bold fs-5 text-[#173d71]">{Heading}</p>
        <p className="fs-6 text-[#173d71]">{Name}</p>
        <span className="">
          <span className=" text-[#173d71]">
            {sign}<span className="fs-5 fw-bold">{numaric}</span>{hour}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ServiceBox;
