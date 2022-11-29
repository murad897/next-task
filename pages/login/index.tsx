import React, { useState } from "react";
import styles from "../../styles/Login.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const router = useRouter();

  const callLoginAPI = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:4000/login", {
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
          },2000);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.AuthFormContainer}>
      <form className="Auth-form" onSubmit={callLoginAPI}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-left">
            not registered?{" "}
            <span className="link-primary">
              <Link href="/register">Sign Up</Link>
            </span>
          </div>
          <p className="text-danger">{errorText}</p>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input value={email} required type="email" className="form-control mt-1" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input value={password} required type="password" className="form-control mt-1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
