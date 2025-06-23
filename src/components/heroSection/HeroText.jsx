import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-white "
      >
        Software Engineer | Full-stack Web Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-white font-bold uppercase"
      >
        Tunar <br className="sm:hidden md:block" />
        Mahmudov
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 mb-8"
      >
        Merit graduate of <b>TUM (22nd worldwide)</b> with publications
        <span className="hidden sm:inline">
          <br />
        </span>{" "}
        in <b>ACM and Springer JITT</b>. Creator of the internationally
        <span className="hidden sm:inline">
          <br />
        </span>{" "}
        recognized <b>Green Destination Recommender</b>. Over 3 years of
        <span className="hidden sm:inline">
          <br />
        </span>{" "}
        software engineering experience in <b>Germany</b>, delivering
        <span className="hidden sm:inline">
          <br />
        </span>{" "}
        scalable, reliable full-stack solutions to real-world problems.
      </motion.p>
    </div>
  );
};

export default HeroText;
