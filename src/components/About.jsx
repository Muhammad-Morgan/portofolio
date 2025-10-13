import aboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutImg} alt="..." className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffe" />
          <p className="text-slate-600  mt-8 leading-loose">
            I’m a Front-End Developer focused on building clean, responsive, and user-friendly web interfaces using modern tools like React, Tailwind, and JavaScript.
            I enjoy turning complex ideas into seamless digital experiences with performance and accessibility in mind.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
