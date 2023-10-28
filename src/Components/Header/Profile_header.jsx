import React from 'react'
import Icon from "../../assets/Group 1.png"

const Profile_header = () => {
    return (
        <div className='flex w-full items-center justify-between px-3 '>
        <img
           className="inline-block h-5 w-5  cursor-pointer"
           src={Icon}
           alt=""
       />
             <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white cursor-pointer"
                src="https://pps.whatsapp.net/v/t61.24694-24/376114491_283892497876021_5784001453005632426_n.jpg?ccb=11-4&oh=01_AdRGF7n7OjkPWc3Yh8ew2tzkF3qmIHx6jFU-OzFF7y8ADg&oe=6548ACD6&_nc_sid=000000&_nc_cat=104"
                alt=""
            />
        </div>
    )
}

export default Profile_header