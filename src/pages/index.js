import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/core/layout"
import Hero from "../components/hero"
import Seo  from "../components/core/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="p-4">
        <Hero />
        <div className="flex justify-center mt-8">
          <div>
            <h1 className="text-5xl font-bold text-center text-black dark:text-gray-400 mb-2 border-b-2 border-indigo-400">
              Information
            </h1>
          </div>
        </div>
        <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-16">
          <h1 className="text-2xl text-black dark:text-gray-400 font-medium mb-2">
            Let's Build: With Tailwind CSS
          </h1>
          <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">
            Tailwind CSS
          </h2>
          <p className="text-primary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo
            cupiditate molestias atque consequuntur ea quo cumque, odit velit
            sint similique? Asperiores ratione aperiam tempora, alias corrupti
            deleniti quaerat molestiae.
          </p>
          <div className="mt-4">
            <button
              aria-label="Read more"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              <Link to="/post">Read more</Link>
            </button>
          </div>

          <div className="py-5">
            <span className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2 mt-2">
              #gatsby
            </span>
            <span className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2 mt-2">
              #tailwind
            </span>
            <span className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2 mt-2">
              #tailwindcss
            </span>
            <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2 mt-2">
              #react
            </span>
            <span className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2 mt-2">
              #framework
            </span>
            <span className="inline-block bg-green-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2 mt-2">
              #develop
            </span>
            <span className="inline-block bg-indigo-400 rounded-full px-3 py-1 text-xs font-semibold text-black mr-2 mt-2">
              #design
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="Home page" />

export default IndexPage