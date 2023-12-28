import React, { useContext, useEffect } from "react";
import myContext from "../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

function ProductCard() {
  const context = useContext(myContext);
  const {
    mode,
    product,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
  } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Item added to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <section
      className={`text-${mode === "dark" ? "white" : "gray-600"} body-font`}
    >
      <div className="container px-4 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-indigo-500">
            Explore Our Latest Collection
          </h1>
          <div className="h-1 w-20 bg-indigo-600 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {product
            .filter((obj) => obj.title.toLowerCase().includes(searchkey))
            .filter((obj) => obj.category.toLowerCase().includes(filterType))
            .filter((obj) => obj.price.includes(filterPrice))
            .slice(0, 8)
            .map((item, index) => {
              const { title, price, imageUrl, id } = item;
              return (
                <div key={index} className="p-4 md:w-1/4">
                  <div
                    className={`h-full border-2 hover:shadow-md transition-shadow duration-300 ease-in-out border-${
                      mode === "dark" ? "indigo-700" : "indigo-200"
                    } rounded-lg overflow-hidden`}
                  >
                    <div
                      onClick={() =>
                        (window.location.href = `/productinfo/${id}`)
                      }
                      className="cursor-pointer overflow-hidden relative"
                    >
                      <img
                        className="rounded-lg w-full h-80 object-cover object-center transform hover:scale-105 transition-transform duration-300"
                        src={imageUrl}
                        alt="product"
                      />
                    </div>
                    <div className="p-5 border-t-2">
                      <h1
                        className={`title-font text-lg font-medium mb-3 text-${
                          mode === "dark" ? "white" : "gray-900"
                        }`}
                      >
                        {title}
                      </h1>
                      <p
                        className={`leading-relaxed mb-3 text-${
                          mode === "dark" ? "gray-300" : "gray-600"
                        }`}
                      >
                        ₹{price}
                      </p>
                      <div className="flex justify-center">
                        <button
                          type="button"
                          onClick={() => addCart(item)}
                          className={`focus:outline-none text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2`}
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
  );
}

export default ProductCard;
