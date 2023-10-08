import { useLoaderData } from "react-router-dom";

import "./projects.css";
import ContactUs from "../ContactUs/ContactUs";

const Projects = () => {
  const projects = useLoaderData();

  return (
    <div>
      <div className="">
        <div className="headerBanner">
          <div className="headerBannerContent">
            <h1 className="text-4xl font-bold">Our Project</h1>
          </div>
          <div className="bgColor"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
          {projects.map((project) => (
            <>
              <div className="w-full" data-aos="fade-up">
                <div className="projectImg">
                  <img src={project.image} alt="" />
                  <div className="imgHover"></div>
                  <div className="imgHoverContent">
                    <a>Investment Management</a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Projects;
