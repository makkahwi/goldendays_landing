import { MdLocationOn } from "react-icons/md";

const Desc = () => {
  const destinations = ["Makkah", "Madina", "Jerusalem"];

  return (
    <div className="min-h-[7rem] w-full absolute bottom-0 flex justify-center items-center pr-10 box-border text-slate-100 backdrop-blur">
      <div className="hidden sm:flex sm:w-full sm:items-center">
        {destinations.map((destination, i) => (
          <div
            className="basis-1/3 flex flex-col justify-center px-2 lg:px-6 xl:px-9"
            key={i}
          >
            <h3 className="xs:text-xl sm:text-2xl lg:text-[1.7rem] font-bold flex">
              <MdLocationOn size={30} />
              {destination}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desc;
