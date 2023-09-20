import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import CarouselVertical from "@/components/carousel";
import ParallaxComponent from "@/components/parallax";

const Home = ({ data }) => {
  //console.log(data.carousels.data[0].attributes.img.data.attributes.url);
  return (
    <>
      <div>
        <ParallaxComponent />
        <CarouselVertical />
      </div>
    </>
  );
};

export default Home;

// export const getStaticProps = async () => {
//   const client = new ApolloClient({
//     uri: "http://127.0.0.1:1337/graphql",
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({
//     query: gql`
//       query carousel {
//         carousels {
//           data {
//             attributes {
//               name
//               autor
//               img {
//                 data {
//                   attributes {
//                     url
//                     width
//                     height
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//   });
//   //console.log(data.carousels.data[0].attributes.img.data.attributes.url);
//   return {
//     props: {
//       data,
//     },
//   };
// };

// export const getStaticProps = async () => {
//   const client = new ApolloClient({
//     uri: "https://rickandmortyapi.com/graphql",
//     cache: new InMemoryCache(),
//   });

//   const { data } = await client.query({
//     query: gql`
//       query AllCharacters {
//         characters {
//           results {
//             id
//             name
//             status
//             image
//             species
//             origin {
//               name
//             }
//             location {
//               name
//             }
//           }
//         }
//       }
//     `,
//   });

//   console.log(data.characters.results[0]);

//   return {
//     props: {
//       //launches: []
//     },
//   };
// };
