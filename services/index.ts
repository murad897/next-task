import { ProductsDataProps } from "types";
import { ProductDataProps } from "types";
import api from "../axios";

export const getProducts = ({ context, limit, page }: ProductsDataProps) => {
  const response = api
    .get(`/products?_page=${page}&_limit=${limit}`, {
      headers: {
        Authentication: context.req.headers.Authentication,
        "accept-encoding": "*",
      },
    })
    .then((res) => res)
    .catch((err) => err);
  return response;
};


export const getProduct = ({ context, id }: ProductDataProps) => {
  const response = api
    .get(`/products/${id}`, {
      headers: {
        Authentication: context.req.headers.Authentication,
        "accept-encoding": "*",
      },
    })
    .then((res) => res)
    .catch((err) => err);
  return response;
};
