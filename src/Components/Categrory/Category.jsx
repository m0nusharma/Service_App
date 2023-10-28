import React from "react";
import CategoryItems from "../CategoryItems/CategoryItems";

const Category = ({Category}) => {
  return (
    <div className=" p-[20px]">
      <p className=" fs-5 text-gray-700 "> {Category}</p> 
      
    </div>
  );
};

export default Category;
