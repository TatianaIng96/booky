import React from "react";
import { render } from "react-dom";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Parallax, Background } from "react-parallax";
import style from "./stile.module.css";

const imageDemo = "/parallax.jpg";
const ParallaxComponent = () => (
  <div>
    <Parallax bgImage={imageDemo} strength={500}>
      <div style={{ height: 500 }}>
        <h1 className={`${style.content}`}>
          Welcome to Booky, your ultimate literary destination! On our platform,
          you will find a world of literary possibilities waiting for you.
        </h1>
        <p className={style.parraph}>
          The literary adventure awaits you in Booky!
        </p>
        <div className="row">
          <div className="col">
            <Button className={`${style.buy}`}>Buy Book</Button>
          </div>
          <div className="col">
            <Button className={`${style.sell}`}>Sell Book</Button>
          </div>
        </div>
      </div>
    </Parallax>
  </div>
);

export default ParallaxComponent;
