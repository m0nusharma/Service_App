import React from "react";
import {User, Link} from "@nextui-org/react";
import profile from '../../assets/abc.jpg'

export default function UserComponent() {
  return (
    <User   
      name="Junior Garcia"
      description={(
        <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
          Go To twitter
        </Link>
      )}
      avatarProps={{
        src:" https://imgv3.fotor.com/images/slider-image/a-man-holding-a-camera-with-image-filter.jpg"
      }}
    />
  );
}
