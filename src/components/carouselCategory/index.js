import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./category.module.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const CarouselCategory = ({ data }) => {
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
    {
      imageUrl:
        "https://3.bp.blogspot.com/-e4rYTSwn8Fg/UYGHHTzFX4I/AAAAAAABwKk/CoymthQWNKs/s1600/hermoso-atardecer-amazing-sunset.jpg",
      title: "card4",
      description: "hola mundo",
    },
    {
      imageUrl:
        "https://3.bp.blogspot.com/-e4rYTSwn8Fg/UYGHHTzFX4I/AAAAAAABwKk/CoymthQWNKs/s1600/hermoso-atardecer-amazing-sunset.jpg",
      title: "card5",
      description: "hola mundo",
    },
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
    {
      imageUrl:
        "https://3.bp.blogspot.com/-e4rYTSwn8Fg/UYGHHTzFX4I/AAAAAAABwKk/CoymthQWNKs/s1600/hermoso-atardecer-amazing-sunset.jpg",
      title: "card4",
      description: "hola mundo",
    },
    {
      imageUrl:
        "https://3.bp.blogspot.com/-e4rYTSwn8Fg/UYGHHTzFX4I/AAAAAAABwKk/CoymthQWNKs/s1600/hermoso-atardecer-amazing-sunset.jpg",
      title: "card5",
      description: "hola mundo",
    },
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
  ];
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`${styles.pd} content`}>
      <Slider {...settings}>
        {data.carousels.data.map((card, index) => (
          <div key={index} className={`${styles.wh} card`}>
            <img
              alt={card.attributes.name}
              src={`http://127.0.0.1:1337${card.attributes.img.data.attributes.url}`}
              width="100"
              height="300"
              className={`${styles.radius} card-img-top`}
            />
            {/* <div className="card-body">
              <h4 className="card-title text-white">{card.attributes.name}</h4>
              <p className="card-text text-white">
                {card.attributes.name.autor}
              </p>
              <button className={`${styles.buy} btn text-white`}>
                Buy Now
              </button>
            </div> */}
          </div>
        ))}
      </Slider>
      <div className={styles.explore}>
        <Button className="text-white">
          {" "}
          Explore more books <ArrowRight />{" "}
        </Button>
      </div>
    </div>
  );
};
export default CarouselCategory;
