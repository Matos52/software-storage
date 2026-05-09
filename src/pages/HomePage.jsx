import Header from "../sections/Header";
import Accommodation from "../sections/Accommodation";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import About from "../sections/About";
import Gallery from "../sections/Gallery";

const HomePage = () => {
  return (
    <>
      <section id="header">
        <Header />
      </section>
      <section id="about" className="bg-gray-50 md:scroll-mt-32">
        <About />
      </section>
      <section id="accommodation" className="md:scroll-mt-32">
        <Accommodation />
      </section>
      <section id="gallery" className="bg-gray-50 md:scroll-mt-32">
        <Gallery />
      </section>
      <section id="testimonials" className="md:scroll-mt-32">
        <Testimonials />
      </section>
      <section id="contact" className="bg-gray-50 md:scroll-mt-32">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
