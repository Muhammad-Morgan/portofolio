import SectionTitle from "./SectionTitle";
import Project from "./Project";
import projects from "../utiles/contentful";
const Projects = () => {
  return (
    <section className="align-element py-20" id="projects">
      <SectionTitle text="web creations" />
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 py-16">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
