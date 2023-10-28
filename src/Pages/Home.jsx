import { useState } from "react";
import Layout from "../Components/Layout/Layout";
import Profile_header from "../Components/Header/Profile_header";
import Heading from "../Components/Heading/Heading";
import Category from "../Components/Categrory/Category";
import CategoryItems from "../Components/CategoryItems/CategoryItems";
import vacume from "../../src/assets/vacume.jpg";
import ServiceBox from "../Components/ServiceBox/ServiceBox";
import HomeClean from "../assets/home clean.jpg";
import kitchen from  "../assets/kitchen.jpg"
import HomeTuition from '../assets/tuition.jpg'
import BedRoom from '../assets/bedroom.jpg'

const Home = () => {
  return (
    <Layout header={<Profile_header />} bgColor="bg-[#f1f9fe]">
      <Heading
        Name="Hii! Monu Sharma"
        Caption="What Service do you Need?"
        UserImg={vacume}
      />
      <Category Category="Category" />
      <div className="flex justify-between px-[20px]">
        <CategoryItems
          Images="https://img.freepik.com/free-vector/cleaner-with-cleaning-products-housekeeping-service_18591-52057.jpg?size=338&ext=jpg&ga=GA1.1.386372595.1698364800&semt=ais"
          ItemName="Cleaning"
        />
        <CategoryItems
          Images="https://img.freepik.com/premium-vector/worker-uniform-with-tool-case-repair-service-design_261524-1728.jpg"
          ItemName="Repairing"
        />
        <CategoryItems
          Images="https://as1.ftcdn.net/v2/jpg/04/84/63/94/1000_F_484639449_Id7MW013W3sSEpKyXoDJF0vyjApS31KO.jpg"
          ItemName="Laundry"
        />
        <CategoryItems
          Images="https://previews.123rf.com/images/dvoriankin/dvoriankin1608/dvoriankin160800015/64360676-illustration-of-a-smiling-house-painter-painting-wall-with-paint-roller.jpg"
          ItemName="Painting"
        />
      </div>
      <Category Category="Recomended" />
      <div className="my-2">
        <ServiceBox
          CleanImg={HomeClean}
          star="4.1"
          Discount="Off 30%"
          Heading="Home Clean"
          Name="By Avishek Sharma"
          sign="$"
          numaric="24"
          hour="/hr"
        />{" "}
        <br />
        <ServiceBox
          CleanImg={kitchen}
          star="4.4"
          Discount="Off 30%"
          Heading="Kitchen Clean"
          Name="By Sahas"
          sign="$"
          numaric="24"
          hour="/hr"
        />{" "}
        <br />
        <ServiceBox
          CleanImg="https://www.cleaningiscaring.org/wpd/wp-content/uploads/2022/09/babysitting-600x600.jpg"
          star="4.7"
          Discount="Off 19%"
          Heading="Baby Sitting"
          Name="By Khushi"
          sign="$"
          numaric="30"
          hour="/hr"
        />{" "}
        <br />
        <ServiceBox
          CleanImg={HomeTuition}
          star="4.9"
          Discount="Off 15%"
          Heading="Home Tuition"
          Name="By Sushil Sharma"
          sign="$"
          numaric="50"
          hour="/hr"
        />{" "}
        <br />
        <ServiceBox
          CleanImg={BedRoom}
          star="4.5"
          Discount="Off 40%"
          Heading="Room Clean"
          Name="By Aditya"
          sign="$"
          numaric="30"
          hour="/hr"
        />{" "}
        <br />
        <br />
        <br />
        <br />
      </div>
      
    </Layout>
  );
};

export default Home;
