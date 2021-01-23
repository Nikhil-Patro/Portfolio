import React from "react";
import { Layout } from "components/common";
import { Intro, Contact, Projects } from "components/landing";

export default () => (
  <Layout>
    <Intro />
    <Projects />
    <Contact />
  </Layout>
);
