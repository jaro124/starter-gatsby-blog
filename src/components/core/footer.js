import * as React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => (
  <footer>

    <div className="flex flex-wrap bg-white dark:bg-black text-black dark:text-gray-400">
      <div className="w-full md:w-1/3 p-4">
        <p className="text-xs pb-2">Contact:</p>
        <p>Company: w129</p>
        <p>Address: Vermont Hills IL 60061</p>
        <p>Phone: (841) 6553228</p>
        <p>E-mail: info(at)server.com</p>
        
      </div>
      <div className="w-full md:w-1/3 bg-white dark:bg-black text-black dark:text-gray-400 p-4">
      <p className="text-xs pb-4">Social:</p>
        <div className="flex flex-wrap">
          <svg 
            version="1.1" 
            id="Capa_1" 
            xmlns="http://www.w3.org/2000/svg" 
            x="0px" 
            y="0px"
            viewBox="0 0 512 512" 
            className="fill-current text-black dark:text-gray-400"
            width="36px" 
            height="36px" 
            >
		        <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
			        c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
			        c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
			        c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
			        c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
			        c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
			        C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
			        C480.224,136.96,497.728,118.496,512,97.248z"/>
          </svg>
          <svg 
            version="1.1" 
            id="Capa_1" 
            xmlns="http://www.w3.org/2000/svg" 
            x="0px" 
            y="0px"
            viewBox="0 0 512 512" 
            className="fill-current text-black dark:text-gray-400 ml-4"
            width="36px" 
            height="36px" 
            >
            <path d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872
              c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464
              c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496
              c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368
              c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68
              c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672
              c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992
              c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496
              c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"/>
          </svg>
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-white dark:bg-black text-black dark:text-gray-400 p-4">
        <p className="text-xs md:pb-2">Site links:</p>
        <nav
          className="md:block md:items-center w-full md:w-auto"
        >
          {[
            {
              route: `/`,
              title: `Home`
            },
            {
              route: `/blog`,
              title: `Blog`
            },
            {
              route: `/about`,
              title: `About`
            }
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:mr-6 no-underline font-medium text-primary border-b-2 border-transparent hover:border-green-500"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}         
        </nav>
        <p className="mt-6 text-xs md:pb-2">Build with:</p>
        <p>
          <a href="https://www.gatsbyjs.org" className="block md:inline-block mt-4 md:mt-0 md:mr-6 no-underline font-medium text-primary border-b-2 border-transparent hover:border-green-500">Gatsby</a> 
          <a href="https://tailwindcss.com/" className="block md:inline-block mt-4 md:mt-0 md:mr-6 no-underline font-medium text-primary border-b-2 border-transparent hover:border-green-500">Tailwind CSS</a>
          <a href="https://mdxjs.com/" className="block md:inline-block mt-4 md:mt-0 md:mr-6 no-underline font-medium text-primary border-b-2 border-transparent hover:border-green-500">MDX</a>
        </p>
      </div>
    </div>

    

    <div className="w-full text-center p-8 bg-white dark:bg-black text-black dark:text-gray-400">
      © {new Date().getFullYear()}, made by {siteTitle}
    </div>  

  </footer>
)
  
  export default Footer