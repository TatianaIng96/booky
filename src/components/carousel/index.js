import React from "react";
import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./carousel.module.css";

const CarouselVertical = ({}) => {
  const cards = [
    {
      imageUrl:
        "https://statics.cdn1.buscalibre.com/portada-minibanner-feria-lib-im-col-png",
      description: "hola mundo",
    },
    {
      imageUrl:
        "https://storage.googleapis.com/ln-archivos/banner/extralarge/6ad25884-9179-eb25-5cdd-64f10ac47ef2_imagen_web.png",
      title: "card2",
      description: "hola mundo",
    },
    {
      imageUrl:
        "https://storage.googleapis.com/ln-archivos/banner/extralarge/2e877970-1d80-0c43-6ff3-650a03f5d6f6_imagen_web.jpg",
      title: "card3",
      description: "hola mundo",
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Cambiar de tarjeta cada 3 segundos

    return () => {
      clearInterval(interval);
    };
  }, [cards]);

  return (
    <Carousel
      className={`border-bottom border-5  ${styles.top}`}
      activeIndex={index}
      onSelect={() => {}}
    >
      {cards.map((card, cardIndex) => (
        <Carousel.Item key={cardIndex}>
          <div key={index} className={`${styles.wh}`}>
            <img
              alt={card.title}
              src={card.imageUrl}
              className="card-img-top"
              width="1500"
              height="300"
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselVertical;
