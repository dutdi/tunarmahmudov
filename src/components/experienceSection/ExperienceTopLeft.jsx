import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-white font-bold uppercase text-3xl font-special text-center">
        Since 2021
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3+" text="Years" />
        <p className="font-bold text-6xl text-white">-</p>
        <ExperienceInfo number="10+" text="Projects" />
      </div>
      <p className="text-center mb-2">
        Versatile Full Stack Developer with 3+ years of experience building
        modern web applications across varied tech stacks. Known for quickly
        mastering unfamiliar tools and consistently delivering production-ready
        solutions that improve efficiency, scalability, and user experience.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
