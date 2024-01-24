import Logo from "./common/Logo";
import { HiArrowUp } from "react-icons/hi";
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegram, FaLinkedin, FaWhatsapp, FaSteam } from "react-icons/fa";
import { useTheme } from "../App";
const Footer = () => {
  const { isDark } = useTheme();
  const socialColors = isDark ? " yellow " : " blue ";
  const socialTextColor =
    (isDark ? " text-yellow-300 " : " text-blue-500 ") +
    "border border-blue-500 py-2 text-blue-900 px-3 rounded-lg flex items-center";
  return (
    <div className="h-80 clear-both border-t-8 rounded-xl  border-blue-600">
      <div className="py-1 ">
        <a
          href="#navbar"
          className="float-left border border-gray-500 rounded-full p-3"
        >
          <HiArrowUp />{" "}
        </a>
        <Logo className="float-right" logoClassName="h-12" />
      </div>
      <div className="clear-both  flex justify-between py-2 flex-wrap sm:flex-nowrap">
        <a href="" className={socialTextColor}>
          <SiInstagram fill={socialColors} className=" mx-2" /> Instagram{" "}
        </a>
        <a href="" className={socialTextColor}>
          <BsTwitterX fill={socialColors} className="mx-2" /> Twitter{" "}
        </a>
        <a href="" className={socialTextColor}>
          <FaTelegram fill={socialColors} className="mx-2" /> Telegram{" "}
        </a>
        <a href="" className={socialTextColor}>
          <FaLinkedin fill={socialColors} className="mx-2" /> Linkedin{" "}
        </a>
        <a href="" className={socialTextColor}>
          <FaWhatsapp fill={socialColors} className="mx-2" /> Whatsapp{" "}
        </a>
        <a href="" className={socialTextColor}>
          <FaSteam fill={socialColors} className="mx-2" /> Steam{" "}
        </a>
      </div>

      <div className="flex select-none justify-between border-y py-2 mb-1 border-gray-500 sm:flex-nowrap flex-wrap">
        {" "}
        <div className=" w-[fit-content] grow ">
          <h3 className="text-xl w-[fit-content]">With Developer</h3>
          <a className="block hover:text-blue-500  text-sm py-1 w-[fit-content] " href="">
            News
          </a>
          <a className="block hover:text-blue-500 text-sm py-1 w-[fit-content] " href="">
            Sell in Developer
          </a>
          <a className="block hover:text-blue-500 text-sm py-1 w-[fit-content] " href="">
            Opportunities
          </a>
          <a className="block hover:text-blue-500 text-sm py-1 w-[fit-content] " href="">
            Work With Us
          </a>
          <a className="block hover:text-blue-500 text-sm py-1 w-[fit-content] " href="">
            Contact Us
          </a>
        </div>
        <div className=" w-[fit-content] grow">
          <h3 className="text-xl w-[fit-content]">Customer Services</h3>
          <a className="block hover:text-blue-500 text-sm py-1 w-[fit-content] " href="">
            Regular Question
          </a>
          <a className="block hover:text-blue-500 text-sm py-1 w-[fit-content] " href="">
            Security
          </a>
          <a className="block hover:text-blue-500 text-sm py-1 w-[fit-content] " href="">
            Reports
          </a>
          <a className="block hover:text-blue-500 text-sm py-1 w-[fit-content] " href="">
            Give Backs
          </a>
        </div>
        <div className=" w-[fit-content] grow">
          <h3 className="text-xl w-[fit-content]">With Developer</h3>
          <a className="block hover:text-blue-500 text-sm py-1 w-[fit-content] " href="">
            News
          </a>
          <a className="block hover:text-blue-500 text-sm py-1 w-[fit-content] " href="">
            Sell in Developer
          </a>
          <a className="block hover:text-blue-500 text-sm py-1 w-[fit-content] " href="">
            Opportunities
          </a>
          <a className="block hover:text-blue-500 text-sm py-1 w-[fit-content] " href="">
            Work With Us
          </a>
          <a className="block hover:text-blue-500 text-sm py-1 w-[fit-content] " href="">
            Contact Us
          </a>
        </div>

      </div>
      <div className="my-2">
        <span className="font-bold text-lg mr-20">Phone: 09363057549</span>
        <span className="font-bold text-lg">24 hour response</span>
      </div>
    </div>
  );
};

export default Footer;
