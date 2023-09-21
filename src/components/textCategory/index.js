import React from "react";
import Container from "react-bootstrap/Container";
import style from "./text.module.css";

const TextCategory = () => {
  return (
    <section className={` ${style.text} py-3 text-white`}>
      <Container>
        <p>
          Explore thousands of books across all genres, from timeless classics
          to the latest releases
        </p>

        <h1> The Best Books, at Your Fingertips !</h1>
      </Container>
    </section>
  );
};

export default TextCategory;
