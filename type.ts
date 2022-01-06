import { IconType } from "react-icons/lib";

export interface Service {
    Icon: IconType;
    title: string;
    about: string;
}

export interface Skill {
    Icon: IconType;
    name: string;
    level: string;
}