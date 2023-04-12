import Layout from "@/components/Layout";
import ServiceTopBar from "@/components/ServiceTopBar";
import React from "react";

const membership = () => {
  return (
    <Layout>
      <ServiceTopBar title="Membership" desc="Be a member of our family" />
      <div className="text-5xl font-bold h-52 flex items-center justify-center">
        Comming Soon
      </div>
    </Layout>
  );
};

export default membership;
