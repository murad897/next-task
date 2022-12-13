import React from "react";
import { ProductProps } from "types";
import Image from "next/image";
import { useAuth } from "hooks/useAuth";
import { getProduct } from "services";
import Button from "components/UI/Button";

const Product = ({ product }: ProductProps) => {
  // useAuth()

  if (product) {
    return (
      <>
        <Button title="Go back" />
        <div className="d-flex gap-3 align-items-center  w-50 container justify-content-around p-2  mt-5 p-3 mb-5 bg-white rounded shadow">
          <div style={{ flex: 2 }}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p className="h6 text-success">cost: {product.cost}</p>
          </div>
          <div style={{ width: "100%", height: "200px", position: "relative", flex: 1 }}>
            <Image src={product.imageUrl} layout="fill" objectFit="cover" alt="" className="rounded" />
          </div>
        </div>
      </>
    );
  } else {
    return <h1 className="container mt-5">Something happen with network</h1>;
  }
};

export default Product;

export async function getServerSideProps(context: any) {
  const id = context.query.id;
  const data = await getProduct({ context, id });
  return {
    props: {
      product: data || null,
    },
  };
}
