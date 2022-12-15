import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";

const Header = () => {
  const [name, setName] = useState<string>("");
  const router = useRouter();

  const Logout = () => {
    Cookies.remove("token");
    Cookies.remove("name");
    router.push("/login");
  };

  useEffect(() => {
    const nameFromStorage: string | null = Cookies.get("name");
    if (nameFromStorage) {
      setName(nameFromStorage);
    }
  }, []);

  return (
    <div className="container d-flex justify-content-between align-items-center">
      <h1>{name}</h1>
      <div className="d-flex gap-3">
        <Link href="/product/create" className="btn border">
          create product
        </Link>
        <button type="button" className="btn btn-primary" onClick={Logout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default Header;
