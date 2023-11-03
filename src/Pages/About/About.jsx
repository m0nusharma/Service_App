import { useState } from "react";
import Profile_header from "../../Components/Header/Profile_header";
import Layout from "../../Components/Layout/Layout";
import Back_header from "../../Components/Header/Back_header";
import Aboutcard from "../../Components/AboutCard/Aboutcard";

const About = () => {
  return (
    <Layout header={<Back_header PageName="About" />} bgColor="bg-blue-100">
      <Aboutcard
        Img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        about=" A full stack developer role is best if you prefer to work on general projects in various fields."
        Point="4.2"
        name="Monu Sharma"
        profassion="Full stack Devloper"
      />
      <Aboutcard
        Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxYdSS1HZql4AL1VbEg57-hKZt6zXwnW5tvBykyHIluMTQP-vnx61EQO6D7qD81iObCk&usqp=CAU"
        about="Orthopedic physicians (sometimes also called orthopaedic physicians) are doctors who specialize in injuries of the musculoskeletal system"
        Point="4.9"
        name="Sonu Sharma"
        profassion="Ortho Doctor"
      />
      <Aboutcard
        Img="https://media.licdn.com/dms/image/C4D03AQHk17MQXBeSAw/profile-displayphoto-shrink_800_800/0/1646826743327?e=2147483647&v=beta&t=EuIC-hw_Cy5YGDNQPWC66L_76IdAOB11woGCZs-7ujo"
        about="Person who may contact include Development such as good designer"
        Point="4.6"
        name="Avishek Sharma"
        profassion="Front end developer"
      />
      <Aboutcard
        Img="https://sandbox.elireview.com/wp-content/uploads/2016/12/reed-profile-square.jpg"
        about="Very passionate Developer. very strong about developing or a strong belief in self."
        Point="4.8"
        name="Kanika"
        profassion="Full stack Devloper"
      />
      <Aboutcard
        Img="https://www.microsoft.com/en-us/research/uploads/prod/2018/01/profile_square.jpg"
        about="the branch of computer science that deals with the design, development, testing, and maintenance of software applications"
        Point="4.9"
        name="Sushil Sharma"
        profassion="Solfware Engneer"
      />
      <Aboutcard
        Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkDCKNwDGNiRdm06_IZpv18OWI4oZA_yxtruRFw8LkFnBYSy5_YWuGrHYT9b1CAMTUy9c&usqp=CAU"
        about="An App Developer is a software engineer who's involved in the conceptualization, design, and development of software for phones, smart watches, tablets and more."
        Point="4.2"
        name="Mohit Singh"
        profassion="APP Devloper"
      />
      <br/>
      <br/>
      <br/>
    </Layout>
  );
};

export default About;
