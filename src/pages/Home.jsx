import React, { useContext } from "react";
import Layout from "../components/Layout";
import myContext from "../context/myContext";
import HeroSection from "../components/HeroSection";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <ProductCard />
      {/* <div className="flex justify-center -mt-10 mb-4">
        <Link to={"/allproducts"}>
          <button className=" bg-gray-300 px-5 py-2 rounded-xl">
            See more
          </button>
        </Link>
      </div> */}
    </Layout>
  );
}

export default Home;
