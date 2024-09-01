import Image from "next/image";
import { Inter, DM_Sans } from "next/font/google";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import GenAi from "@/components/GenAi";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import ParallaxComponent from "@/components/ParallaxComponent";

const inter = Inter({ subsets: ["latin"] });
const ds_sans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`text-white min-h-screen   ${ds_sans.className}`}>
      <ParallaxComponent />
      <Navbar />
      <Banner />
      <Services />
      <GenAi />
      <Team />
      <Testimonial />
      <Footer />
    </main>
  );
}
