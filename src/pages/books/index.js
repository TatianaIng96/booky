import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import getConfig from "next/config";
import SectionSeparator from "@/components/separator";
import CardBook from "@/components/cardBook";
const { publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.API_URL_STRAPI;

const Book = ({ carouselData }) => {
  return (
    <div>
      <CardBook data={carouselData} />
    </div>
  );
};
export default Book;

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
