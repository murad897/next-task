import React from "react";
import { ProductProps } from "types";
import Image from "next/image";
import { UseAuth } from "hooks/UseAuth";
import { getProduct } from "services";

const Product = ({ product }: ProductProps) => {
  const { authCheck } = UseAuth();
  authCheck();

  if (product) {
    return (
      <div className="d-flex gap-3 align-items-center w-50 container justify-content-start p-2  mt-5 p-3 mb-5 bg-white rounded shadow">
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="h6 text-success">cost: {product.cost}</p>
        </div>
        <div>
          <Image src={product.imageUrl} alt="" width={200} height={200} className="rounded" />
        </div>
      </div>
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
