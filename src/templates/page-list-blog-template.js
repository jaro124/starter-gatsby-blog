import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/core/layout";
import Seo from "../components/core/seo";
import PostHeader from "../components/post-header";
import PostListNavigation from "../components/post-list-navigation";

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            subtitle
            slug
            date
            tags
          }
        }
      }
    }
  }
`;

const PostListTemplate = ({
  data,
  pageContext, // this prop will be injected by the GraphQL query below.
}) => {
  const { edges } = data.allMdx;
  const { numPages, currentPage } = pageContext;
  return (
    <Layout>
      <div className="px-4">
        <div className="max-w-4xl bg-white dark:bg-black rounded-lg mx-auto my-8 p-16">
          <h1 className="text-2xl font-medium text-primary mb-2">My blog</h1>
          <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">
            List of my blog posts
          </h2>
          <hr className="w-1/2 border-2 mb-4 border-blue-400" />
          {edges.map((edge) => (
            <div className="mt-8" key={edge.node.id}>
              <PostHeader
                title={edge.node.frontmatter.title}
                subtitle={edge.node.frontmatter.subtitle}
                date={edge.node.frontmatter.date}
                tags={edge.node.frontmatter.tags}
              />

              <div className="text-primary">{edge.node.excerpt}</div>

              <div className="mt-4">
                <button
                  aria-label="Read post"
                  className="bg-transparent hover:bg-blue-500 text-blue-700 dark:text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4 mt-2"
                >
                  <Link to={"/blog/" + edge.node.frontmatter.slug}>
                    Read more
                  </Link>
                </button>
              </div>
            </div>
          ))}

          <div>
            <PostListNavigation numPages={numPages} currentPage={currentPage} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostListTemplate;

export const Head = () => (
  <Seo
    title="List posts page"
    description="List posts page"
    keywords={["Blog", "Post"]}
  />
);
