import Button from "../Buttons/Button";
import { IoMdArrowDropright } from "react-icons/io";
import skills from "../../Data/skills";
import Img from "./portfolio-img.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__details">
        <h2 className="about__title">About Me</h2>
        <p className="about__text">
          Hello! My name is Joseph and I am passionate about web applications. I
          am intrigued by the entire web development cycle. I am proficient in
          HTML, CSS and Javascript. ReactJS is my preferred framework. I also
          have some experience with VueJS.
        </p>
        <p className="about__text">
          When I am not coding, you may find me on the football field or going
          for a run. I also enjoy reading inspirational books that improve my
          mental wellbeing.
        </p>
        <p className="about__text">
          Here are a few technologies I’ve recently worked on:
        </p>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill.id}>
              <span className="skills-icon">
                <IoMdArrowDropright size={20} style={{ color: "#eda44a" }} />
              </span>
              <span>{skill.title}</span>
            </li>
          ))}
        </ul>
        <Button text={"GO TO PROJECTS"} type={"one"} url={"/projects"} />
      </div>
      <div className="about__img">
        <img src={Img} alt="Person" />
      </div>
    </section>
  );
};

export default About;
