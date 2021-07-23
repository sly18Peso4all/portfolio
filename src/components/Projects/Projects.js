import { IoMdArrowDropright } from "react-icons/io";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import project_data from "../../Data/project_data";

const Projects = () => {
  return (
    <section className="project-container">
      {project_data.map((project, index) =>
        index % 2 !== 0 ? (
          <div className="project-background" key={project.id}>
            <div className="project-details">
              <h3 className="project-details__title">{project.title}</h3>
              <p className="prroject-details__desc">{project.description}</p>
              <p className="project-details__desc">
                Here are technologies that was utilized:
              </p>

              {project.techs.map((tech, index) => (
                <span className="project-details__skills" key={index}>
                  <small className="skills-icon">
                    <IoMdArrowDropright
                      size={20}
                      style={{ color: "#eda44a" }}
                    />
                  </small>
                  <small>{tech}</small>
                </span>
              ))}
              <div className="project-details__icon">
                <Link
                  to={project.github}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  <ImGithub
                    size={25}
                    style={{ color: "#f1f1f1" }}
                    className="git-icon"
                  />
                </Link>
              </div>
              <Button
                text={"VIEW PROJECT"}
                type={"one"}
                url={project.link}
                target={"_blank"}
                rel={"noreferrer"}
              />
            </div>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ) : (
          <div className="project-background" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-details">
              <h3 className="project-details__title">{project.title}</h3>
              <p className="prroject-details__desc">{project.description}</p>
              <p className="project-details__desc">
                Here are technologies that was utilized:
              </p>

              {project.techs.map((tech, index) => (
                <span className="project-details__skills" key={index}>
                  <small className="skills-icon">
                    <IoMdArrowDropright
                      size={20}
                      style={{ color: "#eda44a" }}
                    />
                  </small>
                  <small>{tech}</small>
                </span>
              ))}
              <div className="project-details__icon">
                <Link to={project.github} target={"_blank"} rel={"noreferrer"}>
                  <ImGithub
                    size={25}
                    style={{ color: "#f1f1f1" }}
                    className="git-icon"
                  />
                </Link>
              </div>
              <Button
                text={"VIEW PROJECT"}
                type={"one"}
                url={project.link}
                target={"_blank"}
                rel={"noreferrer"}
              />
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Projects;
