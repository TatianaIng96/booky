import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-dark">
            <h5>Contacto</h5>
            <p>Dirección: 123 Calle Principal, Ciudad</p>
            <p>Email: ejemplo@email.com</p>
            <p>Teléfono: (123) 456-7890</p>
          </div>
          <div className="col-md-6">
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Libros en Venta</a>
              </li>
              <li>
                <a href="#">Libros en Compra</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2023 Tu Nombre. Todos los derechos reservados.</p>
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
