import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import style from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={`${style.bgfooter} text-white py-4`}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-white">
            <h5>Contact</h5>
            <p>Adress: 123 Calle Principal, Ciudad</p>
            <p>Email: booky@email.com</p>
            <p>Tel: (123) 456-7890</p>
          </div>
          <div className="col-md-3">
            <h5>Util links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/books">Book on sale</a>
              </li>
              <li>
                <a href="/books"> Buyer Book</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Util links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/books">Book on sale</a>
              </li>
              <li>
                <a href="/books"> Buyer Book</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Util links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/books">Book on sale</a>
              </li>
              <li>
                <a href="/books"> Buyer Book</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2023 Booky. All rights reserved.</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
