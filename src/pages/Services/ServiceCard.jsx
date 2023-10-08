/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { id, name, image, price, description } = service;
  return (
    <div>
      <div data-aos="fade-up">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt={name} />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title mx-auto text-2xl">{name}</h2>
            <p className="font-bold">{price}$</p>
            <p>
              {description.length > 200 ? (
                <p>
                  {description.slice(0, 200)}
                  <Link
                    to={`/services/${id}`}
                    className="text-blue-500 font-bold"
                  >
                    Read More...
                  </Link>
                </p>
              ) : (
                <p>{description}</p>
              )}
            </p>
            <div className="card-actions justify-center">
              <Link to={`/services/${id}`} className="btn btn-primary">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;