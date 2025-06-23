import { useState, useEffect } from "react";

const texts = [
  "Fast Learner",
  "Results-Driven",
  "Growth-Minded",
  "Analytical Thinker",
];

const SubHeroMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-y bg-white border-black text-blue flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4">
      <div className="hidden md:flex gap-24">
        {texts.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>

      <p className="md:hidden">{texts[currentIndex]}</p>
    </div>
  );
};

export default SubHeroMain;
