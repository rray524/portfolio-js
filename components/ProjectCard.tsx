import { motion } from "framer-motion";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeInUp, stagger } from "../animation";
import { Project } from "../type";

const ProjectCard: FunctionComponent<{
    project: Project
}> = ({
    project: {
        name,
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs,
    },
}) => {
        const [showDetail, setShowDetail] = useState(false);

        return (
            <motion.div variants={fadeInUp}>
                <Image
                    src={image_path}
                    alt={name}
                    className="cursor-pointer"
                    onClick={() => setShowDetail(true)}
                    layout="responsive"
                    height="150"
                    width="300"
                />

                <p className="my-2 text-center">{name}</p>

                {showDetail && (
                    <motion.div initial="initial" animate="animate" variants={stagger} className="absolute top-10 left-0 z-10 grid w-full h-auto p-2 text-black bg-white md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                        <motion.div variants={fadeInUp}>
                            {/* <img src={image_path} alt={name} /> */}

                            <Image
                                src={image_path}
                                alt={name}
                                layout="responsive"
                                height="150"
                                width="300"
                            />
                            <div className="flex justify-center my-4 space-x-3">
                                <a
                                    href={github_url}
                                    className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                                >
                                    <AiFillGithub /> <span>Github</span>
                                </a>
                                <a
                                    href={deployed_url}
                                    className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                                >
                                    <AiFillProject /> <span>Project</span>
                                </a>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
                            <h3 className="mb-3 font-medium">{description}</h3>

                            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                                {key_techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <button
                            onClick={() => setShowDetail(false)}
                            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
                        >
                            <MdClose size={30} />
                        </button>
                    </motion.div>
                )}
            </motion.div>
        );
    };

export default ProjectCard;