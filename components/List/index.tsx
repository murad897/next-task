import React from "react";
import { listProps, listItem } from "../../types";
import ListItem from "../ListItem";

const List = ({ list }: listProps) => {
  return (
    <div className="container my-5">
      {list.map((item: listItem): JSX.Element => {
        return <ListItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default List;
