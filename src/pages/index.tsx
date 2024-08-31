import Image from "next/image";
import { Inter, DM_Sans } from "next/font/google";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import GenAi from "@/components/GenAi";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });
const ds_sans = DM_Sans({ subsets: ["latin"] });

export default function Home() {
  // meta tags
  const meta = {
    title: "Blockstak | Home",
    description:
      "Empowered by cutting-edge technology and bold ideas, we're not just preparing for the future—we're designing it.", 
    image: "/banner.svg",
    url: "https://blockstak.com",
  };

  return (
    <main className={`text-white min-h-screen   ${ds_sans.className}`}>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          url: meta.url,
          title: meta.title,
          description: meta.description,
          images: [
            {
              url: meta.image,
              width: 1200,
              height: 627,
              alt: "Blockstak",
            },
          ],
          site_name: "Blockstak",
        }}
      />
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
