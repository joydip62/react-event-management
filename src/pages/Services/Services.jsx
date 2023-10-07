import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import ServiceCard from "./ServiceCard";
import { useLoaderData } from "react-router-dom";

// ..
AOS.init();

const Services = () => {
    const services = useLoaderData();

  return (
    <div>
      <div className="mt-10 text-center w-2/3 mx-auto space-y-5">
        <h2 className="text-4xl font-semibold">OUR SERVICES</h2>
        <p>
          Consectetuer adipiscing elit, sed diam nonu mmy nibh euismod tincidunt
          ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimad minim
          veniam, quis nost rud exerci tation ullamcorper suscipit lobo
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
