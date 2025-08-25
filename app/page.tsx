import LandingNav from "./components/landing_comps/landing_nav";
import SectionOne from "./components/landing_comps/section_one/section_one";

export default function Home() {
  return (
    <div className=" w-full h-full flex flex-col ">
      <LandingNav />
      <SectionOne />
    </div>
  );
}
