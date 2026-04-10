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
      <section id="about" className="bg-gray-50">
        <About />
      </section>
      <section id="accommodation">
        <Accommodation />
      </section>
      <section id="testimonials" className="bg-gray-50">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
