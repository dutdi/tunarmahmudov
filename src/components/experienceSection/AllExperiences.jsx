import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Developer",
    company: "Formpress | Ankara, Turkey",
    date: "2020-2021",
    responsibilities: [
      "Developed customizable forms using HTML, CSS, and React",
      "Enhanced functionality for both open-source and premium plans",
      "Collaborated closely with a teammate on design and implementation",
      "Improved platform accessibility and overall user-friendliness for users",
    ],
  },
  {
    job: "Full Stack Developer",
    company: "Technical University of Munich | Germany",
    date: "2021",
    responsibilities: [
      "Architected multi-component system: iOS app, Web GUI, server",
      "Used SQLite with Docker for lightweight, containerized storage",
      "Implemented automated backups and CI/CD pipelines for deployment",
      "Delivered iOS health app for BBU'01 basketball club coordination",
    ],
  },
  {
    job: "Full Stack Developer and Tutor",
    company: "Technical University of Munich | Germany",
    date: "2022 - 2023",
    responsibilities: [
      "Contributed to Artemis e-learning platform’s frontend and backend",
      "Reviewed 40+ pull requests improving performance, features, and security",
      "Built task limit feature for programming exercises using Spring Boot",
      "Mentored 700+ students, creating automated assignments and exams",
    ],
  },
  {
    job: "Full Stack Developer",
    company: "WeTheBrands | Munich, Germany",
    date: "2022 - 2024",
    responsibilities: [
      "Led full-stack development to improve efficiency and drive revenue",
      "Built orchestration tools using AWS, Node.js, Python, and React",
      "Automated cross-platform data flows and real-time system integrations",
      "Simplified team workflows and supported hiring with technical assessments",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 3 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-white lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
