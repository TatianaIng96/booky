import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState, useEffect } from "react";
import CarouselVertical from "@/components/carousel";
import CarouselHorizontal from "@/components/carousel-desktop";
import ParallaxComponent from "@/components/parallax";
import TextCategory from "@/components/textCategory";
import Vision from "@/components/vision";
import Testimonial from "@/components/testimonial";
import CarouselCategory from "@/components/carouselCategory";
import TextItem from "@/components/textItem";
import NavTab from "@/components/navtab";

const Home = ({ data }) => {
  //console.log(data.carousels.data[0].attributes.img.data.attributes.url);
  return (
    <>
      <div>
        <ParallaxComponent />
        <TextCategory />
        <CarouselHorizontal data={data} />
        <Vision />
        <NavTab />
        <TextCategory />
        <CarouselCategory data={data} />
        <TextItem />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: "http://127.0.0.1:1337/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query carousel {
        carousels {
          data {
            attributes {
              name
              autor
              img {
                data {
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      data,
    },
  };
};
