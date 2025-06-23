import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, description, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex w-full items-center gap-8 justify-end sm:flex-col md:flex-row"
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-white sm:text-center md:text-left">
          {name}
        </h2>
        <h3 className="text-md font-thin text-white font-special sm:text-center md:text-left">
          {year}
        </h3>
        <br />
        <p className="text-md text-white font-light mb-4 max-w-md sm:text-center md:text-left">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          className="text-lg flex gap-2 items-center text-blue hover:text-white transition-all duration-500 cursor-pointer sm:justify-self-center md:justify-self-start"
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>
      <div className="max-h-[400px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <img src={image} alt="website image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
