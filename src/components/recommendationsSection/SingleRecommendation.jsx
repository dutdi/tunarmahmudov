import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleRecommendation = ({ image }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex justify-center w-full"
    >
      <div className="w-[800] h-[500] overflow-hidden rounded-lg border border-white shadow-lg">
        <img
          src={image}
          alt="Recommendation"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

export default SingleRecommendation;
