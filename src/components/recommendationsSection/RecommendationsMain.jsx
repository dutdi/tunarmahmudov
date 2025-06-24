import { useState } from "react";
import RecommendationsText from "./RecommendationsText";
import SingleRecommendation from "./SingleRecommendation";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const recommendations = [
  { image: "/tunarmahmudov/images/rcm1.png" },
  { image: "/tunarmahmudov/images/rcm2.png" },
  { image: "/tunarmahmudov/images/rcm3.png" },
  { image: "/tunarmahmudov/images/rcm4.png" },
];

const RecommendationsMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? recommendations.length - 1 : prev - 1
    );
  };

  // Move to next slide
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === recommendations.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div id="recommendations" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <RecommendationsText />
      </motion.div>

      {/* Desktop: slideshow */}
      <div className="hidden md:flex items-center justify-center mt-12 gap-8 relative">
        <button
          onClick={prevSlide}
          className="text-white text-2xl px-4 hover:text-orange transition"
          aria-label="Previous Recommendation"
        >
          ‹
        </button>
        <SingleRecommendation image={recommendations[currentIndex].image} />
        <button
          onClick={nextSlide}
          className="text-white text-2xl px-4 hover:text-orange transition"
          aria-label="Next Recommendation"
        >
          ›
        </button>
      </div>

      {/* Mobile: stacked */}
      <div className="flex flex-col gap-12 mt-12 md:hidden">
        {recommendations.map((rec, idx) => (
          <SingleRecommendation key={idx} image={rec.image} />
        ))}
      </div>

      <a
        href={"https://www.linkedin.com/in/tunarmahmudov/"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg flex gap-2 items-center text-blue hover:text-white transition-all duration-500 cursor-pointer justify-center mt-8"
      >
        View on LinkedIn
      </a>
    </div>
  );
};

export default RecommendationsMain;
