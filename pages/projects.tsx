
import { motion } from "framer-motion";
import { useState } from "react";
import { routeAnimation, stagger } from "../animation";
import ProjectCard from "../components/ProjectCard"
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category, Project } from "../type";

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
        <motion.div className="px-5" initial="initial" animate="animate" variants={routeAnimation} exit="exit">
            <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
                <ProjectsNavbar
                    handlerFilterCategory={handlerFilterCategory}
                    active={active}
                />

                <motion.div initial="initial" animate="animate" variants={stagger} className="relative grid grid-cols-12 gap-4 my-3">
                    {projects.map((project, idx) => (
                        <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
                            <ProjectCard project={project} key={idx} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default projects
