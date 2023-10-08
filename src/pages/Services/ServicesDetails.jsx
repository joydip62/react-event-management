import { useParams } from "react-router-dom";
import data from "../../../public/event.json";

function fetchDataById(id) {
  return data.find((item) => item.id === Number(id)); 
}

const ServicesDetails = () => {
    const { id } = useParams();
    const item = fetchDataById(id);

    return (
      <div>
        <div className="card w-full mt-10 bg-base-100 shadow-xl mx-auto text-center">
          <figure>
            <img src={item.image} alt={item.name} className="w-full" />
          </figure>
          <div className="card-body space-y-5">
            <h2 className="text-5xl font-extrabold">{item.name}</h2>
            <p className="font-bold text-2xl">${item.price}</p>
            <p>{item.description}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServicesDetails;