import { createContext } from "react";
import { useState, useEffect } from "react";
import { ContextInterface } from "types";
import { Props } from "next/script";
import api from "../axios";

const ContextDefaultValues: ContextInterface = {
  data: [],
  isPaginationActive: false,
  next: () => {},
  prev: () => {},
};

export const NavigationContext = createContext<ContextInterface>(ContextDefaultValues);

export const NavigationProvider = ({ children }: Props) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const [isPaginationActive, setIsPaginationActive] = useState(false);

  const fetchData = async () => {
    const { data } = await api.get(`/products?_page=${page}&_limit=${limit}`);
    setData(data);
  };
  useEffect((): void => {
    try {
      fetchData();
    } catch (err: any) {
      console.log(err.message);
    }
  }, [page]);

  const prev = () => {
    if (page > 1) {
      setIsPaginationActive(true);
      setPage((prev) => prev - 1);
    }
  };

  const next = () => {
    if (data.length === 5) {
      setPage((prev) => prev + 1);
      setIsPaginationActive(true);
    }
  };

  return <NavigationContext.Provider value={{ data, isPaginationActive, next, prev }}>{children}</NavigationContext.Provider>;
};
export default NavigationContext;
