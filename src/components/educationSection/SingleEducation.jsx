import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleEducation = ({ education }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[400px] md:w-[600px] sm:h-auto sm:w-full rounded-2xl mt-12 p-4"
    >
      <p className="font-bold text-blue">{education.uni}</p>
      <p className="text-white">{education.faculty}</p>
      <p className="text-white">{education.date}</p>
      <ul className="list-disc mt-4 pl-4">
        {education.misc.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleEducation;
