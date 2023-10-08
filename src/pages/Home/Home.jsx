import { Link } from 'react-router-dom';
import AOS from "aos";
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
AOS.init();

const Home = () => {
  
  // const services = useLoaderData();

    return (
      <div>
        <div>
          <div
            className="relative"
            style={{
              backgroundImage: "url(https://i.ibb.co/qD6BHbq/hero-Banner.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="w-full mx-auto flex justify-center items-center md:h-[47vh] lg:h-[68vh]"
              style={{
                background: "black",
                opacity: 0.7,
              }}
            >
              <div className="text-center text-white w-full p-5 lg:w-2/4">
                <h1 className="md:text-3xl">
                  Professional Business
                  <span className="block text-2xl md:text-5xl font-extrabold my-3 md:my-5">
                    Solution & Consulting
                  </span>
                </h1>
                <p>
                  We’ve beenlorem ipsum dolor sit facis ance lorem ipsum dolor
                  sit facilisis at vero er et iusto odio dignissim qui blandit
                  praesent luptatum zzril delenit augue.
                </p>
                <div className=" mt-5 space-x-5">
                  <Link
                    to="./contact"
                    className="btn bg-[#F9A51A] font-semibold md:text-xl"
                  >
                    contact us
                  </Link>
                  <Link
                    to="./services"
                    className="btn font-semibold md:text-xl"
                  >
                    services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <Services></Services>
        </div>
        <div data-aos="fade-up">
          <AboutUs></AboutUs>
        </div>
        <div data-aos="fade-up">
          <ContactUs></ContactUs>
        </div>
      </div>
    );
};

export default Home;