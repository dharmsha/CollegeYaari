import Hero from "@/components/Hero";
import Cuttof from "@/components/Cutttof";
import Vision from "@/components/Vision";
import Founder from "@/components/Founder";
import FloatingButtons from "@/components/FloatingButtons";  // ✅ Import FloatingButtons

export default function Home() {
  return (
    <main>
      <Hero />
      <Cuttof />
      <Vision />
      <Founder />
      <FloatingButtons />  {/* ✅ Add FloatingButtons here */}
    </main>
  );
}