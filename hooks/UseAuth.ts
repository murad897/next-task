import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

export const UseAuth = () => {
  const router = useRouter();
  const [token, setToken] = useState(false);
  const [hideLoginRegister, setHideLoginRegister] = useState(false);

  const authCheck = (): void => {
    useEffect(() => {
      if (localStorage.getItem("token") && localStorage.getItem("name")) {
        if (router.pathname.includes("/login") || router.pathname.includes("/register")) {
          setHideLoginRegister(false);
          router.push("/");
        }
        setToken(true);
      } else if (!localStorage.getItem("token") && !localStorage.getItem("name") && router.pathname.includes("/login")) {
        router.push("/login");
        setToken(false);
        setHideLoginRegister(true);
      } else if (!localStorage.getItem("token") && !localStorage.getItem("name") && router.pathname.includes("/register")) {
        router.push("/register");
        setToken(false);
        setHideLoginRegister(true);
      } else {
        router.push("/login");
        setHideLoginRegister(true);
      }
    }, []);
  };
  return { authCheck, token, hideLoginRegister };
};
