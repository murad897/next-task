import { createContext, ReactNode } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ContextInterface } from "types";
import { ContextDefaultValues } from "../constants";
import { Props } from "next/script";

export const NavigationContext = createContext<ContextInterface>(ContextDefaultValues);

export const NavigationProvider = ({ children }: Props) => {
  const [offset, setOffset] = useState(1);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [paginationActive, setPaginationActive] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/products?_page=${offset}&_limit=${limit}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, [offset]);

  const prevHandler = () => {
    if (offset > 1) {
      setPaginationActive(true);
      setOffset((prev) => prev - 1);
    }
  };

  const nextHandler = () => {
    if (data.length === 5) {
      setOffset((prev) => prev + 1);
      setPaginationActive(true);
    }
  };

  return <NavigationContext.Provider value={{ data, paginationActive, prevHandler, nextHandler }}>{children}</NavigationContext.Provider>;
};

export default NavigationContext;
