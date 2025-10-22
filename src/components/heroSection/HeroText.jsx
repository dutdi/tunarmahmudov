import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-5 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-white "
      >
        Software Engineer | Backend Developer
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
        Software Engineer with 3 years of professional experience
        <span className="sm:hidden md:inline">
          <br />
        </span>{" "}
        in <b>Java, Node.js, PostgreSQL, and AWS.</b> Graduated with{" "}
        <b>distinction</b>
        <span className="sm:hidden md:inline">
          <br />
        </span>{" "}
        from the Technical University of Munich (TUM), ranked{" "}
        <b>22nd worldwide</b>
        <span className="sm:hidden md:inline">
          <br />
        </span>{" "}
        and <b>1st in Germany</b>, earning the highest thesis score with works
        <span className="sm:hidden md:inline">
          <br />
        </span>{" "}
        published in <b>ACM and Springer Nature</b>, and presented
        internationally.
      </motion.p>
    </div>
  );
};

export default HeroText;

/*



*/
