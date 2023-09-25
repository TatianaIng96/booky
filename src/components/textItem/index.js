import React from "react";
import styles from "./item.module.css";

const TextItem = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src="/function.png"
            alt="Imagen"
            className="img-fluid rounded-circle"
            height="500"
            width="500"
          />
        </div>
        <div className="col-md-8 text-white d-flex flex-column justify-content-center m-12 p12">
          <h2 className={styles.title}>{data.title}</h2>
          <p> {data.description}</p>
          <ul>
            {data.functions.data.map((element, index) => {
              return <li key={index}>{element.attributes.item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextItem;
