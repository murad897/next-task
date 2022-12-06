import { useState } from "react";
import { ProductsDataProps } from "types";
import { ProductDataProps } from "types";
import api from "../axios";

export const getProducts = async ({ context, limit, page }: ProductsDataProps) => {
  try {
    const response = await api.get(`/products?_page=${page}&_limit=${limit}`, {
      headers: {
        Authentication: context.req.headers.Authentication,
        "accept-encoding": "*",
      },
    });
    return response.data;
  } catch {
    return null;
  }
};

export const getProduct = async ({ context, id }: ProductDataProps) => {
  try {
    const response = await api.get(`/products/${id}`, {
      headers: {
        Authentication: context.req.headers.Authentication,
        "accept-encoding": "*",
      },
    });
    return response.data;
  } catch {
    return null;
  }
};
