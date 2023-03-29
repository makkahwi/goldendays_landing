import Image from "next/image";
import Link from "next/link";

const Second = () => {
  return (
    <section
      id="about"
      data-testid="about"
      className="flex flex-col justify-end 2xl:container"
    >
      <div className="min-h-[7rem]"></div>
      <div className="flex flex-col cont-height justify-center gap-y-20 sm:gap-y-28 lmd:px-10 2xl:px-4 box-border">
        <div className="min-h-[30rem] flex flex-wrap justify-center gap-y-6 gap-x-6">
          <div className="flex flex-col gap-y-10 lmd:w-[45%] px-6 box-border">
            <div className="flex flex-col gap-y-6">
              <h2 className="text-4xl font-bold text-gray-700 md:text-4xl lg:text-4xl lmd:max-w-lg">
                <Image
                  src="/logo-en-w.png"
                  width="500"
                  height={632}
                  alt="logo"
                />
              </h2>

              <p className="lg:text-lg">
                Golden Days is an experienced travel agency based in Jordan,
                specialized in both religious & recreational travel trips in the
                middle east.
              </p>
            </div>
          </div>

          <div className="w-full lmd:w-[45%] px-6 box-border">
            <div className="bg-[url('/MiddleEast.jpg')] h-[20rem] w-full bg-cover bg-center shadow-2xl lmd:h-3/4 lg:h-[90%] relative" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
