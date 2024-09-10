import logo from "../assets/danielLyvchLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/daniel-lyvch/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-700 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/d-lyvch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/Dan_Lyvch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-500 transition-colors"
        >
          <BsTwitterX />
        </a>
        <a
          href="https://www.instagram.com/daniel_lyvch/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
