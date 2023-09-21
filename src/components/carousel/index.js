import React from "react";
import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./carousel.module.css";

const CarouselVertical = ({}) => {
  const cards = [
    {
      imageUrl:
        "https://th.bing.com/th/id/R.d9c2773b1c241854571d1bdad23af4a5?rik=Au1AINhvAWZmRg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-QMGOoEe7ORo%2fUictQ1DRsJI%2fAAAAAAAB4ow%2fQ3F1jbR67fo%2fs1600%2fcerca-del-cielo-y-los-planetas-im%c3%a1genes-de-fantas%c3%ada-close-to-sky-landscape-1920x1200-wallpaper-.jpg&ehk=7N3VXXUF7ESxVu%2fJqYAG2lwflwMsjAwn7hdRxBGsJms%3d&risl=&pid=ImgRaw&r=0",
      title: "card1",
      description: "hola mundo",
    },
    {
      imageUrl:
        "https://3.bp.blogspot.com/-e4rYTSwn8Fg/UYGHHTzFX4I/AAAAAAABwKk/CoymthQWNKs/s1600/hermoso-atardecer-amazing-sunset.jpg",
      title: "card2",
      description: "hola mundo",
    },
    {
      imageUrl:
        "https://th.bing.com/th/id/R.70659ea0f4fdba2e09598ae4f4349a41?rik=Sj2GGGrViYn99g&riu=http%3a%2f%2f3.bp.blogspot.com%2f-AsLdW2Mcjig%2fUtL71YiY2zI%2fAAAAAAAAY5g%2fo2zmYBKKWqY%2fs1600%2f360681.jpg&ehk=SxPqRVy8AI4%2burvA%2frZIog6jAXfklQdDsJBpKqkWGuA%3d&risl=&pid=ImgRaw&r=0",
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
    <div className={`${styles.bg} col-md-12 bg-dark`}>
      <div className={styles["half-screen-carousel"]}>
        <Carousel activeIndex={index} onSelect={() => {}}>
          {cards.map((card, cardIndex) => (
            <Carousel.Item key={cardIndex}>
              <div key={index} className={`${styles.wh} card`}>
                <img
                  alt={card.title}
                  src={card.imageUrl}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h2 className="card-title text-white">{card.title}</h2>
                  <p className="card-text text-white">{card.description}</p>
                  <button className={`${styles.buy} btn text-white`}>
                    Buy Now
                  </button>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselVertical;
