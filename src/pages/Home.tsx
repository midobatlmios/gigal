import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Activities from '../components/Activities';
import Manufacturing from '../components/Manufacturing';
import Products from '../components/Products';
import Values from '../components/Values';
import Certifications from '../components/Certifications';
import News from '../components/News';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Activities />
      <Manufacturing />
      <Products />
      <Values />
      <Certifications />
      <News />
      <CTA />
    </>
  );
}
