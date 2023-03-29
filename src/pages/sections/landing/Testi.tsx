const Testi = () => {
  return (
    <section
      id="contact"
      data-testid="contact"
      className="flex flex-col xl:container"
    >
      <div className="min-h-[8rem]" />

      <div className="flex flex-wrap justify-center px-8 gap-y-10 min-h-[80vh] md:min-h-[50vh] gap-x-6">
        <div className="flex flex-col justify-center items-center gap-y-6 lmd:w-[47%] lmd:order-2">
          <div className="flex flex-col items-center gap-y-2">
            <h3 className="text-3xl font-semibold text-center text-emerald-900 md:font-bold lg:text-3xl">
              Visit US @ Our Offices
            </h3>
          </div>

          <p className="text-center font-light max-w-md lg:text-lg">
            Sun - Thu | 9am - 6pm
          </p>

          <p className="text-center font-light max-w-md lg:text-lg">
            No.121, Al-Arab St., Amman, Jordan
          </p>
        </div>

        <div className="flex justify-center w-full lmd:w-[47%] lmd:order-1 h-[30rem] items-center bg-[#fefefe]">
          <div className="relative h-[20rem] w-[27rem] lg:w-[33rem]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d928.6538264128172!2d35.892212942653046!3d32.04730683521102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c9fc3b393313d%3A0x39f3efca2a62bf5f!2z2KfZhNin2YrYp9mFINin2YTYsNmH2KjZitipINmE2YTYs9mK2KfYrdipINmI2KfZhNiz2YHYsSDZiNin2YTYrdisINmI2KfZhNi52YXYsdip!5e0!3m2!1sen!2sus!4v1680121425382!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="min-h-[3rem]"></div>
    </section>
  );
};

export default Testi;
