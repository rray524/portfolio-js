import { motion } from "framer-motion"
import { fadeInUp, routeAnimation } from "../animation"
import Bar from "../components/Bar"
import { languages, tools } from "../data"

const Resume = () => {

    return (<motion.div initial="initial" animate="animate" variants={routeAnimation} exit="exit">
        <div className="px-5 grid md:grid-cols-2 gap-6 py-5">
            <motion.div className="education" initial="initial"
                animate="animate"
                variants={fadeInUp}>
                <h5 className="text-2xl font-bold">Education</h5>
                <p>B.sc in Computer Science & Engineering</p>
                <p>I have passed my undergraduate degree in 2017</p>
            </motion.div>
            <motion.div className="experience" initial="initial"
                animate="animate"
                variants={fadeInUp}>
                <h5 className="text-2xl font-bold">Experience</h5>
                <p>Wordpress theme & plugin developer</p>
                <p>I have worked as freelance developer since 2014</p>
            </motion.div>
        </div>
        <div className="px-5 grid md:grid-cols-2 gap-6 py-5">
            <div className="language">
                <h5 className="text-2xl font-bold">Languages</h5>
                <div className="my-2">
                    {
                        languages.map((language, idx) => (
                            <Bar value={language} key={idx} />
                        ))
                    }
                </div>
            </div>
            <div className="softwares">
                <h5 className="text-2xl font-bold">Tools & Softwares</h5>
                <div className="my-2">
                    {
                        tools.map((tool, idx) => (
                            <Bar value={tool} key={idx} />
                        ))
                    }
                </div>
            </div>
        </div>
    </motion.div>
    )
}

export default Resume
