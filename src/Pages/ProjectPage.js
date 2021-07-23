import Header from "../components/NavBar/Header";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects";
// import Cards from "../components/Projects/Cards";
import { motion } from "framer-motion";
import { animationOne, transition2 } from "../Animations";

const ProjectPage = () => {
  return (
    <motion.main
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition2}
    >
      <Header />
      <Projects />
      {/* <Cards /> */}
      <CallToAction />
      <Footer />
    </motion.main>
  );
};

export default ProjectPage;
