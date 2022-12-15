import React, { useState } from "react";
import styles from "../../styles/Login.module.css";
import Link from "next/link";
import { useLogin } from "hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, errorMessage } = useLogin();

  const callLoginAPI = async (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, password });
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
          <p className="text-danger">{errorMessage}</p>
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
