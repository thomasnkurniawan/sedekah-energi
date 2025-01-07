import AreasSection from "./AreasSection";
import TestimoniSection from "./TestimoniSection";

export default function ImpactSection({ setShowModalVideo }) {
  return (
    <div className="bg-gradient-custom">
      <AreasSection setShowModalVideo={setShowModalVideo} />
      <TestimoniSection />
    </div>
  );
}
