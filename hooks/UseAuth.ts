import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

export const UseAuth = () => {
  const router = useRouter();
  const [token, setToken] = useState(false);

  const authCheck = (): void => {
    useEffect(() => {
      if (localStorage.getItem("token") && localStorage.getItem("name")) {
        router.push("/");
        setToken(true);
      } else if (!localStorage.getItem("token") && !localStorage.getItem("name") && router.pathname.includes("/login")) {
        router.push("/login");
        setToken(false);
      } else if (!localStorage.getItem("token") && !localStorage.getItem("name") && router.pathname.includes("/register")) {
        router.push("/register");
        setToken(false);
      } else {
        router.push("/login");
      }
    }, []);
  };
  return { authCheck, token };
};
