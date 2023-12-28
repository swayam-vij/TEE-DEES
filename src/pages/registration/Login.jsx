import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

function Login() {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(loading);
    }
  };

  const mainColor = "text-white";
  const bgColor = "bg-black";
  const inputBgColor = "bg-gray-800";
  const buttonBgColor = "bg-white";
  const buttonTextColor = "text-black";

  return (
    <div className={`flex justify-center items-center h-screen bg-white`}>
      <div className="box-container bg-black">
        {loading && <Loader />}
        <div className={`px-10 py-10 rounded-xl ${bgColor}`}>
          <div className="">
            <h1 className={`text-center ${mainColor} text-xl mb-4 font-bold`}>
              Login
            </h1>
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className={`mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg ${inputBgColor} ${mainColor} placeholder:text-gray-200 outline-none`}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg ${inputBgColor} ${mainColor} placeholder:text-gray-200 outline-none`}
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center mb-3">
            <button
              onClick={login}
              className="bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg"
            >
              Login
            </button>
          </div>
          <div>
            <h2 className="text-white">
              Don't have an account{" "}
              <Link className="text-red-500 font-bold" to={"/signup"}>
                SignUp
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
