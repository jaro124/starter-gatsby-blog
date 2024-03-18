import { Link } from "gatsby";
import React, { useState } from "react";
import { toggleTheme } from "../../utils/toggleTheme.js";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-white dark:bg-black shadow-lg">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-4">
        <Link
          className="flex items-center no-underline text-black dark:text-gray-400"
          to="/"
        >
          <svg
            width="32"
            height="36"
            className="fill-current text-black dark:text-gray-400"
            viewBox="0 0 32 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"></path>
          </svg>
          <span className="font-bold text-xl tracking-tight pl-3">
            Starter Gatsby Blog
          </span>
        </Link>

        <button
          aria-label="Menu"
          className="md:hidden border border-white flex items-center px-3 py-2 rounded text-black dark:text-gray-400"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Home`,
            },
            {
              route: `/blog`,
              title: `Blog`,
            },
            {
              route: `/about`,
              title: `About`,
            },
          ].map((link) => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:mr-6 no-underline font-medium text-black dark:text-gray-400 border-b-2 border-transparent hover:border-green-500"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}

          <button
            aria-label="Toggle theme"
            className="focus:outline-none mt-4 md:mt-0"
            onClick={toggleTheme}
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24px"
              height="24px"
              viewBox="0 0 405.526 405.526"
              className="fill-current text-black dark:text-gray-400"
            >
              <path
                d="M202.764,0C90.958,0,0,90.958,0,202.763c0,111.809,90.958,202.764,202.763,202.764
		          c111.808,0,202.763-90.955,202.763-202.764C405.526,90.958,314.571,0,202.764,0z M22.952,202.763
		          c0-99.146,80.665-179.811,179.812-179.811v359.623C103.616,382.574,22.952,301.91,22.952,202.763z"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
