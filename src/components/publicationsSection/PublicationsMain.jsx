import PublicationsText from "./PublicationsText";
import SinglePublication from "./SinglePublication";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const publications = [
  {
    name: "A User Interface Study on Sustainable City Trip Recommendations",
    journal: "Arxiv",
    year: "May 18, 2024",
    description:
      "This study explores how UI design influences sustainable travel decisions. We evaluated features like sustainability labels, popularity scores, and seasonality tags to guide user choices. A user study revealed that these indicators helped users prefer lower-emission, less crowded destinations. Clear visual cues for sustainability significantly shifted preferences toward greener alternatives. The findings offer practical insights for integrating eco-awareness into future recommender system interfaces.",
    link: "https://doi.org/10.48550/arXiv.2405.11243",
  },
  {
    name: "Green Destination Recommender: A Web Application to Encourage Responsible City Trip Recommendations",
    journal: "Association for Computing Machinery",
    year: "Jun 28, 2024",
    description:
      "We introduce the Green Destination Recommender (GDR), an application that prioritizes Societal Fairness (S-Fairness) by encouraging environmentally conscious decisions. GDR recommends sustainable tourism destinations based on the user’s starting location, travel month, and specific interests. The application promotes ecologically friendly options by recommending less popular yet appealing destinations, considering the emissions from transport to reach the destination and the seasonal demand.",
    link: "https://dl.acm.org/doi/10.1145/3631700.3664909",
  },
  {
    name: "Modeling sustainable city trips: integrating emissions, popularity, and seasonality into tourism recommender systems",
    journal: "SPRINGER NATURE - Information Technology and Tourism",
    year: "Jan 9, 2025",
    description:
      "Tourism affects not only the industry but also society and the environment. We propose a sustainability indicator for city trip recommendations, integrating CO₂ emissions, destination popularity, and seasonal demand. Our system considers users’ starting point and travel month to recommend cities that reduce ecological impact. We use real-world data from Google Trends, Tripadvisor, Airbnb, and TourMIS, combined with a user study to determine trade-offs in decision-making. This work demonstrates how sustainability-aware recommender systems can promote responsible travel.",
    link: "https://link.springer.com/article/10.1007/s40558-024-00303-1",
  },
];

const PublicationsMain = () => {
  return (
    <div id="publications" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <PublicationsText />
      </motion.div>
      <div className="flex md:flex-row sm:flex-col gap-20 max-w-[900px] mx-auto mt-12 items-start">
        {publications.map((publication, index) => {
          return (
            <SinglePublication
              key={index}
              name={publication.name}
              journal={publication.journal}
              year={publication.year}
              description={publication.description}
              link={publication.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PublicationsMain;
