import Button from "@/components/Button";
import Layout from "@/components/Layout";
import ServiceTopBar from "@/components/ServiceTopBar";
import { Card } from "flowbite-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const packages = () => {
  return (
    <Layout>
      <Head>
        <title>Packages - Elite Spa</title>
      </Head>
      <ServiceTopBar
        title="Packages"
        desc="Grab our exciting packages and deals"
      />

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-4/5 lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 mx-auto mt-10 border-b-2 pb-10"
      >
        <div className="h-[28rem] w-full">
          <Image
            src="/images/packages2/special-event-2-nov-2022-628x1024.jpg"
            alt="My Image"
            width={500}
            height={500}
            className="h-full w-full"
          />
        </div>
        <div className="h-[28rem] w-full">
          <Image
            src="/images/packages2/special-event-nov-2022-628x1024.jpg"
            alt="My Image"
            width={500}
            height={500}
            className="h-full w-full"
          />
        </div>
        <div className="h-[28rem] w-full">
          <Image
            src="/images/packages2/weight-loss-summer-offer-577x1024.jpg"
            alt="My Image"
            width={500}
            height={500}
            className="h-full w-full"
          />
        </div>
        <div className="h-[28rem] w-full">
          <Image
            src="/images/packages2/weight-loss.jpeg"
            alt="My Image"
            width={500}
            height={500}
            className="h-full w-full"
          />
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex justify-center"
      >
        <h1 className="mt-10 text-4xl font-bold border-b-4 border-primary-color w-max">
          PACKAGES AND DEALS
        </h1>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-4/5 lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mx-auto mt-10"
      >
        <div className="card-package">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/images/packages2/Pressotherapy-body-2-.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Lipo Laser
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Three Fat Burning Laser Lipo Treatments; Restrictions Apply: $89
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Five Fat Burning Laser Lipo Treatments; Restrictions Apply: $169
            </p>
            <Link
              href="/shop-service/lipo-laser"
              className="flex justify-center"
            >
              <Button name="Learn More" />
            </Link>
          </Card>
        </div>
        <div className="card-package">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/images/packages2/IMG_9676-768x505.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pressotherapy
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              One Full-Body Pressotherapy Session: $29
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Two Full-Body Pressotherapy Sessions: $55
            </p>
            <Link
              href="/shop-service/lipo-laser"
              className="flex justify-center"
            >
              <Button name="Learn More" />
            </Link>
          </Card>
        </div>
        <div className="card-package">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/images/packages2/home-banner-8-768x576.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hair Restoration
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              One Laser Hair Restoration Session with Consultation & Analysis:
              $32
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Four Laser Hair Regrowth Treatments with Consultation & Scalp
              Analysis: $128
            </p>
            <Link
              href="/shop-service/lipo-laser"
              className="flex justify-center"
            >
              <Button name="Learn More" />
            </Link>
          </Card>
        </div>
        <div className="card-package">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/images/packages2/fat-freeze-florida-4-768x471.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fat Freezing
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Two Sessions of Fat Freezing for Stomach, Thighs, Love Handles;
              Restrictions Apply: $226
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              TTwo Sessions of Fat-Freezing with Lymphatic Drainage: $450
            </p>
            <Link
              href="/shop-service/fat-freezing-cryolipolysis"
              className="flex justify-center"
            >
              <Button name="Learn More" />
            </Link>
          </Card>
        </div>
        <div className="card-package">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/images/packages2/home-banner-3-768x576.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fat-Freezing Cryolipolysis Chin
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              One 30-Minute Cryolipolysis Session for Chin: $199
            </p>
            <Link
              href="/shop-service/fat-freezing-cryolipolysis"
              className="flex justify-center"
            >
              <Button name="Learn More" />
            </Link>
          </Card>
        </div>
        <div className="card-package">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/images/packages2/home-banner-4-768x576.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fat-Freezing Cryolipolysis
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              One Fat-Freezing Cryolipolysis Treatment: $145
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Two Fat-Freezing Cryolipolysis Treatments: $265
            </p>
            <Link
              href="/shop-service/fat-freezing-cryolipolysis"
              className="flex justify-center"
            >
              <Button name="Learn More" />
            </Link>
          </Card>
        </div>
        <div className="card-package">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/images/packages2/home-banner-7-768x576.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              HIFU
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              HIFU Ultrasonic Skin Lift Treatment for Full Face: $250
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              HIFU Ultrasonic Skin Lift Treatment for Full Face & Neck: $420
            </p>
            <Link
              href="/shop-service/7d-hifu-system"
              className="flex justify-center"
            >
              <Button name="Learn More" />
            </Link>
          </Card>
        </div>
        <div className="card-package">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/images/packages2/led-light-therapy-768x785.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              LED Light Treatment
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              One LED light treatment for Face, Neck: $35{" "}
              <span className="line-through">$89</span>
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Two Treatments Acne LED light session: $65{" "}
              <span className="line-through">$159</span>
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Two Treatments Age spots and Wrinkles or Whitening with LED
              lights: $85 <span className="line-through">$180</span>
            </p>
            <Link
              href="/shop-service/fat-freezing-cryolipolysis"
              className="flex justify-center"
            >
              <Button name="Learn More" />
            </Link>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default packages;
