import Header from "../components/NavBar/Header";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import ContactDetails from "../components/Contact/ContactDetails";
import { motion } from "framer-motion";
import { animationOne, transition2 } from "../Animations";

const ContactPage = () => {
  return (
    <motion.main
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition2}
    >
      <Header />
      <ContactDetails />
      <Contact />
      <Footer />
    </motion.main>
  );
};

export default ContactPage;
