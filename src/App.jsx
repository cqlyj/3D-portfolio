import About from "./sections/About";
// import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      {/* <Clients></Clients> */}
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
};

export default App;
