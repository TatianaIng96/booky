import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../carousel-desktop/carouselDesk.module.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Card, Button, Row, Col } from "react-bootstrap";

const CardBook = ({ data }) => {
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
  ];
  return (
    <div className="container">
      <Row>
        {cards.map((card, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Card
              style={{ width: "18rem" }}
              className={`${styles.wh} text-white`}
            >
              <Card.Img variant="top" src={card.imageUrl} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardBook;
