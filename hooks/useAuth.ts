import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useAuth = () => {
  const router = useRouter();
  const [token, setToken] = useState<boolean>(false);
  const [hideLoginRegister, setHideLoginRegister] = useState(false);


    useEffect(() => {
      // if (localStorage.getItem("token") && localStorage.getItem("name")) {
      //   if (router.pathname.includes("/login") || router.pathname.includes("/register")) {
      //     setHideLoginRegister(false);
      //     router.push("/");
      //   }
      //   setToken(true);
      // } else if (!localStorage.getItem("token") && !localStorage.getItem("name") && router.pathname.includes("/login")) {
      //   router.push("/login");
      //   setToken(false);
      //   setHideLoginRegister(true);
      // } else if (!localStorage.getItem("token") && !localStorage.getItem("name") && router.pathname.includes("/register")) {
      //   router.push("/register");
      //   setToken(false);
      //   setHideLoginRegister(true);
      // } else {
      //   router.push("/login");
      //   setHideLoginRegister(true);
      // }
    }, []);

  return {  token, hideLoginRegister };
};
