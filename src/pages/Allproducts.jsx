import React, { useContext, useEffect, useState } from "react";
import Filter from "../components/Filter";
import Layout from "../components/Layout";
import myContext from "../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Allproducts() {
  const context = useContext(myContext);
  const { mode, product, searchkey, filterType } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Item added to cart!");
  };

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = product
      .filter((obj) =>
        obj.title.toLowerCase().includes(searchkey.toLowerCase())
      )
      .filter((obj) => filterType === "All" || obj.category === filterType);

    setFilteredProducts(filtered);
  }, [searchkey, filterType, product]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Filter />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            {filteredProducts.map((item, index) => {
              const { title, price, imageUrl, id } = item;
              return (
                <div
                  onClick={() => (window.location.href = `/productinfo/${id}`)}
                  key={index}
                  className="p-4 md:w-1/4 drop-shadow-md"
                >
                  <div
                    className="h-full border-2 hover:shadow-md transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
                    style={{
                      backgroundColor: mode === "dark" ? "#282c34" : "#ffffff",
                      color: mode === "dark" ? "#ffffff" : "#1a202c",
                    }}
                  >
                    <div className="flex justify-center cursor-pointer">
                      <img
                        className="rounded-lg w-full h-80 object-cover object-center transform hover:scale-105 transition-transform duration-300"
                        src={imageUrl}
                        alt="product"
                      />
                    </div>
                    <div className="p-5 border-t-2">
                      <h1
                        className="title-font text-lg font-medium text-gray-900 mb-3"
                        style={{
                          color: mode === "dark" ? "#ffffff" : "#1a202c",
                        }}
                      >
                        {title}
                      </h1>
                      <p
                        className="leading-relaxed mb-3"
                        style={{
                          color: mode === "dark" ? "#ffffff" : "#4a5568",
                        }}
                      >
                        ₹{price}
                      </p>
                      <div className="flex justify-center">
                        <button
                          type="button"
                          onClick={() => addCart(item)}
                          className="focus:outline-none text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Allproducts;
