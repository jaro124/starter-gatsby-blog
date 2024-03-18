import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/core/layout"
import Seo  from "../components/core/seo"

const BlogPage = ({ data }) => {
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

          {data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <Link to={node.frontmatter.slug}>
                <h2 className="text-2xl text-indigo-700 pt-4">
                  {node.frontmatter.title}
                </h2>
              </Link>

              <p>Posted: {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export default BlogPage

export const Head = () => <Seo title="Blog page" />
