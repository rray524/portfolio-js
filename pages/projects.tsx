
import { useState } from "react";
import ProjectCard from "../components/ProjectCard"
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";

const projects = () => {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");
    const handlerFilterCategory = (category: Category | "all") => {
        if (category === "all") {
            setProjects(projectsData);
            setActive(category);
            return;
        }

        const newArray = projectsData.filter((project) =>
            project.category.includes(category)
        );
        setProjects(newArray);
        setActive(category);
    };
    return (
        <div className="px-5">
            <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
                <ProjectsNavbar
                    handlerFilterCategory={handlerFilterCategory}
                    active={active}
                />

                <div className="relative grid grid-cols-12 gap-4 my-3">
                    {projectsData.map((project, idx) => (
                        <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" key={idx}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default projects
