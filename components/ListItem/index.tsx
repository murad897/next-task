import { useRouter } from "next/router";
import React from "react";
import { listItemComponentProps } from "../../types";

const ListItem = ({ item }: listItemComponentProps) => {
  const router = useRouter();

  const itemClickHandler = () => {
    router.push(`/products/${item.id}`);
  };

  return (
    <div onClick={itemClickHandler} className="shadow p-3 mb-5 bg-white rounded " style={{ cursor: "pointer" }}>
      <h1 className="h4">{item.name}</h1>
      <p className="h6 text-success">cost : {item.cost}</p>
    </div>
  );
};

export default ListItem;
