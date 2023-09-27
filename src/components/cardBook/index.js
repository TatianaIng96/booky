import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./card.module.css";
import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Cart } from "react-bootstrap-icons";

const CardBook = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/books");

        if (!response.ok) {
          throw new Error("La petición no fue exitosa");
        }

        const responseData = await response.json();
        setData(responseData.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al realizar la petición GET:", error);
      }
    };
    fetchData();
  }, []);

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

  if (loading) {
    return <div> Loading...</div>;
  }
  return (
    <div className="container">
      <Row>
        {data.map((card) => (
          <Col key={card._id} sm={12} md={6} lg={4} xl={3}>
            <div className={`${styles.wh} card`}>
              <Card
                style={{ width: "18rem" }}
                className={`${styles.wh} text-white`}
              >
                <img
                  alt={card.title}
                  src={card.image}
                  width="248" // Ancho deseado de la imagen
                  height="260"
                  className={`${styles.radius} card-img-top`}
                />
                <Card.Body>
                  <h6>{card.title}</h6>
                  <p> PRICE: {card.price}</p>
                  <div className="col">
                    <Button variant="primary">Details</Button>
                    <Button variant="primary">
                      <Cart />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardBook;
