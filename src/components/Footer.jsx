import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import CreatifyLogo from "./CreatifyLogo";

const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Creatify Technologies"
            className="inline-flex items-center"
          >
            <CreatifyLogo/>
            <span className="mb-4 text-xl font-bold tracking-wide text-gray-400 uppercase">
              Creatify Technologies
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-400">
              At Creatify Technologies, we specialize in cutting-edge website
              development and mobile application solutions. Our dedicated team
              leverages the latest technologies to deliver tailored digital
              experiences.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              From concept to deployment, we ensure top-quality solutions that
              drive business success and innovation.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-400">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-400">Phone:</p>
            <a
              href="tel:+91850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-blue-600 hover:text-blue-800"
            >
              +91 850-123-5021
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-400">Email:</p>
            <a
              href="mailto:info@creatifytech.com"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-blue-600 hover:text-blue-800"
            >
              info@creatifytech.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-400">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-blue-600 hover:text-blue-800"
            >
              Mumbai, Maharashtra, India
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-400">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
            >
              <FaFacebookF className="h-5" />
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
            >
              <FaTwitter className="h-5" />
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-blue-600"
            >
              <FaInstagram className="h-5" />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Follow us on social media to stay updated with the latest in
            technology and innovation.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © 2024 Creatify Technologies. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
