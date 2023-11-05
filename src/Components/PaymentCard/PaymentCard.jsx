import React from "react";

const PaymentCard = ({ card, Img, cardOne, id }) => {
  return (
    <div className="border-1  m-3 p-3 rounded-3 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="p-2  w-[50px] border rounded-2">
          <img src={Img} className="w-[50px]" />
        </div>
        <p className="fw-bold fs-4 text-gray-500">{card}</p>
      </div>
      <div>
        <label for={cardOne}></label>
        <input
          type="radio"
          id={id}
          name="fav_language"
          value="cardOne"
          className=""
        />
      </div>
    </div>
  );
};

export default PaymentCard;
