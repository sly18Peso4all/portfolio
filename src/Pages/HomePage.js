import Header from "../components/NavBar/Header";
import HomePageHero from "../components/HomePageHero";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import CallToAction from "../components/CallToAction/CallToAction";
import { motion } from "framer-motion";
import { animationOne, transition } from "../Animations";

const HomePage = () => {
  return (
    <motion.main
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Header />
      <HomePageHero />
      <About />
      <CallToAction />
      <Footer />
    </motion.main>
  );
};

export default HomePage;
