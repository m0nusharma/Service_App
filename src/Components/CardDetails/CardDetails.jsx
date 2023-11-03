import React from "react";

const CardDetails = ({ card, placeholder }) => {
  return (
    <div className="bg-blue-100 rounded-5 p-3 ">
      <div>
        <label for="fname" className="fw-bold py-2 fs-5 text-gray-500">
          {card}
        </label>
        <br />
        <input
          type="number"
          id="fname"
          name="fname"
          placeholder={placeholder}
          className="rounded-2 px-4 py-3 w-[100%] border-none"
        />
      </div> <br/>
      <div className="flex justify-between ">
        <div className="px-1">
          <label for="fname" className="fw-bold py-2 fs-5 text-gray-500">
            CVV
          </label>{" "}
          <br />
          <input
            type="number"
            id="fname"
            name="fname"
            placeholder="CVV"
            className="rounded-2 px-4 py-3 border-none w-[100%] "
          />
        </div>
        <div className="px-1">
          <label for="fname" className="fw-bold py-2 fs-5 text-gray-500">
            Last Date
          </label>{" "}
          <br />
          <input
            type="number"
            id="fname"
            name="fname"
            placeholder="Date Of Expire"
            className="rounded-2 px-4 py-3  border-none"
          />
        </div>
        </div>
        <button className="btn btn-primary items-center my-3 w-100 p-2">Submit</button>
      <br />
      <br />
      <br />
    </div>
  );
};

export default CardDetails;
