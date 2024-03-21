import React from "react";
import { TagIcon } from "@heroicons/react/24/outline";

const PostTags = ({ tags }) => {
  return (
    <div>
      <div className="flex flex-wrap text-xs text-gray-500 uppercase justify-start md:justify-end">
        <div>
        <TagIcon className="h-5 w-5 text-gray-500" />
        </div>
        {tags.map((tag, index) => (
          <div className="pl-2" key={index}>
            #{tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostTags;