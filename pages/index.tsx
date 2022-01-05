import ServiceCard from "../components/ServiceCard"
import { services } from "../data"

const index = () => {
  return (
    <div className="px-5">
      <p>I build one pager component based React UI application. I am relying on Firebase for USER authentication. I use node.js server on the Back End and host this to Heroku. I use MongoDB to store data on database and find them on client side through REST API.</p>
      <h4 className="text-xl py-6 text-black font-bold">What I am doing</h4>
      <div className="bg-gray-400 my-3 grid sm:grid-cols-1 lg:grid-cols-2 gap-4 p-5" style={{ marginLeft: '-1.3rem', marginRight: '-1.3rem' }}>
        {
          services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))
        }
      </div>
    </div>
  )
}

export default index
