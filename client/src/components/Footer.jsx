import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-800 w-full py-8 font-mono">
        <div className="max-w-screen-xl mx-auto px-4">
          <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
            <li className="my-2">
              <a
                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="www.google.com" target="_blank"
              >
                FAQ
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="www.google.com" target="_blank"
                
              >
                Configuration
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="www.google.com" target="_blank"
              >
                Github
              </a>
            </li>
            <li className="my-2">
              <a
                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="www.google.com" target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
