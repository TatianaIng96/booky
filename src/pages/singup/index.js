import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./singup.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const SignUp = () => {
  const route = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    adress: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("your acoount has been created");
        route.push("./login");
      } else {
        console.error("Error sending data to API");
      }
    } catch (error) {
      console.error("Error sending data to API:", error);
    }
  };

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
        <h3 className={`${style.text} text-center`}>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Adress</label>
          <input
            type="text"
            className="form-control"
            placeholder="Adress"
            name="adress"
            value={formData.adress}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="text-end">
          Already registered <Link href="/login">sign in?</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
