import { createContext, ReactNode } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ContextInterface } from "types";
import { Props } from "next/script";
import api from "../axios";

const ContextDefaultValues: ContextInterface = {
  data: [],
  paginationActive: false,
  next: () => {},
  prev: () => {},
};

export const NavigationContext = createContext<ContextInterface>(ContextDefaultValues);

export const NavigationProvider = ({ children }: Props) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [paginationActive, setPaginationActive] = useState(false);

  useEffect(() => {
    axios
      .get(`${api.defaults.baseURL}/products?_page=${page}&_limit=${limit}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, [page]);

  const prev = () => {
    if (page > 1) {
      setPaginationActive(true);
      setPage((prev) => prev - 1);
    }
  };

  const next = () => {
    if (data.length === 5) {
      setPage((prev) => prev + 1);
      setPaginationActive(true);
    }
  };

  return <NavigationContext.Provider value={{ data, paginationActive, next, prev }}>{children}</NavigationContext.Provider>;
};

export default NavigationContext;
