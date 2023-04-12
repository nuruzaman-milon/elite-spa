import Button from "@/components/Button";
import Layout from "@/components/Layout";
import ServiceTopBar from "@/components/ServiceTopBar";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <Layout>
      <ServiceTopBar
        title="Shop Service"
        desc="Our treatments are gaining worldwide popularity owing to its fast and effective results."
      />
      <div className="w-4/5 lg:w-2/3 mx-auto mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-bold">Fat Freeze Cryolipolysis</h1>
            <p className="text-lg">
              Elite Spa offers you a variety of relaxing spa treatments. One of
              our specialties is Fat Freeze Cryolipolysis or CoolSculpting. Our
              service helps you to find an easy and simple method for fat
              deposit removal in your body...{" "}
            </p>
            <Link href="/shop-service/fat-freezing-cryolipolysis">
              <Button name="Learn More" />
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-bold">Lipo Laser Treatment</h1>
            <p className="text-lg">
              Need a body contouring but afraid of the painful surgeries? At
              Elite SPA, we offer non-invasive skin and body treatments. Our
              Lipo-Laser treatment will enhance your body aesthetics including
              cellulite reduction…
            </p>
            <Link href="/shop-service/lipo-laser">
              <Button name="Learn More" />
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-bold">4D HIFU System</h1>
            <p className="text-lg">
              As soon as we cross into our 30s, we experience sagging skin and
              wrinkles. Wrinkles are the signs of aging. A majority of the women
              spend their time and money on anti-aging creams and more invasive…
            </p>
            <Link href="/shop-service/7d-hifu-system">
              <Button name="Learn More" />
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-bold">
              Radio Frequency Skin Tightening
            </h1>
            <p className="text-lg">
              Elite Spa helps you to find the best solutions to rejuvenate your
              skin. Specialized in Radio Frequency Skin Tightening, our
              treatments help you to increase the production of collagen…
            </p>
            <Link href="/shop-service/fat-freezing-cryolipolysis">
              <Button name="Learn More" />
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-bold">Ultrasonic Cavitation</h1>
            <p className="text-lg">
              Ultrasonic Cavitation is a new and exciting body sculpting
              technique that reshapes your targeted areas. It creates no
              discomfort while eliminating excess fat from your body. Gone are
              the days of painful surgeries…
            </p>
            <Link href="/shop-service/fat-freezing-cryolipolysis">
              <Button name="Learn More" />
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-bold">Microneedling – RF</h1>
            <p className="text-lg">
              Microneedling RF treatment does create controlled injuries in the
              skin, but it does not leave your face resembling on aerated front
              lawn. The needle punctures are so small that, unaided, no one can
              soon…
            </p>
            <Link href="/shop-service/fat-freezing-cryolipolysis">
              <Button name="Learn More" />
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-bold">Hair Regrowth Treatment</h1>
            <p className="text-lg">
              Hair loss is a common and serious problem nowadays. Hair loss can
              make you bothered about how you look, how your appearance has been
              changed since after you have started losing your hair...
            </p>
            <Link href="/shop-service/fat-freezing-cryolipolysis">
              <Button name="Learn More" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
