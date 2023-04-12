import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-80 bg-primary-color mt-10">
      <div className="flex flex-col items-center justify-center h-full gap-y-4">
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
      </div>
    </div>
  );
};

export default Footer;
