import { useState } from "react";

// api call routes
import { login } from "../Utils/apiroutes";
// components
import Button from "../Components/Buttons/Button";
import Loader from "../Components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
// images
import Logo from "/logo.png";

const Login = () => {
  const [number, setNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: number }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("you have been sent a OTP message successfully");
        setTimeout(() => {
          window.location.href = `/verify?phone=${number}`;
        }, 1500);
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      toast.error("Something went wrong Please try again");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container">
        <form className="form" onSubmit={handleLogin}>
          <img className="logo" src={Logo} alt="admit-kard-logo" />
          <h1 className="title">Welcome Back</h1>
          <p className="sub-title">Please sign in to your account</p>
          <div className="input-container">
            <label htmlFor="phone">Enter Contact Number</label>
            <input
              className="input-element"
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9]{10}"
              title="10 digit no. only"
              placeholder="Enter Your Number"
              minLength="10"
              maxLength="10"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <p className="caution-msg">
            <span>We will send you a one time SMS message.</span>
            <br />
            <span>Charges may apply</span>
          </p>
          {isLoading ? (
            <Loader />
          ) : (
            <Button type="submit">Sign in with OTP</Button>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
