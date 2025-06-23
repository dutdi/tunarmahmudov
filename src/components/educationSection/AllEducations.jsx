import SingleEducation from "./SingleEducation";

const educations = [
  {
    uni: "Bilkent University",
    faculty: "Bachelor of Science, Computer Science",
    date: "2016-2020",
    misc: [
      "Graduated from one of Turkey’s top-ranked engineering universities",
      "Full Scholarship Recipient and Honor Student",
      "Gained strong foundation in algorithms, data structures, and software design",
      "Completed team-based projects across web, mobile, and system development",
      "Built analytical thinking and problem-solving through rigorous coursework",
    ],
  },
  {
    uni: "Technical University of Munich",
    faculty: "Master of Science, Computer Science",
    date: "2021-2024",
    misc: [
      "Graduation with merit",
      "TUM is ranked as the top university in Germany and 22th place in QS World University Rankings in 2026",
      "Achieved the highest grade of 1.0 for my Master's thesis - Evaluating User Decision-Making in Responsible Tourism: A Green Destination Recommender.",
      "Portions of the thesis are to be showcased in international workshops due to its excellence.",
      "My articles are published in leading journals including ACM and Springer JITT",
    ],
  },
];

const AllEducations = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      <div className="flex flex-col items-center mt-[100px] "></div>
      {educations.map((education, index) => {
        return (
          <>
            <SingleEducation key={index} education={education} />
          </>
        );
      })}
    </div>
  );
};

export default AllEducations;
