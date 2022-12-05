import { useRouter } from "next/router";
import { useState } from "react";
import { RegisterProps } from "types";
import api from "../axios";

export const UseLogin = () => {
  const router = useRouter();
  const [errorMessage, seterrorMessage] = useState("");

  const login = ({ email, password }: RegisterProps) => {
    try {
      api
        .post(`/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.status === 200) {
            router.push("/");
            localStorage.setItem("token", res.data.accessToken);
            localStorage.setItem("name", res.data.user.name);
          }
        })
        .catch((err) => {
          seterrorMessage(err.message);
          setTimeout(() => {
            seterrorMessage("");
          }, 2000);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return { login, errorMessage };
};
