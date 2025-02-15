import React from "react";
import Layout from "../Components/Layout/Layout";
import Profile_header from "../Components/Header/Profile_header";
import Back_header from "../Components/Header/Back_header";
import MsgSearch from "../Components/MsgSearch/MsgSearch";
import MsgBox from "../Components/MsgBox/MsgBox";

const Massege = () => {
  return (
    <Layout header={<Back_header PageName="Massege" />} bgColor="bg-blue-100">
      <MsgSearch />
      <MsgBox
        Img="https://www.surtecsuzuki.com.mx/facturas/img/user1.jpg"
        Name="Sonu BHaiya"
        Text="Theek hai"
        num="1"
        view="today"
      />
      <MsgBox
        Img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        Name="NEEED"
        Text="Done ho jaiga"
        num="3"
        view="5min"
      />
      <MsgBox
        Img="https://portal.bilardo.gov.tr/assets/pages/media/users/avatar80_7.jpg"
        Name="Ritik Mishra"
        Text="Theek hai"
        num="1"
        view="today"
      />
      <MsgBox
        Img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        Name="Sahas"
        Text="tum dekh aao"
        num="1"
        view="today"
      />
      <MsgBox
        Img="https://lenstax.com/auth/app-assets/images/profile/user-uploads/user-04.jpg"
        Name="Kanika Choudhary"
        Text="byee"
        num="2"
        view="friday"
      />
      <MsgBox
        Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxzJjzxPGbFTU8NQjZxGxRSltwfSvRd2x9NxUr5XG872AL99VfW8z4poKC8DevT7gE3k&usqp=CAU"
        Name="Mohit Singh"
        Text="mill yrr"
        num="1"
        view="today"
      />
      <MsgBox
        Img="https://i.imgur.com/JFHjdNr.jpg"
        Name="Aditya"
        Text="nehi ja raha kahi"
        num="1"
        vi       ew="today"
      />
      <MsgBox
        Img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
        Name="Pankaj Yadav"
        Text="Theek hai"
        num="1"
        view="today"
      />
      <MsgBox
        Img="https://portal.bilardo.gov.tr/assets/pages/media/profile/profile_user.jpg"
        Name="Sushil Bhaiya"
        Text="ji bhaiya karta hu"
        num="2"
        view="yesterday"
      />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default Massege;
