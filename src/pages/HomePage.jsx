import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import Contact from '../components/Contact';

// We need to wrap the Hero component to give it an ID for scroll spying
const HeroSection = () => (
  <section id="home" className="scroll-mt-0">
    <Hero />
  </section>
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Services />
      <Pricing />
      <Portfolio />
      <Team />
      <Contact />
    </>
  );
}
