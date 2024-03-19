import React from "react";
import { Link } from "gatsby";

const PostListNavigation = ({ numPages, currentPage }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  const prevPageLink = "/blog/" + prevPage;
  const nextPageLink = "/blog/" + nextPage;
  return (
    <div>
      <div>
        <hr className="mt-8" />
        <div className="flex flex-wrap justify-between w-full">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <p className="text-xs text-gray-500">Previous page</p>
            {!isFirst && (
              <Link to={prevPageLink}>
                <p className="block md:inline-block mt-4 md:mt-0 no-underline font-medium text-primary border-b-2 border-transparent hover:border-green-500">
                  ← Page {currentPage - 1}
                </p>
              </Link>
            )}
          </div>
          <div className="w-full md:w-1/3 text-xs text-gray-500 text-center">
            Page {currentPage} of {numPages}
          </div>
          <div className="w-full md:w-1/3 pt-2 md:pt-0 text-center md:text-right">
            <p className="text-xs text-gray-500">Next page</p>
            {!isLast && (
              <Link to={nextPageLink}>
                <p className="block md:inline-block mt-4 md:mt-0 no-underline font-medium text-primary border-b-2 border-transparent hover:border-green-500">
                  Page {nextPage} →
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostListNavigation;