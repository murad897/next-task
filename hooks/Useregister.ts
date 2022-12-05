import { useRouter } from "next/router";
import { useState } from "react";
import { RegisterProps } from "types";
import api from "../axios";

export const useRegister = () => {
  const [errorText, setErrorText] = useState<string>("");
  const router = useRouter();

  const register = async ({ name, email, password }: RegisterProps) => {
    try {
     api
        .post(`/register`, {
          name: name,
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.status === 201) {
            router.push("/");
            localStorage.setItem("token", res.data.accessToken);
            localStorage.setItem("name", res.data.user.name);
          }
        })
        .catch((err) => {
          setErrorText(err.message);
          setTimeout(() => {
            setErrorText("");
          }, 2000);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return { register, errorText };
};
