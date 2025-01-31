import Image from "next/image";
import NavigationBar from "./components/NavigationBar";
import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
import SkillsShowCase from "./components/SkillsShowCase";
import AdditionalSkills from "./components/AdditionalSkills";
import PortFolio from "./components/PortFolio";
import WorkExperience from "./components/WorkExperience";
import Footer from "./components/Footer";
import Achievement from "./components/Achievement";

export default function Home() {
  return (
    <main className="">
      <NavigationBar/>
      <HeroBanner/>
      <AboutMe/>
      <SkillsShowCase/>
      <AdditionalSkills/>
      <PortFolio/>
      <WorkExperience/>
      <Achievement/>
      <Footer/>
    </main>
  );
}
