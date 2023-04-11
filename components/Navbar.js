import {
  faAngleDown,
  faAngleUp,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [cross, setCross] = useState(false);
  const [toogle, setToogle] = useState(false);
  const [dropdownToogle, setDropdownToogle] = useState(false);

  const handleCross = (props) => {
    if (props) {
      setCross(true);
    }
  };

  const handleToogle = () => {
    setToogle(!toogle);
  };
  const handleDropdownToogle = () => {
    setDropdownToogle(!dropdownToogle);
  };

  return (
    <div className="bg-primary-color">
      <p className="hidden lg:flex items-center gap-x-4 justify-center text-base-100 text-sm py-1">
        CALL800.BE.IDEAL | <Link href="/">LOG IN</Link>
      </p>
      <div className="text-basic-color bg-secondary-color h-20 z-50 flex items-center justify-center gap-x-52 text-primary-color relative border-b lg:border-none">
        <div className="flex items-center justify-around w-full lg:w-auto">
          {/* show on all devices */}
          <h1 className="text-3xl font-extrabold text-dark-color">
            <Link href="/">Elite Spa</Link>
          </h1>

          {/* show on mobile & tab*/}
          <button
            onClick={() => handleToogle()}
            className="text-3xl font-bold flex lg:hidden"
          >
            {toogle === false && <FontAwesomeIcon icon={faBars} />}
            {toogle && <FontAwesomeIcon className="text-4xl" icon={faXmark} />}
          </button>
          {toogle && (
            <div className="block lg:hidden w-full origin-top absolute top-20 shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer">
                <Link href="/">HOME</Link>
              </li>
              <li
                className="flex justify-between items-center px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer"
                onClick={() => handleDropdownToogle()}
              >
                SERVICES
                {dropdownToogle === false && (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
                {dropdownToogle && <FontAwesomeIcon icon={faAngleUp} />}
              </li>
              {/* dropdown menu for services  */}
              {dropdownToogle && (
                <ul className="pl-6">
                  <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer border-b">
                    <Link href="/">All Services</Link>
                  </li>
                  <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer border-b">
                    <Link href="/">Laser Hair Removal </Link>
                  </li>
                  <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer border-b">
                    <Link href="/">Botox</Link>
                  </li>
                  <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer border-b">
                    <Link href="/">CoolSculpting</Link>
                  </li>
                  <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer border-b">
                    <Link href="/">ColorTone</Link>
                  </li>
                </ul>
              )}

              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer">
                <Link href="/">LOCATIONS</Link>
              </li>
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer">
                <Link href="/">MEMBERSHIP</Link>
              </li>
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer">
                <Link href="/">ABOUT US</Link>
              </li>
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer">
                <Link href="/">CONTACT US</Link>
              </li>
            </div>
          )}
        </div>

        {/* show on laptop & desktop */}
        <ul className="hidden lg:flex items-center gap-x-6">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li
            className="flex items-center gap-x-1 cursor-pointer"
            onClick={() => handleToogle()}
          >
            SERVICES
            {toogle === false && <FontAwesomeIcon icon={faAngleDown} />}
            {toogle && <FontAwesomeIcon icon={faAngleUp} />}
          </li>
          {/* dropdown menu for services  */}
          {toogle && (
            <div className="w-52 origin-top absolute top-20 shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer">
                <Link href="/">All Services</Link>
              </li>
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer">
                <Link href="/">Laser Hair Removal </Link>
              </li>
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer">
                <Link href="/">Botox</Link>
              </li>
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer">
                <Link href="/">CoolSculpting</Link>
              </li>
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer">
                <Link href="/">ColorTone</Link>
              </li>
            </div>
          )}
          <li>
            <Link href="/">PACKAGES</Link>
          </li>
          <li>
            <Link href="/">MEMBERSHIP</Link>
          </li>
          <li>
            <Link href="/about-us">ABOUT US</Link>
          </li>
          <li className="lg:mr-52">
            <Link href="/contact-us">CONTACT US</Link>
          </li>
          <li>
            <Button name="free consultation" />
          </li>
        </ul>
      </div>
      {cross === false && (
        <div className="flex items-center gap-x-4 justify-center text-sm py-2 !text-base-100">
          <p className="text-base-100">GIVE THE GIFT OF CONFIDENCE! </p>
          <p className="hidden md:flex text-base-100">
            DIGITAL GIFT CART AVAILABLE
          </p>
          <Link className="border rounded-full px-2 text-base-100" href="/">
            SHOP NOW
          </Link>
          <button
            onClick={() => handleCross(true)}
            className=" !text-base-100 text-color-cus"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
