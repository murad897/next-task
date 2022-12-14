import React, { useContext } from "react";
import NavigationContext from "context";

const Navigation = () => {
  const { prev, next } = useContext(NavigationContext);
  return (
    <div className="container my-5 d-flex gap-3">
      <button onClick={prev} className="btn border">
        prev
      </button>
      <button onClick={next} className="btn border">
        next
      </button>
    </div>
  );
};

export default Navigation;
