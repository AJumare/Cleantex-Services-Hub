import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Clients } from "@/components/sections/Clients";
import { InstagramReels } from "@/components/sections/InstagramReels";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <InstagramReels />
        <Clients />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
