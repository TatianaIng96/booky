import React, { Component } from "react";
import Slider from "react-slick";

const VerticalMode = () => {
  const cards = [
    {
      imageUrl:
        "https://i.pinimg.com/originals/f6/be/02/f6be0220fde3afe66ca547566822733d.jpg",
      description: "hola mundo",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/91/5e/d7/915ed7a4a03cea81f5ae7d61a2a5c857.jpg",
      title: "card2",
      description: "hola mundo",
    },
    {
      imageUrl:
        "https://th.bing.com/th/id/OIP.E-fOcL8Nepdx3Gv6wZbgcQHaKe?pid=ImgDet&rs=1",
      title: "card3",
      description: "hola mundo",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {},
    afterChange: function (currentSlide) {},
  };
  return (
    <div>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className={` card`}>
            <img
              alt={card.title}
              src={card.imageUrl}
              className={` card-img-top`}
              width="350" // Ancho deseado de la imagen
              height="400"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VerticalMode;
