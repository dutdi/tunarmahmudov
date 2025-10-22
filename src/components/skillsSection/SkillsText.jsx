const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px] mb-[200px] max-w-4xl mx-auto px-4">
      <h2 className="text-6xl text-white mb-10">Skills</h2>
      <p className="text-lg text-center mb-10">
        Comprehensive skill set spanning full-stack development, cloud
        infrastructure, distributed systems, and modern software design.
        Proficient in key programming languages, frameworks, and architectural
        patterns. Strong grasp of system design, algorithms, and blockchain
        technologies, enabling robust, scalable, and maintainable solutions
        across diverse domains
      </p>
      <div className="w-full h-1 mt-8 mb-8 bg-white lg:block sm:hidden"></div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-left text-white">
        <div>
          <h3 className="text-xl font-medium mb-2 underline">
            Software Engineering & Design
          </h3>
          <p>
            OOP, System Design, Software Design Patterns, Algorithms & Data
            Structures, RESTful API Design, Microservices Architecture, Agile
            Development
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2 underline">
            Programming Languages
          </h3>
          <p>
            Java, JavaScript, TypeScript, C#, Python, SQL (MySQL, PostgreSQL),
            NoSQL (MongoDB)
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2 underline">Cloud & DevOps</h3>
          <p>AWS, Docker, Airflow, CI/CD, Git</p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-2 underline">
            Frameworks & Libraries
          </h3>
          <p>React, React Native, Node.js, Spring, Material UI</p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-2 underline">
            Blockchain & Distributed Systems
          </h3>
          <p>
            Smart Contracts, Blockchain Fundamentals, Distributed System Design,
            Consensus Algorithms
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-2 underline">
            Testing & Automation
          </h3>
          <p>JUnit, Automated Testing, Code Quality Tools</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsText;
