import { FaAngleDoubleRight } from "react-icons/fa";

const ButtonWithAngle = ({ name }) => {
  return (
    <button className="text-color-cus w-max bg-primary-color text-white rounded-full uppercase py-2 px-4 hover:bg-dark-color transition-colors duration-500 ease-in-out flex items-center">
      {name} <FaAngleDoubleRight size={20} className="ml-1" />
    </button>
  );
};

export default ButtonWithAngle;
