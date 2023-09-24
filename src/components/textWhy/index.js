import React from "react";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.API_URL_STRAPI;

const TextWhy = ({ text, image }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`${apiUrl}${image}`}
            alt="Imagen"
            className="img-fluid rounded-circle mt-4 mb-4"
            height="400"
            width="400"
          />
        </div>
        <div className="col-md-6 text-white d-flex flex-column justify-content-center m-12 p12">
          <p> {text}</p>
        </div>
      </div>
    </div>
  );
};

export default TextWhy;
