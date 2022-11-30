import React from "react";
import Header from "../components/Header";
import styles from "./../styles/Home.module.css";
import { UseAuth } from "../hooks/UseAuth";
import { listProps } from "../types";
import List from "../components/List";

const Home = ({ list }: listProps) => {
  const { authCheck, token } = UseAuth();
  authCheck();

  if (token) {
    return (
      <div className={styles.container}>
        <Header />
        <List list={list} />
      </div>
    );
  }
};

export default Home;

export async function getServerSideProps(context: any) {
  const response = await fetch("http://localhost:4000/products", {
    headers: { Authentication: context.req.headers.Authentication },
  });
  const data = await response.json();
  return {
    props: {
      list: data,
    },
  };
}
