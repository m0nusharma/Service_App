import React from "react";
import Layout from "../Components/Layout/Layout";
import Profile_header from "../Components/Header/Profile_header";
import Back_header from "../Components/Header/Back_header";
import NotificationCard from "../Components/NotificationCard/NotificationCard";

const Notification = () => {
  return (
    <Layout
      header={<Back_header PageName="Notification" />}
      bgColor="bg-blue-100"
    >
      <h1 className="fs-1 p-3">Today</h1>
      <NotificationCard
        Img="https://assets-global.website-files.com/600ece313e616e6fe12df5d3/651096ac4a38cce2b8b94040_20230924T0753-41318618-3d17-4dca-a05d-c055f1d124fe.png"
        Name="Kate Young"
        Text="Commited on your photo"
        num="2"
      />
      <NotificationCard
        Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_4GuKBU04TvHoUNjA1dSfjrTkBoltgjw0hFFFvnyQP8NfHiC34SGfe2vcIzfz7JAVtk&usqp=CAU"
        Name="Brandon Newamn"
        Text="Commited on your photo"
        num="9"
      />
      <NotificationCard
        Img="https://assets-global.website-files.com/600ece313e616e6fe12df5d3/651095bc9ad576ff855dd067_20230924T0752-a13a5270-d89c-4ce7-ae42-98eadef39ea5.png"
        Name="Dave Wood "
        Text="Commited on your photo"
        num="5"
      />
      <NotificationCard
        Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yAAffZKH7FrywSxBtV0CFRc1ZrOLT80qRYyn2VZ4bc5UeFu0uFaTwkAVw1iQ4rQC4EI&usqp=CAU"
        Name="Anna lee"
        Text="Commited on your photo"
        num="4"
      />
      <h1 className="fs-1 p-3">Last Week</h1>
      <NotificationCard
        Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQD6U_uHR5ytNPmfsEkqRt_U6f9U9kMQ2wI1_Vq21X9jVN1CsEdIzNwKXttAMNrm_xclU&usqp=CAU"
        Name="Justi bolt"
        Text="Commited on your photo"
        num="6"
      />{" "}
      <NotificationCard
        Img="https://www.freecodecamp.org/news/content/images/size/w60/2022/01/IMG_1763.jpg"
        Name="Rahul raj"
        Text="Commited on your photo"
        num="3"
      />{" "}
      <NotificationCard
        Img="https://portal.bilardo.gov.tr/assets/pages/media/profile/profile_user.jpg"
        Name="Elaya mani"
        Text="Commited on your photo"
        num="2"
      />{" "}
      <NotificationCard
        Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNH4yV8JgBa6G2XMCXzDJB6zP2edr2_VYPEp3QIkGLaUbswx_K5agwBAGP-zAowzoerw&usqp=CAU"
        Name="laadi Young"
        Text="Commited on your photo"
        num="7"
      />
      <br/>
      <br/>
      <br/>
      <br/>
    </Layout>
  );
};

export default Notification;
