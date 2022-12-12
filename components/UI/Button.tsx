import Link from "next/link";
import React from "react";

interface ButtonProps {
  title: string;
}
const Button = ({ title }: ButtonProps) => {
  return <Link href="/" className="btn border goBack">{title}</Link>;
};

export default Button;
