import { useRouter } from "next/router";
import { useState } from "react";
import { RegisterProps } from "types";
import api from "../axios";

export const useLogin = () => {
  const router = useRouter();
  const [errorMessage, seterrorMessage] = useState<string>("");
  const login = async ({ email, password }: RegisterProps) => {
    try {
      const token = `${localStorage.getItem("token")}`;
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
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("name", data.user.name);
      router.push("/");
    } catch (err: any) {
      seterrorMessage(err.message);
      setTimeout(() => {
        seterrorMessage("");
      }, 2500);
    }
  };
  return { login, errorMessage };
};
