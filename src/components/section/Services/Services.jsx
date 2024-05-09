import Card from "@/components/elements/Card/Card";
import React from "react";

const Services = () => {
  return (
    <>
      <div className="py-20 mx-5">
        <div className="grid lg:grid-cols-3 gap-5">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Services;
