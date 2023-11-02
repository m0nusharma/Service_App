import React from "react";
import Icon from "../../assets/Group 1.png";

const Profile_header = () => {
  return (
    <div className="flex w-full items-center justify-between px-3 ">
      <img className="inline-block h-5 w-5  cursor-pointer" src={Icon} alt="" />
      <img
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
        src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
        alt=""
      />
    </div>
  );
};

export default Profile_header;
