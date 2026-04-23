import Header from "../sections/Header";
import Accommodation from "../sections/Accommodation";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import About from "../sections/About";

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
      <section id="testimonials" className="bg-gray-50 md:scroll-mt-32">
        <Testimonials />
      </section>
      <section id="contact" className="md:scroll-mt-32">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
