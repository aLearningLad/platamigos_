import LandingNav from "./components/landing_comps/landing_nav";
import SectionOne from "./components/landing_comps/section_one/section_one";
import SectionTwo from "./components/landing_comps/section_two/section_two";

export default function Home() {
  return (
    <div className=" w-full h-full flex flex-col bg-gradient-to-br from-pink-400/30 via-cyan-500/30 to-orange-600/30 ">
      <LandingNav />
      <SectionOne />
      <SectionTwo />
      <div className=" h-[100vh] w-full  border-2 border-green-500" />
      <div className=" h-[100vh] w-full  border-2 border-cyan-500" />
    </div>
  );
}
