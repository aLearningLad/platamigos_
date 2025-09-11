import LandingNav from "./components/landing_comps/landing_nav";
import SectionFour from "./components/landing_comps/section_four/section_four";
import SectionOne from "./components/landing_comps/section_one/section_one";
import SectionThree from "./components/landing_comps/section_three/section_three";
import SectionTwo from "./components/landing_comps/section_two/section_two";

export default function Home() {
  return (
    <div className=" w-full h-full flex flex-col bg-gradient-to-br from-pink-400/30 via-cyan-500/30 to-orange-600/30 ">
      <LandingNav />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}
