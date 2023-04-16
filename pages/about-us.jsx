import ButtonWithAngle from "@/components/ButtonWithAngle";
import Layout from "@/components/Layout";
import ParallaxComponent from "@/components/ParallaxComponent";
import ServiceTopBar from "@/components/ServiceTopBar";
import Image from "next/image";
import React from "react";

const aboutUs = () => {
  return (
    <Layout>
      <div>
        <ServiceTopBar
          title="About Us"
          desc="This is our brief infomation. Always feel free to know about us and connect with us."
        />
        <div className="w-2/3 mx-auto">
          <div className="flex gap-x-10 my-20">
            <Image
              data-aos="fade-right"
              data-aos-duration="1000"
              src="/images/aboutus.jpg"
              alt="About Us Image"
              width={500}
              height={500}
              className="h-100% w-100%"
            />
            <div data-aos="fade-left" data-aos-duration="1000">
              <h2 className="text-3xl font-bold mb-6">
                Body Aesthetics That Are Envy Worthy
              </h2>
              <p className="mb-6 text-lg">
                Elite SPA brings a range of body treatments, holistic therapies,
                facials, and brow treatments that will boost your
                self-confidence. Our spa salon will provide you with the oasis
                of rejuvenation and healing. Our beauty therapists will pamper
                you while restoring your natural beauty. This beauty journey
                will provide you with an elixir to unending youth.
              </p>
              <p className="text-lg">
                At Elite SPA, we offer beauty and wellness services relating to
                face, body, nails, massage, and hair removal.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-lg flex flex-col gap-y-6"
          >
            <h1 className="text-2xl font-bold">
              Indulge in a Heavenly Massage That Leaves Your Mind, Body, and
              Soul Completely Refreshed
            </h1>
            <p className="text-lg">
              Our team of talented therapists will provide customized massage
              solutions that will work magically for your body. What massage
              services do we offer?
            </p>
            <div>
              <h2 className="text-2xl font-bold mb-2 border-b-4 border-primary-color w-max pb-1">
                Deep Tissue Massage
              </h2>
              <p>
                It will act on the deeper layers of your muscle tissues. It will
                relieve you of chronic tension patterns and help with various
                types of muscle injuries. It will also help you with back
                sprains and muscle pulls.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 border-b-4 border-primary-color w-max pb-1">
                Anti-cellulite Massage
              </h2>
              <p>
                Anti-cellulite massage is targeted towards improving the blood
                circulation in your body. It will soften your fatty areas and
                help to eliminate excess water. The gentle kneading and rubbing
                will drain all the fluids that have accumulated in your body
                cellulite.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 border-b-4 border-primary-color w-max pb-1">
                Lymphatic Drainage Massage
              </h2>
              <p>
                This massage will stimulate the lymphatic system of your body
                and improve your metabolism. It will boost your immune system
                and eliminate toxins from your body.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 border-b-4 border-primary-color w-max pb-1">
                Sports Massage
              </h2>
              <p>
                Aimed at athletes, this massage will help you heal your muscles
                after strenuous sports events. It will also boost your
                flexibility and prep you for any upcoming events. This massage
                will help to prevent and heal you from sports-related injuries.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 border-b-4 border-primary-color w-max pb-1">
                Pregnancy Massage
              </h2>
              <p>
                It will provide relief from joint and muscle pain associated
                with pregnancy. It also helps to decrease leg and arm swelling.
                This therapeutic massage will reduce stress and calm your mind.
                Our massage experts will ensure that you are comfortable and
                relaxed throughout the process.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 border-b-4 border-primary-color w-max pb-1">
                Reflexology
              </h2>
              <p>
                In this spa technique, our massage therapists will use their
                thumb, fingers, and hand to stimulate the stressed areas of your
                body. Reflexology is generally targeted towards your feet and
                promotes the overall health of your body and mind.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 border-b-4 border-primary-color w-max pb-1">
                Hot Stone Massage
              </h2>
              <p>
                Our massage therapists will use warmed stones to release toxins
                from your body. These stones will be strategically placed on
                specific areas of your body. The hot stones transmit heat that
                will reach deep into your skin and muscles. It will relieve pain
                and soothe your body.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 border-b-4 border-primary-color w-max pb-1">
                Aromatherapy
              </h2>
              <p>
                Therapeutic essential oils are used to revitalize, soothe, and
                uplift your spirits. Molecules of these oils will be both
                absorbed into your skin and inhaled to boost positive thinking.
                It will allow your body to heal naturally.
              </p>
            </div>
          </div>
        </div>
        {/* parallax img  */}
        <div className="my-10">
          <ParallaxComponent />
        </div>
        <div className="w-2/3 mx-auto">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-lg flex flex-col gap-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2 border-b-4 border-primary-color w-max pb-1">
                Lipo-Laser
              </h2>
              <p>
                At Elite SPA, we use the energy of laser light to heat up and
                soften excess fat that has accumulated in your body. The heat
                will target the treatment area and kill them without damaging
                the surrounding cells. Even after the completion of the
                treatment, the heat will continue to target the tissues that are
                holding your fat cells together.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 border-b-4 border-primary-color w-max pb-1">
                Ultrasonic Cavitation
              </h2>
              <p>
                This cosmetic procedure will break down your fat deposits. This
                technique is less invasive than liposuction and more convenient
                than traditional body contouring techniques. Our beauty
                therapists utilize ultrasonic radio waves to crush the fat
                cells. This excess fat is then absorbed into your lymphatic
                system.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 border-b-4 border-primary-color w-max pb-1">
                Pressotherapy
              </h2>
              <p>
                Our beauty experts will apply air pressure on various parts of
                your body. We will stimulate lymphatic drainage and eliminate
                toxins from your body. This process alternates between
                decompression and compression to tone your abdomen, arms, and
                legs. It will also detoxify your body and ease muscle aches or
                pains.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2 border-b-4 border-primary-color w-max pb-1">
                Anti-Cellulite Cupping Therapy
              </h2>
              <p>
                This Cupping therapy will create a vacuum that will pull your
                surface tissue and fat cells into the cup. Our trained beauty
                experts will treat your buttocks, thighs, and hips. If you are
                unhappy with the way your body looks due to the presence of
                cellulite, then this therapy is for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default aboutUs;
