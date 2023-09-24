import React from "react";
import Button from "react-bootstrap/Button";
import { Parallax, Background } from "react-parallax";
import style from "./stile.module.css";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const ParallaxComponent = ({ data }) => {
  const apiUrl = publicRuntimeConfig.API_URL_STRAPI;
  const imageDemo = data.image.data.attributes.url;

  return (
    <div>
      <Parallax bgImage={`${apiUrl}${imageDemo}`} strength={500}>
        <div style={{ height: 500 }}>
          <h1 className={`${style.content}`}>{data.description}</h1>
          <p className={style.parraph}>{data.slogan}</p>
          <div className="row">
            <div className="col">
              <Button className={`${style.buy}`}>
                {data.buttonBuy[0].title}
              </Button>
            </div>
            <div className="col">
              <Button className={`${style.sell}`}>
                {data.buttonSell[0].title}
              </Button>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxComponent;
