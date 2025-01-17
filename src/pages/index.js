import AboutSection from "@/component/AboutSection";
import ArticleSection from "@/component/ArticleSection";
import BaseLayout from "@/component/BaseLayout";
import DonateSection from "@/component/Cta-donate";
import HeroSection from "@/component/HeroSection";
import ImpactSection from "@/component/ImpactSection";
import KnowledgeSection from "@/component/KonwledgeSection";
import MapSection from "@/component/MapSection";
import Quiz from "@/component/Quiz";
import SocialSection from "@/component/SocialSection";
import { useRef, useState } from "react";

export default function Home({data}) {
  const myRef = useRef(null);

  const [showModalVideo, setShowModalVideo] = useState(null);

  const handleClickOption = (link) => {
    window.open(link, "_blank");
  };

  const executeScroll = () => myRef.current?.scrollIntoView();

  return (
    <BaseLayout showModalVideo={showModalVideo} setShowModalVideo={setShowModalVideo}>
      <HeroSection
        data={data.hero}
        onClickDonate={(link) => handleClickOption(link)}
        executeScroll={executeScroll}
      />
      <AboutSection ref={myRef} />
      <Quiz />
      <ImpactSection setShowModalVideo={setShowModalVideo} />
      <MapSection onClickDonate={(link) => handleClickOption(link)} />
      <ArticleSection />
      <SocialSection />
      <DonateSection onClickDonate={(link) => handleClickOption(link)} />
      <KnowledgeSection />
    </BaseLayout>
  );
}


export function getServerSideProps() {
  const data = {
    hero: {
      title: "Berbuat Baik untuk Bumi dan Sesama Melalui Sedekah Energi",
      subtitle:
        "<h3>Kontribusi untuk penyediaan energi terbarukan di masjid, solusi nyata <br /> menjaga ciptaan-Nya.</h3>",
    },
  };

  return {
    props: {
      data: { ...data },
    },
  };
}


