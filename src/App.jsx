import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Accommodation from "./components/Accommodation";
import Testimonials from "./components/Testimonials";
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Accommodation />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
