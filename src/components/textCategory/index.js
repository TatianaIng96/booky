import React from "react";
import Container from "react-bootstrap/Container";
import style from "./text.module.css";

const TextCategory = ({ data }) => {
  return (
    <section className={` ${style.text} py-3 text-white`}>
      <Container>
        <p>{data?.descriptonOne}</p>

        <h1>{data?.descriptionTwo}</h1>
      </Container>
    </section>
  );
};

export default TextCategory;
