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
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  // const [cross, setCross] = useState(false);
  const [toogle, setToogle] = useState(false);
  const [dropdownToogle, setDropdownToogle] = useState(false);
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;

  const isActiveForNested = router.pathname.startsWith("/shop-service");

  const handleToogle = () => {
    setToogle(!toogle);
  };
  const handleDropdownToogle = () => {
    setDropdownToogle(!dropdownToogle);
  };

  return (
    <div>
      <div className="text-basic-color bg-secondary-color h-20 z-50 flex lg:hidden items-center justify-center gap-x-52 text-primary-color relative border-b lg:border-none">
        <div className="flex items-center justify-around w-full lg:w-auto">
          {/* show on all devices */}
          <h1 className="flex lg:hidden text-3xl font-extrabold text-dark-color">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="My Image"
                width={500}
                height={500}
                className="h-full w-full"
              />
            </Link>
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
                    <Link href="/shop-service">All Services</Link>
                  </li>
                  <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer border-b">
                    <Link href="/shop-service/lipo-laser">Lipo Laser</Link>
                  </li>
                  <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer border-b">
                    <Link href="/shop-service/fat-freezing-cryolipolysis">
                      Fat Freezing Cryolipolysis
                    </Link>
                  </li>
                  <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer border-b">
                    <Link href="/shop-service/emt">EMS Slimming Machine</Link>
                  </li>
                  <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer border-b">
                    <Link href="/shop-service/7d-hifu-system">
                      7d-hifu-system
                    </Link>
                  </li>
                </ul>
              )}

              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer">
                <Link href="/packages">PACKAGES</Link>
              </li>
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer">
                <Link href="/membership">MEMBERSHIP</Link>
              </li>
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer">
                <Link href="/about-us">ABOUT US</Link>
              </li>
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer">
                <Link href="/contact-us">CONTACT US</Link>
              </li>
            </div>
          )}
        </div>
      </div>
      <div className="w-2/3 mx-auto flex justify-between items-center h-20 z-50">
        {/* show on laptop & desktop */}
        <h1 className="hidden lg:flex text-3xl font-extrabold text-dark-color">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="My Image"
              width={500}
              height={500}
              className="h-full w-full"
            />
          </Link>
        </h1>
        <ul className="hidden lg:flex items-center gap-x-6">
          <li className={isActive("/") ? "active" : "hover:font-bold"}>
            <Link href="/">HOME</Link>
          </li>
          <li
            className={`flex items-center gap-x-1 cursor-pointer
            ${isActiveForNested ? "active text-color-cus" : "hover:font-bold"}
            
           `}
            onClick={() => handleToogle()}
          >
            SERVICES
            {toogle === false && <FontAwesomeIcon icon={faAngleDown} />}
            {toogle && <FontAwesomeIcon icon={faAngleUp} />}
          </li>
          {/* dropdown menu for services  */}
          {toogle && (
            <div className="w-56 z-50 origin-top absolute top-20 shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer hover:font-bold">
                <Link href="/shop-service">All Services</Link>
              </li>
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer hover:font-bold">
                <Link href="/shop-service/lipo-laser">Lipo Laser</Link>
              </li>
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer hover:font-bold">
                <Link href="/shop-service/fat-freezing-cryolipolysis">
                  Fat Freezing Cryolipolysis
                </Link>
              </li>
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer hover:font-bold">
                <Link href="/shop-service/emt">EMS Slimming Machine</Link>
              </li>
              <li className="block px-4 py-2 text-primary-color hover:bg-gray-100 cursor-pointer hover:font-bold">
                <Link href="/shop-service/7d-hifu-system">7d-hifu-system</Link>
              </li>
            </div>
          )}
          <li className={isActive("/packages") ? "active" : "hover:font-bold"}>
            <Link href="/packages">PACKAGES</Link>
          </li>
          <li
            className={isActive("/membership") ? "active" : "hover:font-bold"}
          >
            <Link href="/membership">MEMBERSHIP</Link>
          </li>
          <li className={isActive("/about-us") ? "active" : "hover:font-bold"}>
            <Link href="/about-us">ABOUT US</Link>
          </li>
          <li
            className={isActive("/contact-us") ? "active" : "hover:font-bold"}
          >
            <Link href="/contact-us">CONTACT US</Link>
          </li>
        </ul>
        <div className="hidden lg:flex">
          <Link href="tel:+17275054997">
            <Button name="+1727-505-4997" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
