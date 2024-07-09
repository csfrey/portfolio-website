import React from "react";
import SiteSummary from "../components/SiteSummary";
import AboutMe from "../components/AboutMe";
import ServicesSummaries from "../components/ServicesSummaries";

const HomePage = () => {
  return (
    <React.Fragment>
      <SiteSummary />
      <AboutMe />
      <ServicesSummaries />
    </React.Fragment>
  );
};

export default HomePage;
