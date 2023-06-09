import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { MdFolder } from "react-icons/md";

interface cardProps {
  src: string;
  title: string;
  desc: string;
}

const Picard = ({ src, title, desc }: cardProps) => {
  return (
    <div className="flex flex-col gap-y-3 snap-center px-2">
      <div className="group rounded-md overflow-hidden relative shadow-lg">
        <Image
          src={src}
          alt={`${title} picture`}
          width={808}
          height={632}
          className="group-hover:scale-110 group-hover:brightness-75 brig transition-all duration-300"
        />
      </div>

      <div className="flex flex-col text-gray-800">
        <h2 className="font-semibold text-[#485e88]">{title}</h2>
        {/* <p className="text-xs">{desc}</p> */}
      </div>
    </div>
  );
};

export default Picard;
