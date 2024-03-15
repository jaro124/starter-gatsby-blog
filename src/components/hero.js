import React from "react"
import { Link } from "gatsby"

import BoxImg from "../images/image1.svg?raw=1"

const Hero = () => {
  return (
    <div>
        <div className="flex flex-wrap justify-between mt-16 mb-16 w-full items-center">
          <div className="w-full md:w-1/2 text-left md:text-right pr-4">
            <h1 className="text-5xl font-bold text-black dark:text-gray-400 mb-2">Coloring code</h1>
            <h2 className="text-xl font-medium text-indigo-400 mb-4 uppercase tracking-wide">Coloring code syntax</h2>
            
            <div className="text-black dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo cupiditate molestias atque consequuntur ea quo cumque , odit velit sint similique? Asperiores ratione aperiam tempora, alias corrupti deleniti quaerat molestiae. Prismjs…</div>         
            <div className="mt-8">
              <button className="bg-green-500 hover:bg-green-400 text-black font-semibold py-2 px-4 border border-green-500 hover:border-transparent rounded">
                <Link to="/post">Read more</Link>
              </button>
            </div>
          </div>
          <div className="hidden md:block w-full md:w-1/2 pl-4 pb-2 md:pb-0 text-left md:text-right">
            <img src={BoxImg} alt="Logo" />
          </div>
        </div>

    </div>  
  )
}

export default Hero