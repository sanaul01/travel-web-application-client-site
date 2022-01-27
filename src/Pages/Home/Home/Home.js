import React from "react";
import AllBlogs from "../AllBlogs/AllBlogs";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <AllBlogs></AllBlogs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
