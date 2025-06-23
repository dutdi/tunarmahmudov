import SingleSkill from "./SingleSkill";
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

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
