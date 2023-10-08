import { useLoaderData } from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";

const Blogs = () => {
  const blogs = useLoaderData();

    return (
      <div>
        <div className="">
          <div className="headerBanner">
            <div className="headerBannerContent">
              <h1 className="text-4xl font-bold">Our Blogs</h1>
            </div>
            <div className="bgColor"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
            {blogs.map((blog) => (
              <>
                <div className="card bg-base-100 shadow-xl" data-aos="fade-up">
                  <figure>
                    <img src={blog.image} alt="Shoes" className="w-full" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title hover:text-blue-400">
                      {blog.title}
                    </h2>
                    <p>
                      {blog.description.length > 200 ? (
                        <p>
                          {blog.description.slice(0, 200)}
                          <a className="text-blue-500 font-bold">
                            Read More...
                          </a>
                        </p>
                      ) : (
                        <p>{blog.description}</p>
                      )}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <ContactUs></ContactUs>
      </div>
    );
};

export default Blogs;