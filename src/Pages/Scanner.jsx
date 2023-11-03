import React from "react";
import Layout from "../Components/Layout/Layout";
import Profile_header from "../Components/Header/Profile_header";
import Back_header from "../Components/Header/Back_header";
import PaymentCard from "../Components/PaymentCard/PaymentCard";
import CardDetails from "../Components/CardDetails/CardDetails";

const Scanner = () => {
  return (
    <Layout
      header={<Back_header PageName="Payment Method" />}
      bgColor="bg-blue-100"
    >
      <PaymentCard
        Img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png"
        cardOne="CardOne"
        id="CardOne"
        card="Cradit Card"
      />
      <PaymentCard
        Img="https://www.bigtricks.in/wp-content/uploads/2016/09/unnamed-2-2-150x150.png"
        cardOne="CardOne"
        id="CardOne"
        card="Phone Pay"
      />
      <PaymentCard
        Img="https://play-lh.googleusercontent.com/HArtbyi53u0jnqhnnxkQnMx9dHOERNcprZyKnInd2nrfM7Wd9ivMNTiz7IJP6-mSpwk"
        cardOne="CardOne"
        id="CardOne"
        card="Google pay"
      />
      <PaymentCard
        Img="https://ibsintelligence.com/wp-content/uploads/2020/01/AmazonPayLogo-543.jpg"
        cardOne="CardOne"
        id="CardOne"
        card="Amazon Pay"
      />
      <PaymentCard
        Img="https://play-lh.googleusercontent.com/B5cNBA15IxjCT-8UTXEWgiPcGkJ1C07iHKwm2Hbs8xR3PnJvZ0swTag3abdC_Fj5OfnP"
        cardOne="CardOne"
        id="CardOne"
        card="BHIM UPI"
      />

      <CardDetails card="Card Number" placeholder=" Enter Card Number" />
    </Layout>
  );
};

export default Scanner;
