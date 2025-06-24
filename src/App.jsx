import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import EducationMain from "./components/educationSection/EducationMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import PublicationsMain from "./components/publicationsSection/PublicationsMain";
import RecommendationsMain from "./components/recommendationsSection/RecommendationsMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <EducationMain />
      <ProjectsMain />
      <PublicationsMain />
      <RecommendationsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
}

export default App;
