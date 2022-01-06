import { FunctionComponent } from "react"
import { Skill } from "../type"

const Bar: FunctionComponent<{ value: Skill }> = ({ value: { Icon, name, level } }) => {
    const bar_width = `${level}%`;
    return (
        <div className="my-2 text-white bg-gray-300 rounded-full">
            <div
                className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
                style={{
                    width: bar_width,
                }}
            >
                <Icon className="mr-3" /> {name}
            </div>
        </div>
    )
}

export default Bar
