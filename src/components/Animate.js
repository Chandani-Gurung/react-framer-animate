import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Konan from "../images/konan.png";
import Sasori from "../images/sasori1.png";
import Deidara from "../images/deidara.png";
import Hidan from "../images/hidan.png";
import Itachi from "../images/itachi.png";
import Orochimaru from "../images/orochimaru.png";
import Pain from "../images/pain.png";
import Tobi from "../images/tobi.png";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
}
`;
{

}
const Center = styled.div`
  position: absolute;
  display: block;
  color: #fff;
  justify-content: center;

  h1 {
    margin-bottom: 0rem;
    font-size: 4rem;
    font-weight: lighter;
    background: -webkit-linear-gradient(#ff0000, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin: 0rem 0rem 10rem 8rem;
    font-size: 1rem;
    line-height: 1.1;
    font-family: monospace;
  }
`;
const Image = styled(motion.img)`
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 150px;
    max-height: 150px:
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${Image}:nth-child(1) {
    top: 200px;
    left: 0px;
  }
  ${Image}:nth-child(2) {
    top: 200px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    top: 200px;
    right: 10px;
  }
  ${Image}:nth-child(4) {
    top: 200px;
    right: -10px;
  }
  ${Image}:nth-child(5) {
    top: 200px;
    right: -10px;
  }
  ${Image}:nth-child(6) {
    top: 200px;
    right: -10px;
  }
  ${Image}:nth-child(7) {
    top: 200px;
    right: -10px;
  }
  ${Image}:nth-child(8) {
    top: 190px;
    right: -10px;
  }
`;
const Animate = () => {
  //this is a variant type which we can call in the actual used place
  //in this case we will be using this variant in p
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section>
      <Center>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Welcome to Akatsuki!
        </motion.h1>
        <motion.p
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        >
          "Now! Let's savor the utmost of suffering together!"
        </motion.p>
      </Center>
      <Top>
        <Image
          src={Sasori}
          alt="sasori"
          whileHover={{ scale: 1.2 }}
          drag={true}
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
        <Image
          src={Konan}
          alt="konan"
          whileHover={{ scale: 1.2 }}
          drag={true}
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
        <Image
          src={Deidara}
          alt="deidara"
          whileHover={{ scale: 1.2 }}
          drag={true}
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
         <Image
          src={Itachi}
          alt="itachi"
          whileHover={{ scale: 1.2 }}
          drag={true}
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
         <Image
          src={Hidan}
          alt="hidan"
          whileHover={{ scale: 1.2 }}
          drag={true}
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
         <Image
          src={Orochimaru}
          alt="orochimaru"
          whileHover={{ scale: 1.2 }}
          drag={true}
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
         <Image
          src={Pain}
          alt="pain"
          whileHover={{ scale: 1.2 }}
          drag={true}
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
         <Image
          src={Tobi}
          alt="tobi"
          whileHover={{ scale: 1.2 }}
          drag={true}
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
      </Top>
    </Section>
  );
};

export default Animate;
