import React from "react";
import { render } from "react-dom";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Parallax, Background } from "react-parallax";
import style from "./stile.module.css";

const imageDemo =
  "https://images.unsplash.com/photo-1652479194106-ab372173cc12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const ParallaxComponent = () => (
  <div>
    <Parallax bgImage={imageDemo} strength={500}>
      <div style={{ height: 500 }}>
        <h1 className={style.content}>
          Welcome to Booky, your ultimate literary destination! On our platform,
          you will find a world of literary possibilities waiting for you.
        </h1>
        <Button className={`${style.sinup}`}>Sign Up</Button>
        <p className={style.parraph}>
          The literary adventure awaits you in Booky!
        </p>
      </div>
    </Parallax>
  </div>
);

export default ParallaxComponent;
