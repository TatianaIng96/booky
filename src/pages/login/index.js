import React, { useState } from "react";
import style from "./login.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Step 2: Create a function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(" http://localhost:8080/auth/local/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const { token, profile } = await response.json();
        Cookies.set(
          "userSession",
          JSON.stringify({
            token,
            name: profile.firstName,
            email: profile.email,
          })
        );
        // const userSession = Cookies.get("userSession");
        // const sessionData = userSession ? JSON.parse(userSession) : null;
        // console.log("Usuario autenticado:", sessionData);
        router.push("/books");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  // Step 4: Use the onChange event to update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={`${style.secction}`}>
      <form className={` ${style.sing} container`} onSubmit={handleSubmit}>
        <h3 className={`${style.text} text-center`}>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={formData.email} // Step 4: Bind input value to state
            onChange={handleInputChange} // Step 4: Handle input change
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={formData.password} // Step 4: Bind input value to state
            onChange={handleInputChange} // Step 4: Handle input change
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-end">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
