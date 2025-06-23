import { FaDocker } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "Node",
    icon: FaNode,
  },
  {
    skill: "PostgreSQL",
    icon: BiLogoPostgresql,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "AWS",
    icon: FaAws,
  },
  {
    skill: "Docker",
    icon: FaDocker,
  },
  {
    skill: "Git",
    icon: FaGit,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-white" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
