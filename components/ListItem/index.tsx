import React from "react";
import { listItemComponentProps } from "../../types";

const ListItem = ({ item }: listItemComponentProps) => {
  return (
    <div className="shadow p-3 mb-5 bg-white rounded " style={{ cursor: "pointer" }}>
      <h1 className="h4">{item.name}</h1>
      <p className="h6 text-success">cost : {item.cost}</p>
    </div>
  );
};

export default ListItem;
