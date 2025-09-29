import React from "react";
import Hero from "../Hero/Hero";
import Program from "../Program/Program";
import Packages from "../Packages/Packages";
import Pricing from "../Pricing/Pricing";
import Installment from "../Installment/Installment";

const Main: React.FC = () => {
  return (
    <main>
      <Hero />
      <Program />
      <Packages />
      <Pricing />
      <Installment />
    </main>
  );
};

export default Main;
