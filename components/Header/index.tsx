import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    router.push("/login");
  };

  useEffect(() => {
    const nameFromStorage: string | null = localStorage.getItem("name");
    if (nameFromStorage) {
      setName(nameFromStorage);
    }
  }, []);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <h1>{name}</h1>
      <button type="button" className="btn btn-primary" onClick={Logout}>
        Log out
      </button>
    </div>
  );
};

export default Header;
