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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            enim nemo labore beatae laudantium modi placeat perferendis cum
            sapiente cumque aliquam quas vel corrupti suscipit, aspernatur
            nobis. Consectetur, eveniet nobis!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
