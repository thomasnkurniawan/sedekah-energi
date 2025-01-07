import AboutSection from "@/component/AboutSection";
import ArticleSection from "@/component/ArticleSection";
import DonateSection from "@/component/Cta-donate";
import Header from "@/component/Header";
import HeroSection from "@/component/HeroSection";
import ImpactSection from "@/component/ImpactSection";
import KnowledgeSection from "@/component/KonwledgeSection";
import MapSection from "@/component/MapSection";
import Quiz from "@/component/Quiz";
import SocialSection from "@/component/SocialSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <Quiz />
      <ImpactSection />
      <MapSection />
      <ArticleSection />
      <SocialSection />
      <DonateSection />
      <KnowledgeSection />
    </>
  );
}
