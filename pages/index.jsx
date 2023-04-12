import Button from "@/components/Button";
import ButtonUnderline from "@/components/ButtonUnderline";
import ButtonWithAngle from "@/components/ButtonWithAngle";
import Layout from "@/components/Layout";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <Layout>
      <div>
        {/* hero secton */}
        <section className="hero w-full h-[60vh] relative">
          <div className="w-2/3 mx-auto">
            <div className="flex flex-col items-center absolute top-1/4 gap-y-6">
              {/* <h1 className="header-style">ELITE SPA</h1> */}
              <h2 className="header-style">BODY SCULPTING</h2>
              <h2 className="header-style">&</h2>
              <h2 className="header-style">WEIGHT LOSS SERVICES</h2>
              <button className="w-max bg-primary-color text-white rounded-full uppercase py-2 px-4 hover:bg-dark-color transition-colors duration-500 ease-in-out text-color-cus">
                <FontAwesomeIcon className="mr-1" icon={faAnglesLeft} />
                EXPLORE NOW
              </button>
            </div>
          </div>
        </section>

        {/* show services section  */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 w-2/3 mx-auto mt-10">
          <Link href="/">
            <Image
              src="/images/lipo-Laser.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-100% w-100%"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1">
              Lipo Laser
            </h2>
            <p className="text-center">
              *Minimum purchase required. Participating locations only.
            </p>
          </Link>
          <Link href="">
            <Image
              src="/images/Fat-Freezing.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-100% w-100%"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1">
              Fat Freeze Cryolipolysis
            </h2>
            <p className="text-center">
              *Minimum purchase required. Participating location only.
            </p>
          </Link>
          <Link href="">
            <Image
              src="/images/EMS-Shimming.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-100% w-100%"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1">
              Ems Slimming Machine
            </h2>
            <p className="text-center">
              *Minimum purchase required. Participating location only.
            </p>
          </Link>
          <Link href="">
            <Image
              src="/images/7dhifu.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-100% w-100%"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1">
              7D Hifu System
            </h2>
            <p className="text-center">
              *Minimum purchase required. Participating location only.
            </p>
          </Link>
        </section>

        {/* all treatements */}
        <h2 className="text-center font-extrabold text-3xl mt-20">
          FEATURED SERVICES
        </h2>
        <section className="flex gap-x-6 w-2/3 mx-auto mt-12 overflow-x-scroll pb-6 scrollable-div">
          <Link
            href=""
            className="w-72 flex-shrink-0 shadow-md rounded-xl card"
          >
            <Image
              src="/images/service.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-100% w-100% rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              Laser Hair Removal
            </h2>
            <p className="text-center">Get silky smooth skin for life</p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-button">
                See How It Works
              </button>
            </div>
          </Link>
          <Link
            href=""
            className="w-72 flex-shrink-0 shadow-md rounded-xl card"
          >
            <Image
              src="/images/service.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-100% w-100% rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              Laser Hair Removal
            </h2>
            <p className="text-center">Get silky smooth skin for life</p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-button">
                See How It Works
              </button>
            </div>
          </Link>
          <Link
            href=""
            className="w-72 flex-shrink-0 shadow-md rounded-xl card"
          >
            <Image
              src="/images/service.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-100% w-100% rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              Laser Hair Removal
            </h2>
            <p className="text-center">Get silky smooth skin for life</p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-button">
                See How It Works
              </button>
            </div>
          </Link>
          <Link
            href=""
            className="w-72 flex-shrink-0 shadow-md rounded-xl card"
          >
            <Image
              src="/images/service.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-100% w-100% rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              Laser Hair Removal
            </h2>
            <p className="text-center">Get silky smooth skin for life</p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-button">
                See How It Works
              </button>
            </div>
          </Link>
          <Link
            href=""
            className="w-72 flex-shrink-0 shadow-md rounded-xl card"
          >
            <Image
              src="/images/service.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-100% w-100% rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              Laser Hair Removal
            </h2>
            <p className="text-center">Get silky smooth skin for life</p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-button">
                See How It Works
              </button>
            </div>
          </Link>
          <Link
            href=""
            className="w-72 flex-shrink-0 shadow-md rounded-xl card"
          >
            <Image
              src="/images/service.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-100% w-100% rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              Laser Hair Removal
            </h2>
            <p className="text-center">Get silky smooth skin for life</p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-button">
                See How It Works
              </button>
            </div>
          </Link>
          <Link
            href=""
            className="w-72 flex-shrink-0 shadow-md rounded-xl card"
          >
            <Image
              src="/images/service.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-100% w-100% rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              Laser Hair Removal
            </h2>
            <p className="text-center">Get silky smooth skin for life</p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-button">
                See How It Works
              </button>
            </div>
          </Link>
          <Link
            href=""
            className="w-72 flex-shrink-0 shadow-md rounded-xl card"
          >
            <Image
              src="/images/service.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-100% w-100% rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              Laser Hair Removal
            </h2>
            <p className="text-center">Get silky smooth skin for life</p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-button">
                See How It Works
              </button>
            </div>
          </Link>
          <Link
            href=""
            className="w-72 flex-shrink-0 shadow-md rounded-xl card"
          >
            <Image
              src="/images/service.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-100% w-100% rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              Laser Hair Removal
            </h2>
            <p className="text-center">Get silky smooth skin for life</p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-button">
                See How It Works
              </button>
            </div>
          </Link>
          <Link
            href=""
            className="w-72 flex-shrink-0 shadow-md rounded-xl card"
          >
            <Image
              src="/images/service.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-100% w-100% rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              Laser Hair Removal
            </h2>
            <p className="text-center">Get silky smooth skin for life</p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-button">
                See How It Works
              </button>
            </div>
          </Link>
        </section>
        <ButtonUnderline name="View All Services" link="/services" />
        <div className="flex justify-center">
          <ButtonWithAngle name="Free Consultation"></ButtonWithAngle>
        </div>

        {/* email send */}
        <div className="flex flex-col gap-y-4 items-center">
          <h2 className="text-center font-extrabold text-3xl mt-20">
            Stay up-to-date on events and offers
          </h2>
          <input
            className="border border-primary-color focus:border-dark-color rounded-full py-1 px-4 w-80"
            type="email"
            placeholder="Your Email"
            required
          />
          <Button name="submit" />
        </div>
      </div>
    </Layout>
  );
};

export default index;
