import LandingNav from "./components/landing_comps/landing_nav";
import SectionFive from "./components/landing_comps/section_five/section_five";
import SectionFour from "./components/landing_comps/section_four/section_four";
import SectionOne from "./components/landing_comps/section_one/section_one";
import SectionThree from "./components/landing_comps/section_three/section_three";
import SectionTwo from "./components/landing_comps/section_two/section_two";
import SectionSix from "./components/landing_comps/section_six/section_six";

export default function Home() {
  return (
    <div className=" w-full h-full relative bg-gradient-to-br from-pink-400/30 via-cyan-500/20 to-orange-600/30 overflow-y-scroll">
      <LandingNav />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      {/* <SectionFive /> */}
      {/* <SectionSix /> */}
    </div>
  );
}
