// import Link from "next/link";
// import { Parallax } from "react-scroll-parallax";
// import "bootstrap/dist/css/bootstrap.min.css";
// import style from "./stile.module.css";

// export default () => (
//   <>
//     <Link href="/">
//       <h1>Homepage</h1>
//     </Link>

//     <h1>Homepage</h1>

//     <div className={style.content}>
//       <Parallax offsetYMin={200} offsetYMax={1500}>
//         <h2>Moving A</h2>
//       </Parallax>
//       <Parallax offsetYMin={-500} offsetYMax={2000}>
//         <h2>Moving C</h2>
//       </Parallax>
//     </div>

//     <style jsx>
//       {`
//         .content {
//           margin-top: 300px;
//           border: 2px solid grey;
//           height: 1500px;
//         }
//       `}
//     </style>
//   </>
// );
import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import style from "./stile.module.css";

const imageDemo =
  "https://images.unsplash.com/photo-1652479194106-ab372173cc12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const ParallaxComponent = () => (
  <div>
    <Parallax bgImage={imageDemo} strength={500}>
      <div style={{ height: 500 }}>
        <h1 className={style.content}>Welcome to Booky</h1>
        <p className={style.parraph}>
          Este sitio web está pensado para que tengas la mejor experiencia
        </p>
      </div>
    </Parallax>
  </div>
);

export default ParallaxComponent;
