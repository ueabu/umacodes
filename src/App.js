import * as React from "react";
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import About from "./components/About";
import LatestProjects from "./components/LatestProjects";

export default function App() {
  return (
    <div>
      <Layout>
        <div id="Home">
          <Banner />
        </div>
        <div id="About">
          <About />
        </div>
        <div id="Project">
          <LatestProjects />
        </div>
      </Layout>
    </div>
  );
}
