import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Education",
      section: "education",
    },
    {
      name: "Projects",
      section: "projects",
    },
    {
      name: "Publications",
      section: "publications",
    },
    {
      name: "Recommendations",
      section: "recommendations",
    },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-white mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-white ">Tunar Mahmudov</p>
        <ul className="flex gap-4 text-white text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-white">
        © 2025 Tunar Mahmudov | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
