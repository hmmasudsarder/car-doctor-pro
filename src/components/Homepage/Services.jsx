import ServiceCard from "../card/ServiceCard";
import { services } from "../lib/services";

const Services = () => {
  
  console.log(services);
  return (
    <div className="text-slate-800 min-h-screen mt-16">
      <div className="text-center container mx-auto">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h3 className="text-5xl">Our Service Area</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          quis exercitationem libero.
        </p>
      </div>
      <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
