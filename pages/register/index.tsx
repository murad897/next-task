import React, { useState } from "react";
import styles from "../../styles/Login.module.css";
import Link from "next/link";
import { useRegister } from "hooks/useRegister";
import { useAuth } from "hooks/useAuth";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { register, errorText } = useRegister();
  const { hideLoginRegister } = useAuth();
  useAuth();

  const callRegisterAPI = async (e: React.FormEvent) => {
    e.preventDefault();
    register({ name, email, password });
  };

  if (hideLoginRegister) {
    return (
      <div className={styles.AuthFormContainer}>
        <form className="Auth-form" onSubmit={callRegisterAPI}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-left">
              not registered?{" "}
              <span className="link-primary">
                <Link href="login">Sign In</Link>
              </span>
            </div>
            <p className="text-danger">{errorText}</p>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input value={name} required type="text" className="form-control mt-1" placeholder="e.g Jane Doe" onChange={(e) => setName(e.target.value)} />
            </div>
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
  }
};

export default Register;
