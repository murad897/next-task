import { useRouter } from "next/router";
import { useState } from "react";
import { RegisterProps } from "types";
import api from "../axios";

export const useRegister = () => {
  const [errorText, setErrorText] = useState<string>("");
  const router = useRouter();
  
  const register = async ({ name, email, password }: RegisterProps) => {
    try {
      const { data } = await api.post(`/register`, {
        name: name,
        email: email,
        password: password,
      });
      router.push("/");
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("name", data.user.name);
    } catch (err: any) {
      setErrorText(err.message);
      setTimeout(() => {
        setErrorText("");
      }, 2000);
    }
  };
  return { register, errorText };
};
