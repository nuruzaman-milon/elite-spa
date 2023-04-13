import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-10 bg-primary-color mt-10">
      {/* <div className="flex flex-col items-center justify-center h-full gap-y-4">
        <div className="flex gap-x-4">
          <Link href="/">
            <Image
              src="/images/facebook.png"
              alt="My Image"
              width={30}
              height={30}
              className="h-100% w-100%"
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/youtube.png"
              alt="My Image"
              width={30}
              height={30}
              className="h-100% w-100%"
            />
          </Link>
        </div>
        <div className="text-white">
          © Copyright 2022 ELITE SPA. All Rights Reserved
        </div>
        <div className="text-white">
          Design & Development by{" "}
          <Link
            className="border-b"
            href="https://bayshorecommunication.com/"
            target="_blank"
          >
            Bayshore Communication
          </Link>
        </div>
      </div> */}

      <footer class="text-white">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-white">
          <div class="sm:flex sm:items-center sm:justify-between">
            <Link href="/" class="flex items-center mb-4 sm:mb-0">
              {/* <Image
                src="/images/logo.png"
                alt="My Image"
                width={500}
                height={500}
                className="h-full w-full"
              /> */}
              <h2 className="text-3xl font bold text-white">Elite Spa</h2>
            </Link>
            <div className="text-color-cus flex gap-x-4 mb-3 lg:mb-0">
              <Link
                href="https://www.facebook.com/EliteSpaFlorida/"
                target="_blank"
              >
                <FaFacebook size={32} color="white" />
              </Link>
              <Link href="https://www.youtube.com/" target="_blank">
                <FaYoutube size={32} color="white" />
              </Link>
              <Link
                href="https://www.instagram.com/Elite_spa7/"
                target="_blank"
              >
                <FaInstagram size={32} color="white" />
              </Link>
            </div>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
              <li>
                <Link
                  href="/shop-service"
                  class="mr-4 hover:underline md:mr-6 text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  class="mr-4 hover:underline md:mr-6 text-white"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  class="mr-4 hover:underline md:mr-6 text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" class="hover:underline text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <hr class="my-6  sm:mx-auto lg:my-8" />
          <span class="block text-sm text-white sm:text-center">
            <div className="text-white mb-1">
              © Copyright 2023 ELITE SPA. All Rights Reserved
            </div>
            <div className="text-white">
              Design & Development by{" "}
              <Link
                className="border-b"
                href="https://bayshorecommunication.com/"
                target="_blank"
              >
                Bayshore Communication
              </Link>
            </div>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
