import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Green Destination Recommender",
    year: "Sep 2023 - Mar 2024",
    description:
      "Green Destination Recommender is a web-based application designed to promote responsible and sustainable tourism by providing personalized travel recommendations. It aligns users’ preferences—such as departure city, travel month, and interests—with eco-friendly destinations that prioritize environmental conservation and social well-being. The platform evaluates transport options (train, driving, flight) and factors like CO₂ emissions, seasonal suitability, destination popularity via Google Trends, and travel duration to suggest sustainable routes and locations. Integrated mapping and detailed destination information guide users toward choices that minimize ecological impact while enhancing local community benefits. This project underscores the balance between personalized travel experiences and sustainability goals, encouraging users to make environmentally conscious decisions aligned with responsible tourism principles.",
    image: "tunarmahmudov/images/gdr.png",
    link: "https://gdr-demo.web.app/",
  },
  {
    name: "Retail Investor Biases",
    year: "Nov 2021 - Dec 2021",
    description:
      "Retail Investor Biases is an interactive web tool that helps retail investors identify and quantify cognitive biases affecting their decisions. Based on the Implicit Association Test (IAT) methodology, it measures how strongly users associate investment concepts—like Stocks versus Cryptocurrencies—with positive or negative attributes. By analyzing response times to paired scenarios, the tool detects biases such as representativeness heuristic, anchoring, overconfidence, herding, disposition effect, and action bias. This project adapts the IAT framework, using investment-specific scenarios instead of traditional item sorting, providing users actionable insights into their decision patterns. Its goal is to raise bias awareness and offer solutions to promote more rational, informed investing.",
    image: "tunarmahmudov/images/rib.png",
    link: "https://retail-investor-biases.web.app/",
  },
  {
    name: "TrainLens",
    year: "Apr 2021 - Jul 2021",
    description:
      "The project was realized within the iPraktikum SS2021 in cooperation with the BBU'01 basketball club of Germany. The purpose of the project is to provide the club with valuable health statistics and analysis to improve internal coordination and guidance for coaches, athletic trainers, and management. TrainLens is a system that monitors the health data of basketball players. It provides insights into the health and performance status of individual players and whole teams. TrainLens also detects abnormalities and automatically notifies coaches and athletic trainers, accelerating the decision-making processes in the club. The overall purpose and goal of this application is to improve and optimize the prevention of injuries by digitalizing the monitoring process of the players' health data.",
    image: "tunarmahmudov/images/trainlens.png",
    link: "https://ase.in.tum.de/lehrstuhl_1/projects/all-projects/151-teaching/st21/1214-results-of-the-ipraktikum-ss2021",
  },
  {
    name: "Kxt-Bx",
    year: "May 2019 - Jun 2019",
    description:
      "Embark on an exhilarating cosmic journey in my 3D Unity rocket game! Navigate a sleek rocket through 8 challenging levels—from calm space to busy planetary orbits. Your mission: safely guide the rocket to its endpoint while dodging obstacles that threaten your progress. Race against time as collisions reduce your rocket’s health, and rival rockets aggressively pursue you. Test your piloting skills, strategize your moves, and outmaneuver foes in this pulse-pounding space adventure. Ready to defy gravity and conquer the cosmos?",
    image: "tunarmahmudov/images/kxtbx.png",
    link: "https://simmer.io/@tinabd14/kxt-bx",
  },
  {
    name: "Walls & Warriors",
    year: "Sep 2018 - Dec 2018",
    description:
      "The principle of this game is placing four walls on the game board so that all the blue knights are inside the enclosure and all the red knights are on the outside. But instead of defending an ancient city, you now have to defend a castle. The knights are more detailed and more stable, the walls are bigger and easier to handle, and with 80 challenges instead of the former 60, there was space to add a few easier challenges that include hints. However, there is always only one correct solution, which can be found at the back of the challenge booklet. For ages 8 to adult. Developed as a team of 5 students.",
    image: "tunarmahmudov/images/ww.png",
    link: "https://www.youtube.com/watch?v=-tc4JrG7u9U",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
