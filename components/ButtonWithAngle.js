import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ButtonWithAngle = ({ name }) => {
  return (
    <button className="text-color-cus w-max bg-primary-color text-white rounded-full uppercase py-2 px-4 hover:bg-dark-color transition-colors duration-500 ease-in-out ">
      {name}
      <FontAwesomeIcon className="ml-1 font-bold" icon={faAngleRight} />
    </button>
  );
};

export default ButtonWithAngle;
