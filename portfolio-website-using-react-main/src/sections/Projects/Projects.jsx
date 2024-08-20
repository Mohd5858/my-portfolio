import styles from "./ProjectsStyles.module.css";

import ProjectCard from "../../common/ProjectCard";
import Portfolio from "../../assets/portfpliooics.jpeg";
import online from "../../assets/online-book-store-free-vector.jpg";
import Weather from "../../assets/weather-icons.jpeg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          link={"https://github.com/Mohd5858/REACT-WEATHER-APP"}
          src={Weather}
          h3="Weathet APP"
          p="weather forcasting"
        />
        <ProjectCard
          link={"https://github.com/Mohd5858/my-portfolio"}
          src={Portfolio}
          h3=" Portfolio website"
          p="Personal portolio"
        />
        <ProjectCard src={online} h3="Online Book Store" p="book Shop" />
      </div>
    </section>
  );
}

export default Projects;
