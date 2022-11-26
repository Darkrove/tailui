import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

import Navigation from "../components/Navbar.component";
import Sidebar from "../components/Sidebar.component";
import Space from "../components/Space.component"

const Home = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
    >
      <Sidebar />
      <Navigation />
      <Space />
    </motion.main>
  );
};

export default Home;
