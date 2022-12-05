import React, { useContext, useEffect } from "react";
import NavigationContext from "context";
import { ListProps, ListItemProps } from "types";
import ListItem from "../ListItem";

const List = ({ list }: ListProps) => {
  const { isPaginationActive, data } = useContext(NavigationContext);

  if (isPaginationActive) {
    return (
      <div className="container my-5">
        {data.map((item: ListItemProps): JSX.Element => {
          return <ListItem key={item.id} item={item} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="container my-5">
        {list?.map((item: ListItemProps): JSX.Element => {
          return <ListItem key={item.id} item={item} />;
        })}
      </div>
    );
  }
};

export default List;
