import { useRouter } from "next/router";
import { useState } from "react";
import { RegisterProps } from "types";
import api from "../axios";

export const UseLogin = () => {
  const router = useRouter();
  const [errorMessage, seterrorMessage] = useState<string>("");

  const login = async ({ email, password }: RegisterProps) => {
    try {
      const { data } = await api.post(`/login`, {
        email: email,
        password: password,
      });
      router.push("/");
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("name", data.user.name);
    } catch (err: any) {
      seterrorMessage(err.message);
      setTimeout(() => {
        seterrorMessage("");
      }, 2500);
    }
  };
  return { login, errorMessage };
};
