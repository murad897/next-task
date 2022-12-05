import React, { useContext } from "react";
import NavigationContext from "context";

const Navigation = () => {
  const { prevHandler, nextHandler } = useContext(NavigationContext);
  return (
    <div className="container my-5 d-flex gap-3">
      <button onClick={prevHandler} className="btn border">
        prev
      </button>
      <button onClick={nextHandler} className="btn border">
        next
      </button>
    </div>
  );
};

export default Navigation;
