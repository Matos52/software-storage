import Header from "../components/Header";
import About from "../components/About";
import Accommodation from "../components/Accommodation";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <>
      <section id="header">
        <Header />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="accommodation">
        <Accommodation />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
