import ButtonUnderline from "@/components/ButtonUnderline";
import ButtonWithAngle from "@/components/ButtonWithAngle";
import Layout from "@/components/Layout";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Head from "next/head";
import { FaAngleDoubleLeft } from "react-icons/fa";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>
          Elite Spa - Body Sculpting and Weight Loss Services Florida
        </title>
      </Head>
      <div>
        {/* hero secton */}
        <section
          data-aos="fade-up"
          data-aos-duration="800"
          className="hero w-full h-[60vh] relative"
        >
          <div className="container">
            <div className="flex flex-col items-left absolute top-1/4 gap-y-8">
              <h1 className="text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Elite Spa
              </h1>

              <div className="lg:flex gap-x-3">
                <h2 className="text-4xl lg:text-6xl font-extrabold text-dark-color">
                  We Offer -
                </h2>
                <h2 className="text-4xl lg:text-6xl font-extrabold ">
                  <Typewriter
                    options={{
                      strings: [
                        "Body Sculpting",
                        "Weight Loss Services",
                        "Lipo Laser",
                        "Fat Freezing Cryolipolysis",
                        "EMS Slimming Machine",
                        "7D Hifu System",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
              </div>
              <Link href="/shop-service">
                <button className="w-max bg-primary-color text-white rounded-full uppercase py-2 px-4 hover:bg-dark-color transition-colors duration-500 ease-in-out text-color-cus flex items-center">
                  <FaAngleDoubleLeft size={20} className="mr-1" />
                  EXPLORE NOW
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* show services section  */}
        <section
          data-aos="fade-up"
          data-aos-duration="1500"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mt-10"
        >
          <Link className="card" href="/shop-service/lipo-laser">
            <Image
              src="/images/lipo-Laser.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="w-full"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-hover-color">
              Lipo Laser
            </h2>
            <p className="text-center card-hover-color">
              *Minimum purchase required. Participating locations only.
            </p>
          </Link>
          <Link
            className="card"
            href="/shop-service/fat-freezing-cryolipolysis"
          >
            <Image
              src="/images/Fat-Freezing.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="w-full"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-hover-color">
              Fat Freeze Cryolipolysis
            </h2>
            <p className="text-center card-hover-color">
              *Minimum purchase required. Participating location only.
            </p>
          </Link>
          <Link className="card" href="/shop-service/emt">
            <Image
              src="/images/EMS-Shimming.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="w-full"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-hover-color">
              Ems Slimming Machine
            </h2>
            <p className="text-center card-hover-color">
              *Minimum purchase required. Participating location only.
            </p>
          </Link>
          <Link className="card" href="/shop-service/7d-hifu-system">
            <Image
              src="/images/7dhifu.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="w-full"
            />
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-hover-color">
              7D Hifu System
            </h2>
            <p className="text-center card-hover-color">
              *Minimum purchase required. Participating location only.
            </p>
          </Link>
        </section>

        {/* all treatements */}
        <h2 className="container text-center font-extrabold text-4xl mt-20">
          FEATURED SERVICES
        </h2>
        <section
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex gap-x-6 container mt-12 overflow-x-scroll pb-6 scrollable-div"
        >
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
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-hover-color">
              7D HIFU System
            </h2>
            <p className="text-center card-hover-color">
              Get silky smooth skin for life
            </p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-hover-color">
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
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-hover-color">
              EMS Slimming Machine
            </h2>
            <p className="text-center card-hover-color">
              It is hailed as a non-invasive and non-surgical treatment
            </p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-hover-color">
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
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-hover-color">
              Fat Freezing
            </h2>
            <p className="text-center card-hover-color">
              An easy and simple method for fat deposit removal in your body
            </p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-hover-color">
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
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-hover-color">
              Lipo Laser Treatment
            </h2>
            <p className="text-center card-hover-color">
              Treatment will enhance your body aesthetics.
            </p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-hover-color">
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
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-hover-color">
              Hair Regrowth Treatment
            </h2>
            <p className="text-center card-hover-color">
              Capillus is an FDA approved product that is found to be effective
              with no known side effects.
            </p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-hover-color">
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
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-hover-color">
              Dermaplaning
            </h2>
            <p className="text-center card-hover-color">
              Get clear smooth skin for life
            </p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-hover-color">
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
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-hover-color">
              Microneedling
            </h2>
            <p className="text-center card-hover-color">
              Get silky smooth skin for life
            </p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-hover-color">
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
            <h2 className="font-bold text-2xl text-center mt-2 mb-1 card-hover-color">
              Laser Hair Removal
            </h2>
            <p className="text-center card-hover-color">
              Get silky smooth skin for life
            </p>
            <div className="flex justify-center mt-6 mb-3">
              <button className="border-b border-primary-color card-hover-color">
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
          <h2 className="container text-center font-extrabold text-3xl mt-20">
            Stay up-to-date on events and offers
          </h2>
          <input
            className="border border-primary-color focus:border-dark-color rounded-full py-1 px-4 w-80"
            type="email"
            placeholder="Your Email"
            required
          />
          <ButtonWithAngle name="submit"></ButtonWithAngle>
        </div>

        {/* carosel */}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="h-[34rem] xl:h-96"
        >
          <h2 className="text-4xl font-bold text-center mt-16 mb-6">
            Our Client Say
          </h2>
          <div className="h-[34rem] xl:h-96">
            <Carousel className="rounded-none custom">
              <div className="flex h-full items-center justify-center bg-secondary-color rounded-none">
                <div className="container rounded-none">
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/images/user.png"
                      alt="My Image"
                      width={120}
                      height={120}
                    />
                  </div>
                  <p className="lg:text-lg">
                    I have received treatment here a few times, and I am
                    preparing to phone to set up my next appointment. The staff
                    members are very kind people who take the time to explain
                    everything to you and assist you in choosing the treatments
                    that best match the results you want. I feel safe and
                    well-cared for in this tidy, tranquil office.
                  </p>
                  <p className="text-2xl font-bold text-center mt-6">
                    Safa Qassm
                  </p>
                </div>
              </div>
              <div className="flex h-full items-center justify-center bg-secondary-color">
                <div className="container pb-5">
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/images/user1.png"
                      alt="My Image"
                      width={120}
                      height={120}
                    />
                  </div>
                  <p className="lg:text-lg">
                    This was my first time visiting this sp and first time with
                    fat freezing. Lana made me feel very comfortable and was
                    very honest. I seen good results with the fat freezing (as
                    Lana suggested I also watched my diet, worked out mildly and
                    increased my water intake). I ended up coming back to do it
                    again, hoping to see even better results.
                  </p>
                  <p className="text-2xl font-bold text-center mt-6">
                    Ashley Snyder
                  </p>
                </div>
              </div>
              <div className="flex h-full items-center justify-center bg-secondary-color">
                <div className="container pb-5">
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/images/user2.png"
                      alt="My Image"
                      width={120}
                      height={120}
                    />
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
