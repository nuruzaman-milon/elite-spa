import React from "react";

const Button = ({ name }) => {
  return (
    <button className="w-max bg-primary-color text-white rounded-full uppercase py-2 px-4 hover:bg-dark-color transition-colors duration-500 ease-in-out ">
      {name}
    </button>
  );
};

export default Button;
