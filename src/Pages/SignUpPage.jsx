import Header from "../components/Header";
import signupImg from "../assets/logSign-Img/log-sign.png";
import { Link } from "react-router-dom";
import googleIcon from "../assets/logSign-Img/googleIcon.png";
import Footer from "../components/Footer.jsx";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting user:", user);
  
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Signup successful:", response.data);

      navigate("/")
      // You can redirect or save token here
    } catch (error) {
      if (error.response) {
        console.error("Signup failed:", error.response.data);
      } else {
        console.error("Network or server error:", error.message);
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="my-16 flex justify-between items-center">
        <img src={signupImg} alt="" />
        <div className="flex flex-col mr-60 gap-6">
          <h1 className="text-4xl">Create an account</h1>
          <p className="text-xl">Enter your details below</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5.5">
            <input
              className="w-full border-b border-gray-200  py-2 focus:outline-none focus:border-gray-400"
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={handleInput}
            />
            <input
              className="w-full border-b border-gray-200  py-2 focus:outline-none focus:border-gray-400"
              type="text"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleInput}
            />
            <input
              className="w-full border-b border-gray-200  py-2 focus:outline-none focus:border-gray-400"
              type="text"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleInput}
            />
            <div>
              <button className="w-full bg-[#DB4444] text-xl text-white py-2.5 px-4 rounded-md hover:bg-[#c33c3c] transition-colors duration-200">
                Create Account
              </button>
              <Link
                to="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ASKV5MidMW5lr8QTlrbEnEIvnzIkVuuwesBQ1QTVPG51Z5whcxSLV_FVerhlkx79OgW7CCTHRDy4Gw&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-735461823%3A1746188977339762"
                className="w-full my-3 bg-white text-black py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors duration-200 text-center block flex items-center justify-center gap-2"
              >
                <img src={googleIcon} alt="Google" className="h-5 w-5" />
                Sign up with Google
              </Link>
            </div>
            <div className="flex gap-3.5 justify-center">
              <p className="text-gray-700">Already have an account?</p>
              <Link to="/login">Log in</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignUpPage;
