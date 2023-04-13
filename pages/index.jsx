import Button from "@/components/Button";
import ButtonUnderline from "@/components/ButtonUnderline";
import ButtonWithAngle from "@/components/ButtonWithAngle";
import Layout from "@/components/Layout";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { FaUserTie } from "react-icons/fa";

const index = () => {
  return (
    <Layout>
      <div>
        {/* hero secton */}
        <section className="hero w-full h-[60vh] relative">
          <div className="w-2/3 mx-auto">
            <div className="flex flex-col items-left absolute top-1/4 gap-y-6">
              <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Elite Spa
              </h1>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-dark-color">
                BODY SCULPTING
              </h2>
              <h2 className="text-4xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-dark-color ml-40">
                &
              </h2>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-dark-color">
                WEIGHT LOSS SERVICES
              </h2>
              <Link href="/shop-service">
                <button className="w-max bg-primary-color text-white rounded-full uppercase py-2 px-4 hover:bg-dark-color transition-colors duration-500 ease-in-out text-color-cus">
                  <FontAwesomeIcon className="mr-1" icon={faAnglesLeft} />
                  EXPLORE NOW
                </button>
              </Link>
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
              className="w-full"
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
              className="w-full"
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
              className="w-full"
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
              className="w-full"
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
            href="/shop-service/7d-hifu-system"
            className="w-72 flex-shrink-0 shadow-md rounded-xl card"
          >
            <Image
              src="/images/services/7D-HIFU-System.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-48 w-full rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              7D HIFU System
            </h2>
            <p className="text-center">Get silky smooth skin for life</p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-button">
                See How It Works
              </button>
            </div>
          </Link>
          <Link
            href="/shop-service/emt"
            className="w-72 flex-shrink-0 shadow-md rounded-xl card"
          >
            <Image
              src="/images/services/EMS-Slimming-Machine.jpg"
              alt="EMS-Slimming-Machine"
              width={500}
              height={500}
              className="h-48 w-full rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              EMS Slimming Machine
            </h2>
            <p className="text-center">
              It is hailed as a non-invasive and non-surgical treatment
            </p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-button">
                See How It Works
              </button>
            </div>
          </Link>
          <Link
            href="/shop-service/fat-freezing-cryolipolysis"
            className="w-72 flex-shrink-0 shadow-md rounded-xl card"
          >
            <Image
              src="/images/services/Fat-Freezing.jpg"
              alt="Fat-Freezing"
              width={500}
              height={500}
              className="h-48 w-full rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              Fat Freezing
            </h2>
            <p className="text-center">
              An easy and simple method for fat deposit removal in your body
            </p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-button">
                See How It Works
              </button>
            </div>
          </Link>
          <Link
            href="/shop-service/lipo-laser"
            className="w-72 flex-shrink-0 shadow-md rounded-xl card"
          >
            <Image
              src="/images/services/Lipo-Laser-Treatment.jpg"
              alt="lipo-laser"
              width={500}
              height={500}
              className="h-48 w-full rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              Lipo Laser Treatment
            </h2>
            <p className="text-center">
              Treatment will enhance your body aesthetics.
            </p>
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
              src="/images/services/Hair-Regrowth-Treatment-(Capillus).jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-48 w-full rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              Hair Regrowth Treatment
            </h2>
            <p className="text-center">
              Capillus is an FDA approved product that is found to be effective
              with no known side effects.
            </p>
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
              src="/images/services/Dermaplaning.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-48 w-full rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              Dermaplaning
            </h2>
            <p className="text-center">Get clear smooth skin for life</p>
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
              src="/images/services/Microneedling-banner.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="h-48 w-full rounded-t-xl"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-header">
              Microneedling
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
              className="h-48 w-full rounded-t-xl"
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
        <ButtonUnderline name="View All Services" link="/shop-service" />
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

        {/* carosel */}
        <div className="h-[500px] xl:h-80 2xl:h-96">
          <h2 className="text-4xl font-bold text-center mt-10 mb-6">
            Our Client Say
          </h2>
          <div className="h-full xl:h-80 2xl:h-96">
            <Carousel className="h-[500px]">
              <div className="flex h-full items-center justify-center bg-secondary-color">
                <div className="w-2/3 mx-auto">
                  <div className="flex justify-center mb-6">
                    <FaUserTie size={60} />
                  </div>
                  <p className="lg:text-lg">
                    I have received treatment here a few times, and I am
                    preparing to phone to set up my next appointment. The staff
                    members are very kind people who take the time to explain
                    everything to you and assist you in choosing the treatments
                    that best match the results you want. I feel safe and
                    well-cared for in this tidy, tranquil office. Elite Spa has
                    my highest recommendation. To be completely honest, going
                    there is such a treat for me. I am grateful.
                  </p>
                  <p className="text-2xl font-bold text-center mt-6">
                    Safa Qassm
                  </p>
                </div>
              </div>
              <div className="flex h-full items-center justify-center bg-secondary-color">
                <div className="w-2/3 mx-auto">
                  <div className="flex justify-center mb-6">
                    <FaUserTie size={60} />
                  </div>
                  <p className="lg:text-lg">
                    This was my first time visiting this sp and first time with
                    fat freezing. Lana made me feel very comfortable and was
                    very honest. I seen good results with the fat freezing (as
                    Lana suggested I also watched my diet, worked out mildly and
                    increased my water intake). I ended up coming back to do it
                    again, hoping to see even better results with the new
                    machine she got and with more effort on my part! Very happy
                    with my visit and recommend!Ashley Snyder
                  </p>
                  <p className="text-2xl font-bold text-center mt-6">
                    Ashley Snyder
                  </p>
                </div>
              </div>
              <div className="flex h-full items-center justify-center bg-secondary-color">
                <div className="w-2/3 mx-auto">
                  <div className="flex justify-center mb-6">
                    <FaUserTie size={60} />
                  </div>
                  <p className="lg:text-lg">
                    Always a great experience here. Lana is amazing and super
                    informative. I have cavitation sessions and feel super
                    relaxed each time that I leave. The service really seems to
                    help me and I recommend having it done at Elite! The salon
                    is clean and organized. Special care is taken to protect
                    from illness.
                  </p>
                  <p className="text-2xl font-bold text-center mt-6">
                    Karie Knowles
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
