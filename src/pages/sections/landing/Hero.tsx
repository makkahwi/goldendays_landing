import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export const links = [
  { link: "https://www.facebook.com/goldendaystours", Icon: FaFacebook },
  {
    link: "https://www.instagram.com/goldendays_tourism",
    Icon: FaInstagram,
  },
  {
    link: "https://www.linkedin.com/company/golden-days-tourism-&-travel",
    Icon: FaLinkedin,
  },
  { link: "https://wasap.my/962791609993", Icon: FaWhatsapp },
];

const Hero = () => {
  return (
    <div className="flex flex-row justify-between items-center h-[90%]">
      <div className="hidden xs:flex xs:flex-col xs:px-5 lg:px-8">
        {links.map(({ link, Icon }, i) => (
          <a
            key={i}
            href={link}
            className="w-5 py-2"
            target="_blank"
            rel="noreferrer"
          >
            <Icon color="#f1f5f9" size={22} />
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center px-2 xs:px-0">
        <h1 className="text-3xl xs:text-4xl max-w-xs text-slate-100 font-bold justify-center text-center md:max-w-lg lg:text-[2.5rem] lg:leading-tight">
          <Image src="/logo-white.png" width="240" height={632} alt="logo" />
          Golden Days
        </h1>
      </div>

      <div className="hidden xs:flex flex-col items-center px-5 group lg:px-8">
        <div className="w-[22px] h-[22px] rounded-full bg-slate-100 mb-3 group-hover:animate-bounce"></div>
        <a
          href="#about"
          className="flex justify-center items-center px-1 py-2 border-2 w-5 md:w-6 rounded-full backdrop-blur"
        >
          <Image
            src="/arrow.png"
            alt="scroll"
            width={10}
            height={10}
            className="group-hover:w-full transition-all duration-500 w-1"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
