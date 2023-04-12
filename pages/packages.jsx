import Button from "@/components/Button";
import Layout from "@/components/Layout";
import ServiceTopBar from "@/components/ServiceTopBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const packages = () => {
  return (
    <Layout>
      <ServiceTopBar
        title="Packages"
        desc="Grab our exciting packages and deals"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-4/5 lg:w-2/3 mx-auto my-10">
        <div className="border p-10 shadow-lg">
          <Image
            src="/images/packages2/led-light-therapy-768x785.jpg"
            alt="My Image"
            width={500}
            height={500}
            className="w-72 mx-auto mb-1"
          />
          <div className="text-center flex flex-col gap-1">
            <h2 className="header-style">LED Light Treatment</h2>
            <p className="text-lg font-semibold">
              One LED light treatment for Face, Neck: $35{" "}
              <span className="line-through">$89</span>
            </p>
            <p className="text-lg font-semibold">
              Two Treatments Acne LED light session: $65{" "}
              <span className="line-through">$159</span>
            </p>
            <p className="text-lg font-semibold">
              Two Treatments Age spots and Wrinkles or Whitening with LED
              lights: session: $65 <span className="line-through">$159</span>
            </p>
            <Link href="/">
              <Button name="Learn More" />
            </Link>
          </div>
        </div>
        <div className="border p-10 shadow-lg">
          <Image
            src="/images/packages2/Pressotherapy-body-2-.jpg"
            alt="My Image"
            width={500}
            height={500}
            className="w-72 mx-auto mb-1"
          />
          <div className="text-center flex flex-col gap-1">
            <h2 className="header-style">Lipo Laser</h2>
            <p className="text-lg font-semibold">
              Three Fat Burning Laser Lipo Treatments;
            </p>
            <p className="text-lg font-semibold">Restrictions Apply: $89</p>
            <p className="text-lg font-semibold">Five Fat Burning Laser Lipo</p>
            <p className="text-lg font-semibold">Restrictions Apply: $169</p>
            <Link href="/">
              <Button name="Learn More" />
            </Link>
          </div>
        </div>
        <div className="border p-10 shadow-lg">
          <Image
            src="/images/packages2/IMG_9676-768x505.jpg"
            alt="My Image"
            width={500}
            height={500}
            className="w-72 mx-auto mb-1"
          />
          <div className="text-center flex flex-col gap-1">
            <h2 className="header-style">Pressotherapy</h2>
            <p className="text-lg font-semibold">
              One Full-Body Pressotherapy Session: $29
            </p>
            <p className="text-lg font-semibold">
              Two Full-Body Pressotherapy Sessions: $55
            </p>
            <Link href="/">
              <Button name="Learn More" />
            </Link>
          </div>
        </div>
        <div className="border p-10 shadow-lg">
          <Image
            src="/images/packages2/home-banner-8-768x576.jpg"
            alt="My Image"
            width={500}
            height={500}
            className="w-72 mx-auto mb-1"
          />
          <div className="text-center flex flex-col gap-1">
            <h2 className="header-style">Hair Restoration</h2>
            <p className="text-lg font-semibold">
              One Laser Hair Restoration Session with Consultation & Analysis:
              $32
            </p>
            <p className="text-lg font-semibold">
              Four Laser Hair Regrowth Treatments with Consultation & Scalp
              Analysis: $128
            </p>
            <Link href="/">
              <Button name="Learn More" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default packages;
