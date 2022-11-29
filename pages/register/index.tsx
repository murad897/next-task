import React from "react";
import styles from "../../styles/Login.module.css";
import Link from 'next/link';

const Register = () => {
  return (
    <div className={styles.AuthFormContainer}>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-left">
            not registered? <span className="link-primary"><Link href="login">Sign In</Link></span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input required type="email" className="form-control mt-1" placeholder="e.g Jane Doe" />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input required type="email" className="form-control mt-1" placeholder="Email Address" />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input required type="password" className="form-control mt-1" placeholder="Password" />
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

export default Register;
