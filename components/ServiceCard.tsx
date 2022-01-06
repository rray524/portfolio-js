import { FunctionComponent } from "react"
import { Service } from "../type"

const ServiceCard: FunctionComponent<{ service: Service }> = ({ service: { Icon, about, title } }) => {

    const createMarkup = () => {
        return {
            __html: about
        }
    }
    return (
        <div className="flex items-center bg-gray-200 rounded-2xl p-3 space-x-4 dark:bg-dark-200 dark:bg-black-500">
            <Icon className="w-14 h-14 text-regal-green" />
            <div className="service_details">
                <h4 className="font-bold text-zinc-800 text-xl dark:text-white">{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    )
}

export default ServiceCard
