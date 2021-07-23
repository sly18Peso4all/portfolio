import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <div style={{ backgroundImage: "url(/assets/background-stars.svg)" }}>
      <Router>
        <ScrollToTop />
        <SocialIcons position={"side"} />
        <AnimatePresence exitBeforeEnter>
          <div className="container">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/projects">
                <ProjectPage />
              </Route>
              <Route path="/contact-me">
                <ContactPage />
              </Route>
            </Switch>
          </div>
        </AnimatePresence>
      </Router>
    </div>
  );
};

export default App;
