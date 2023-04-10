import Button from "@/components/Button";
import ButtonUnderline from "@/components/ButtonUnderline";
import ButtonWithAngle from "@/components/ButtonWithAngle";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <Layout>
      <div>
        {/* hero secton */}
        <section className="hero w-full h-[60vh] relative">
          <div className="flex flex-col items-center absolute top-3/4 left-1/4 gap-y-6">
            <select
              className="w-max px-4 py-2 rounded-md ring-0 focus:border-none text-primary-color"
              name="service"
              id="service"
            >
              <option value="">Removing Unwanted Hair</option>
              <option value="">Fat Reduction</option>
              <option value="">Muscle Toning</option>
            </select>
            <Button name="Get Started" />
          </div>
        </section>

        {/* show services section  */}
        <section className="flex gap-x-6 w-5/6 mx-auto mt-10">
          <Link href="/">
            <Image
              src="/images/service.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-100% w-100%"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1">
              Lipo Laser
            </h2>
            <p className="text-center">
              *Minimum purchase required. Participating location only.
            </p>
          </Link>
          <Link href="">
            <Image
              src="/images/service.jpg"
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
              src="/images/service.jpg"
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
              src="/images/service.jpg"
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
          Treatments That Work, Results You’ll Love
        </h2>
        <section className="flex gap-x-6 w-4/6 mx-auto mt-12 overflow-x-scroll pb-6 scrollable-div">
          <Link
            href=""
            className="w-80 flex-shrink-0 shadow-md rounded-xl card"
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
            className="w-80 flex-shrink-0 shadow-md rounded-xl card"
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
            className="w-80 flex-shrink-0 shadow-md rounded-xl card"
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
            className="w-80 flex-shrink-0 shadow-md rounded-xl card"
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
            className="w-80 flex-shrink-0 shadow-md rounded-xl card"
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
            className="w-80 flex-shrink-0 shadow-md rounded-xl card"
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
            className="w-80 flex-shrink-0 shadow-md rounded-xl card"
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
            className="w-80 flex-shrink-0 shadow-md rounded-xl card"
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
            className="w-80 flex-shrink-0 shadow-md rounded-xl card"
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
            className="w-80 flex-shrink-0 shadow-md rounded-xl card"
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
