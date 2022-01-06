
import { GiTie } from "react-icons/gi";
import { FaLocationArrow, FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <div>
            <div className="img">
                <img className="w-32 h-32 rounded-full mx-auto" src="https://rahul-wp.com/wp-content/uploads/2021/11/me3.jpg" alt="img avatar" />
            </div>
            <h1 className="text-3xl font-bold pt-1 lg:pt-3 font-kaushan">Rahul Ray</h1>
            <div className="bio-details pt-5 lg:pt-9 dark:bg-dark-200 dark:bg-black-500">
                <h4 className="rounded-full bg-gray-200 py-4">Full Stack Developer</h4>
                <a href="https://drive.google.com/file/d/1J6m75jJI6zivVSaU-efshI8mgfImg_-J/view" rel="noreferrer" target="_blank">
                    <div className="resume flex items-center justify-center rounded-full bg-gray-200 py-4 mt-3">
                        <GiTie className="w-5 h-5" />
                        <h4> <span>Download Resume</span></h4>
                    </div>
                </a>
            </div>
            <div className="social-icons w-9/12 mx-auto lg:w-full py-5 lg:py-6 flex items-center justify-center gap-1">
                <a href="#"><FaGithub className="w-6 h-6" /></a>
                <a href="#"><FaLinkedin className="w-6 h-6" /></a>
                <a href="#"><FaWhatsappSquare className="w-6 h-6" /></a>
            </div>
            <div className='address py-5 lg:py-6 bg-gray-200 dark:bg-dark-200 dark:bg-black-500' style={{ marginLeft: '-1rem', marginRight: "-1rem" }}>
                <div className="location flex items-center justify-center space-x-2">
                    <FaLocationArrow className="w-5 h-5" />
                    <h6 className=""> Khulna, Bangladesh</h6>
                </div>
                <h6 className="">rray524@gmail.com</h6>
                <h6 className="">123456789</h6>
            </div>
            <div className="contact pt-3">
                <button className="bg-gradient-to-r from-green-500 to-blue-500 w-9/12 py-4 rounded-full my-2" onClick={() => window.open('mailto:rray524@gmail.com')}>Email Me</button><br />
                <button onClick={changeTheme} className="bg-gradient-to-r from-green-500 to-blue-500 w-9/12 py-4 rounded-full my-2">Toggle Theme</button>
            </div>
        </div>
    )
}

export default Sidebar
