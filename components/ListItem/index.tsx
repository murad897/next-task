import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ListItemProps, ListItemComponentProps } from "types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ListItem = ({ item }: ListItemComponentProps) => {
  const router = useRouter();
  const [ProdcutItem, setProductItem] = useState<ListItemProps>();
  let timer: ReturnType<typeof setTimeout>;

  useEffect(() => {
    timer = setTimeout(() => {
      setProductItem(item)
    },700);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const itemClickHandler = () => {
    router.push(`/products/${item.id}`);
  };

  return ProdcutItem ? (
    <div onClick={itemClickHandler} className="shadow p-3 mb-3 bg-white rounded " style={{ cursor: "pointer" }}>
      <h1 className="h4">{ProdcutItem.name}</h1>
      <p className="h6 text-success">cost : {ProdcutItem.cost}</p>
    </div>
  ) : (
    <div className="skeleton-container">
      <Skeleton width={'100%'} height={105}  />
    </div>
  );
};

export default ListItem;
