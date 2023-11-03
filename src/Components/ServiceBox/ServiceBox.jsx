import React from "react";


const ServiceBox = ({CleanImg, star, Discount ,Heading,Name,sign,numaric,hour}) => {
  return (
    <div className="mx-[20px] row  bg-blue-100 rounded-3 overflow-hidden">
      <div className="col-4 border p-0">
        <img src={CleanImg} className="" />
      </div>
      <div className="col-8 border px-3 pt-1 ">
        <div className="flex justify-between items-center">
          <i className="fa-solid fa-star text-orange-400">
            <span className="text-dark">{star}</span>
          </i>
          <p>{Discount}</p>
        </div>
        <p className="fw-bold fs-6 text-[#173d71]">{Heading}</p>
        <p className="fs-6 text-[#173d71]">{Name}</p>
        <span className="">
          <span className=" text-[#173d71]">
            {sign}<span className="fs-6 fw-bold">{numaric}</span>{hour}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ServiceBox;
