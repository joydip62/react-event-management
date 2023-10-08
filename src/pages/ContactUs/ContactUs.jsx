import './contactUs.css';

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-2/4">
            <div className="space-y-5 text-white">
              <h2 className="text-3xl font-bold">REQUEST A CALL BACK</h2>
              <p>
                Roenris in iis qui facitm claritatem. Inveatnes Claritfrtas est
                etiam proce sus dynamicu vert, cess dynag cess rtus dyna tm
                claritate cart.
              </p>
            </div>
          </div>
          <div className="w-2/4">
            <div className="contactForm">
              <form className="grid col-span-1 md:col-2 gap-3">
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Name"
                />
                <input
                  type="text"
                  name="userEmail"
                  id="userEmail"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="userPhone"
                  id="userPhone"
                  placeholder="Phone Number"
                />
                <select name="selectOption">
                  <option>I would like to discuss </option>
                  <option>I would like to discuss </option>
                  <option>I would like to discuss </option>
                  <option>I would like to discuss </option>
                </select>
                <a className="btn">Submit Now</a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
