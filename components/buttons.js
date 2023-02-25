import React from "react";
import { MY_LINKS } from "../utils/constants";

// Customize it to your needs or else it leave it as it is
const LinkButtons = () => {
  return (
    <div className="text-center pt-4  text-2xl flex flex-col items-center">
      {MY_LINKS.map((link, idx) => (
        <a
          href={link.href}
          className={
            "hover:bg-purple-700  mt-2 border-2 border-purple-500 rounded-2xl  py-5 md:w-6/12 w-11/12"
          }
        >
          <i className={`pr-5 ${link.icon}`}></i>
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default LinkButtons;
