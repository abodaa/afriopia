import React from "react";
import Nav from "./components/Nav";

import Hero from "./components/Hero";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionFooter from "./components/SectionFooter";

export default function App() {
  return (
    <main className="relative z-10 w-full overflow-x-clip">
      <Nav />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionFooter />
    </main>
  );
}
