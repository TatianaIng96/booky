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
import getConfig from "next/config";
import SectionSeparator from "@/components/separator";
const { publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.API_URL_STRAPI;

const Home = ({ carouselData, bookyData }) => {
  //console.log(bookyData.booky.data.attributes.header);

  const headerData = bookyData.booky.data.attributes.header;
  const textData = bookyData.booky.data.attributes.text;
  const textTwoData = bookyData.booky.data.attributes.textTwo;
  const visionData = bookyData.booky.data.attributes.vision;
  const whyData = bookyData.booky.data.attributes.whyBooky;
  const functionalData = bookyData.booky.data.attributes.functional;
  const testimonialData = bookyData.booky.data.attributes.testimonial;
  return (
    <>
      <div>
        <ParallaxComponent data={headerData} />
        <TextCategory data={textData[0]} />
        <CarouselHorizontal data={carouselData} />
        <SectionSeparator />
        <Vision data={visionData} />
        <SectionSeparator />
        <NavTab data={whyData} />
        <SectionSeparator />
        <TextCategory data={textTwoData[0]} />
        <CarouselCategory data={carouselData} />
        <SectionSeparator />
        <TextItem data={functionalData} />
        <SectionSeparator />
        <Testimonial data={testimonialData} />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: `${apiUrl}/graphql`,
    cache: new InMemoryCache(),
  });

  const carouselQuery = gql`
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
  `;

  const bookyQuery = gql`
    query booky {
      booky {
        data {
          attributes {
            header {
              slogan
              description
              buttonBuy {
                title
              }
              buttonSell {
                title
              }
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            text {
              descriptonOne
              descriptionTwo
            }
            vision {
              title
              description
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            whyBooky {
              title
              benefits {
                data {
                  attributes {
                    title
                    description
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
            textTwo {
              descriptonOne
              descriptionTwo
            }
            functional {
              title
              description
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
              functions {
                data {
                  attributes {
                    item
                  }
                }
              }
            }
            testimonial {
              title
              description
            }
          }
        }
      }
    }
  `;

  const carouselData = await client.query({ query: carouselQuery });
  const bookyData = await client.query({ query: bookyQuery });

  return {
    props: {
      carouselData: carouselData.data,
      bookyData: bookyData.data,
    },
  };
};
