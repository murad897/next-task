import { useRouter } from "next/router";
import { useState } from "react";
import { RegisterProps } from "types";
import api from "../axios";
import Cookies from "js-cookie";

export const useLogin = () => {
  const router = useRouter();
  const [errorMessage, seterrorMessage] = useState<string>("");

  const login = async ({ email, password }: RegisterProps) => {
    try {
      const token = `${Cookies.get("token")}`;
      const { data } = await api.post(
        `/login`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      Cookies.set("token", data.accessToken);
      Cookies.set("name", data.user.name);
      router.push("/products");
    } catch (err: any) {
      seterrorMessage(err.message);
      setTimeout(() => {
        seterrorMessage("");
      }, 2500);
    }
  };
  return { login, errorMessage };
};
