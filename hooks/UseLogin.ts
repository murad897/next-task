import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { RegisterProps } from "../types";

export const UseLogin = () => {
  const router = useRouter();
  const [errorText, setErrorText] = useState("");

  const login = ({ email, password }: RegisterProps) => {
    try {
      axios
        .post(`${process.env.url}/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.status === 200 || 201) {
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

  return { login, errorText };
};
