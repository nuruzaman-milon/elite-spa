import Link from "next/link";
import React from "react";

const ButtonUnderline = ({ name, link }) => {
  return (
    <Link
      href={link}
      className="block w-max mx-auto mt-10 mb-6 hover:text-dark-color border-b border-dark-color"
    >
      {name}
    </Link>
  );
};

export default ButtonUnderline;
