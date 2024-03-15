import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/core/layout"
import { Seo } from "../components/core/seo";

const BlogPage = () => {
  return (
    <Layout pageTitle="Blog Page">
      <div className="px-4">
        <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-16">
          <h1 className="text-2xl font-medium text-black dark:text-gray-400 mb-2">
            Blog page
          </h1>
          <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">
            List posts
          </h2>
          <p className="text-primary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo
            cupiditate molestias atque consequuntur ea quo cumque, odit velit
            sint similique? Asperiores ratione aperiam tempora, alias corrupti
            deleniti quaerat molestiae.
          </p>
          <p className="text-primary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo
            cupiditate molestias atque consequuntur ea quo cumque, odit velit
            sint similique? Asperiores ratione aperiam tempora, alias corrupti
            deleniti quaerat molestiae.
          </p>
          <div className="mt-4">
            <button
              aria-label="Back to home page"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 mt-2"
            >
              <Link to="/">Back to home page</Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const Head = () => <Seo title="Blog page" />;