import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-white mb-10">About Me</h2>
      <p>
        I'm Tunar Mahmudov, a Software Engineer passionate about creating
        scalable, data-driven applications that solve real-world problems. With
        over 3 years of professional experience and a Master’s degree in
        Computer Science from the Technical University of Munich (TUM), I
        combine strong academic foundations with practical expertise. I thrive
        in fast-paced environments and confidently take on projects—even those
        involving unfamiliar technologies—by rapidly mastering new stacks and
        delivering high-quality solutions that meet or exceed expectations.{" "}
      </p>
      <br />
      <p>
        My technical toolkit includes Java, React, Node.js, AWS, and
        cloud-native technologies, enabling me to build efficient, user-focused
        systems across diverse domains. From automating complex workflows to
        developing educational platforms impacting hundreds of students, I am
        committed to clean code, collaboration, and continuous learning. I’m
        always eager to embrace meaningful challenges where I can apply my
        adaptability and drive to create lasting technological impact.
      </p>
      <button className="border border-white rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-white transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-blue transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
