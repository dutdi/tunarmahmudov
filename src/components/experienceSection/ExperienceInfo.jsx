const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-6xl text-blue">{number}</p>
      <p className="font-bold text-xl text-white uppercase">{text}</p>
    </div>
  );
};

export default ExperienceInfo;
