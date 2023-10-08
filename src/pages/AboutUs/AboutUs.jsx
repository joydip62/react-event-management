import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className="mt-10">
      <div className="romana_about_us_area">
        <div className="container">
          <div className="md:flex items-center">
            <div className="md:w-2/4">
              <div className="romana_about_img">
                <img src="images/about.jpg" alt="" />
              </div>
            </div>
            <div className="md:w-2/4 mt-20 md:mt-0">
              <div className="romana_about_right_text romana_section_title text-right">
                <h2 className="text-3xl font-bold">ABOUT US</h2>
                <p>
                  Roenris in iis qui facitm claritatem. Investigationes
                  demonstraveruntl Claritfrtas est etiam processus dynamicus,
                  qui sequitur munem cort cessus dynag cess rtus dyna uoy
                  othica, quam numus parum clara.
                </p>
                <p>
                  Hle gentis in iis qui facit eorm claitatem. Investig ationes
                  demo nrunt test etiam procesmicusmb, qui sequitur mutationem
                  consuetudium velecenunc pert duta mus parum claram. sert dyrt
                  lotrud lo gdt kjhh.
                </p>
                <div className="romana_about_btn">
                  <button className='btn btn-primary'>read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
