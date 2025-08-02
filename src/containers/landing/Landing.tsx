import About from './about/About';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Hero from './hero/Hero';
import Stats from './hero/Stats';
import NavBar from './navbar/NavBar';
import Reviews from './reviews/Reviews';
import Services from './services/Services';

function Landing() {
  return (
    <>
      <NavBar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default Landing;
