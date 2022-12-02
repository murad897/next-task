import { productsDataProps } from "../types";
import { productDataProps } from "../types";

export const getProducts = async ({ context, limit, offset }: productsDataProps) => {
  const response = await fetch(`http://localhost:4000/products?_page=${offset}&_limit=${limit}`, {
    headers: { Authentication: context.req.headers.Authentication },
  });
  return await response.json();
};

export const getProduct = async ({ context, id }: productDataProps) => {
  const response = await fetch(`http://localhost:4000/products/${id}`, {
    headers: { Authentication: context.req.headers.Authentication },
  });
  return await response.json();
};
