import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "./../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

export default Home;
