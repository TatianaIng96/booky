import React from "react";
import Container from "react-bootstrap/Container";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.API_URL_STRAPI;

const Vision = ({ data }) => {
  const imageDemo = data?.image.data.attributes.url;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src={`${apiUrl}${imageDemo}`}
            alt="Imagen"
            className="img-fluid rounded-circle"
            width="400"
            height="400"
          />
        </div>
        <div className="col-md-8 text-white d-flex flex-column justify-content-center m-12 p12">
          <h1 className="mt-4 justify-content-center text-center ">
            {data?.title}
          </h1>
          <h4 className="mt-4 justify-content-center text-center ">
            {" "}
            {data?.description}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Vision;
