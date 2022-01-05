import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react"


const NavItem: FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}> = ({ activeItem, setActiveItem, name, route }) => {
    return (
        activeItem !== name ? <Link href={route} passHref>
            <span className="hover:cursor-pointer" onClick={() => setActiveItem(name)}>{name}</span>
        </Link> : null
    )
}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('');
    const { pathname } = useRouter();
    useEffect(() => {
        if (pathname === '/') {
            setActiveItem('About')
        }
        if (pathname === '/projects') {
            setActiveItem('Project')
        }
        if (pathname === '/resume') {
            setActiveItem('Resume')
        }
    }, []);


    return (
        <div className="flex items-center justify-between p-5">
            <div className="active_menu_item text-green-400 font-bold text-lg md:text-2xl border-b-4">
                {activeItem}
            </div>
            <div className="right_menu_item space-x-4 text-lg md:text-2xl">
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/" />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Project" route="/projects" />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/resume" />
            </div>
        </div>
    )
}

export default Navbar
