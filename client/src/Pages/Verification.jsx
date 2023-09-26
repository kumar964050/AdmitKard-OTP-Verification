import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
// api call routes
import { login, verify } from "../Utils/apiroutes";
// components
import Button from "../Components/Buttons/Button";
import Loader from "../Components/Loader/Loader";
// images
import Logo from "/undraw_confirmed_81ex.png";

const Verification = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const phone = searchParams.get("phone");
  const [isLoading, setIsLoading] = useState(false);
  const [OTP, setOTP] = useState("");

  if (phone === null) {
    window.location.href = "/login";
  }
  const number = parseInt(JSON.parse(phone));

  const handleVerification = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(verify, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: number,
          OTP: parseInt(OTP),
        }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("data", JSON.stringify(data));
        toast.success("verified successfully");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      toast.error("something went wrong please try again");
    } finally {
      setIsLoading(false);
    }
  };
  const resendOTP = async (e) => {
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
        <form className="form" onSubmit={handleVerification}>
          <img className="v-logo" src={Logo} alt="admit-kard-logo" />
          <h1 className="mini-title">Please verify Mobile number</h1>
          <p className="mini-sub-title">
            An OTP is sent to <span className="number">+91 {number}</span>
            <br />
          </p>
          <a href="/" className="link-text">
            Change the Phone Number
          </a>
          <div className="input-container mt-5">
            <input
              className="input-element"
              type="tel"
              id="otp"
              name="otp"
              pattern="[0-9]{4}"
              title="4 digit opt"
              placeholder="Enter otp"
              required
              minLength="4"
              maxLength="4"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
            />
          </div>
          <p className="caution-msg">
            Didn’t receive the code?{" "}
            <a type="submit" onClick={resendOTP} className="link-text">
              Resend
            </a>
          </p>
          {isLoading ? <Loader /> : <Button type="submit">Verify</Button>}
        </form>
      </div>
    </>
  );
};

export default Verification;
