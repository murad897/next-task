import React, { useContext, useEffect } from "react";
import NavigationContext from "context";
import { listProps, listItem } from "types";
import ListItem from "../ListItem";

const List = ({ list }: listProps) => {
  const { paginationActive, data } = useContext(NavigationContext);

  if (paginationActive) {
    return (
      <div className="container my-5">
        {data.map((item: listItem): JSX.Element => {
          return <ListItem key={item.id} item={item} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="container my-5">
        {list?.map((item: listItem): JSX.Element => {
          return <ListItem key={item.id} item={item} />;
        })}
      </div>
    );
  }
};

export default List;
