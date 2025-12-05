import React from "react";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import FeaturedOffers from "../components/FeaturedOffers/FeaturedOffers";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Schedule from "../components/Schedule/Schedule";
import Contact from "../components/Contact/Contact";

const Home: React.FC = () => {
  return (
    <section>
      <Hero />
      <Categories />
      <FeaturedOffers />
      <WhyChooseUs />
      <Schedule />
      <Contact />
    </section>
  );
};

export default Home;
