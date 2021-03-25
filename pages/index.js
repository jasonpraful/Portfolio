import LandingPage from "./components/LandingPage";
import TechnologiesPage from "./components/TechnologiesPage";
import ExperiencePage from "./components/ExperiencePage";
import EducationPage from "./components/EducationPage";
import CertificationsPage from "./components/CertificationsPage";
import ProjectsPage from "./components/ProjectsPage";
import FooterPage from "./components/FooterPage";
import SEO from "./components/SEO";

export default function Home() {
  return (
    <main>
      <SEO />
      <LandingPage />
      <TechnologiesPage />
      <ExperiencePage />
      <EducationPage />
      <CertificationsPage />
      {/* <ProjectsPage/> */}
      <FooterPage/>
    </main>
  );
}
