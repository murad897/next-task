import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "../components/Header";
import styles from "./../styles/Home.module.css";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const [token, setToken] = useState(false);
  useLayoutEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("name")) {
      router.push("/");
      setToken(true);
    } else {
      router.push("/login");
      setToken(false);
    }
  }, []);
  return <div className={styles.container}>{token && <Header />}</div>;
};

export default Home;
