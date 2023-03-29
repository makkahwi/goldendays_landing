import { links } from "@/pages/sections/landing/Hero";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="flex flex-col">
      <div className="min-h-[5.2rem]"></div>
      <footer className="w-full h-[5rem] flex flex-col gap-y-6 md:gap-y-2 bg-[#f4f4f4]">
        <div className="w-full">
          <div className="flex flex-wrap justify-between items-center min-h-[5rem] px-4 lg:px-16">
            <div className="text-xs">
              All Rights Reserved &#169; Golden Days Travel Agency{" "}
              {new Date().getFullYear()}
            </div>

            <div className="flex flex-wrap items-center gap-x-2">
              <Link href="" className="text-xs">
                English
              </Link>

              <Link href="" className="text-xs">
                عربي
              </Link>

              {links.map(({ link, Icon }, i) => (
                <a
                  key={i}
                  href={link}
                  className="w-5 py-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={20} color="#334155" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
