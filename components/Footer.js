import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-10 bg-primary-color mt-10">
      <footer>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-white text-center lg:text-left">
          <div className="sm:flex sm:items-start sm:justify-between pt-4">
            <Link
              href="/"
              className="flex items-center justify-center lg:justify-start mb-4 sm:mb-0"
            >
              <Image
                src="/images/footer-logo.png"
                alt="My Image"
                width={122}
                height={56}
                className=""
              />
              {/* <h2 className="text-3xl font bold text-white">Elite Spa</h2> */}
            </Link>

            {/* service 1 */}
            <div>
              <ul className="flex flex-col gap-y-1 lg:gap-y-2">
                <li className="text-white hover:underline underline-offset-2 text-sm font-normal">
                  <Link href="/shop-service">All Services</Link>
                </li>

                <li className="text-white hover:underline underline-offset-2 text-sm font-normal">
                  <Link href="/shop-service/lipo-laser">Lipo Laser</Link>
                </li>

                <li className="text-white hover:underline underline-offset-2 text-sm font-normal">
                  <Link href="/shop-service/fat-freezing-cryolipolysis">
                    Fat Freezing Cryolipolysis
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="lg:hidden my-5 border-gray-500" />
            {/* service 2 */}
            <div>
              <ul className="flex flex-col gap-y-1 lg:gap-y-2">
                <li className="text-white hover:underline underline-offset-2 text-sm font-normal">
                  <Link href="/shop-service/emt">EMS Slimming Machine</Link>
                </li>

                <li className="text-white hover:underline underline-offset-2 text-sm font-normal">
                  <Link href="/shop-service/emt">Pressotherapy Treatment</Link>
                </li>

                <li className="text-white hover:underline underline-offset-2 text-sm font-normal">
                  <Link href="/shop-service/emt">Ultrasonic Cavitation</Link>
                </li>
              </ul>
            </div>

            <hr className="lg:hidden my-5 border-gray-500" />

            {/* service 3 */}
            <ul className="flex flex-col gap-y-1 lg:gap-y-2">
              <li>
                <Link
                  href="/shop-service"
                  className="text-white hover:underline underline-offset-2 text-sm font-normal"
                >
                  Pressotherapy Treatment
                </Link>
              </li>
              <li>
                <Link
                  href="/shop-service"
                  className="text-white hover:underline underline-offset-2 text-sm font-normal"
                >
                  Ultrasonic Cavitation
                </Link>
              </li>
              <li>
                <Link
                  href="/shop-service"
                  className="text-white hover:underline underline-offset-2 text-sm font-normal"
                >
                  liposonix Non Sergical
                </Link>
              </li>
            </ul>

            <hr className="lg:hidden my-5 border-gray-500" />

            {/* Nav links */}
            <ul className="flex flex-col gap-y-1 lg:gap-y-2">
              <li>
                <Link
                  href="/shop-service"
                  className="text-white hover:underline underline-offset-2 text-sm font-normal"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-white hover:underline underline-offset-2 text-sm font-normal"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-white hover:underline underline-offset-2 text-sm font-normal"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-white hover:underline underline-offset-2 text-sm font-normal"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 sm:mx-auto lg:my-14 border-gray-500" />
          <div>
            <div className="text-color-cus flex justify-center gap-x-4 mb-3 lg:mb-0">
              <Link
                href="https://www.facebook.com/EliteSpaFlorida/"
                target="_blank"
                className="border p-2 rounded-full"
              >
                <FaFacebookF size={24} color="red" />
              </Link>
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                className="border p-2 rounded-full"
              >
                <FaYoutube size={24} color="white" />
              </Link>
              <Link
                href="https://www.instagram.com/Elite_spa7/"
                target="_blank"
                className="border p-2 rounded-full"
              >
                <FaInstagram size={24} color="white" />
              </Link>
            </div>
            <div className="mt-6">
              <span className="block text-sm text-white sm:text-center">
                <div className="text-white mb-1">
                  © Copyright 2023 ELITE SPA. All Rights Reserved
                </div>
                <div className="text-white">
                  Design & Development by
                  <Link
                    className=" ml-1"
                    href="https://bayshorecommunication.com/"
                    target="_blank"
                  >
                    <span className="block lg:inline text-white underline underline-offset-2 mt-1 lg:mt-0">
                      Bayshore Communication
                    </span>
                  </Link>
                </div>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

{
  /* */
}
