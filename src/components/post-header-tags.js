import React from "react";
import TagsIcon from "!svg-react-loader!../images/svg-icons/tags.svg?name=TagsIcon";

const PostTags = ({ tags }) => {
  return (
    <div>
      <div className="flex flex-wrap text-xs text-gray-500 uppercase justify-start md:justify-end">
        <div className="pt-1">
          <TagsIcon />
        </div>
        {tags.map((tag, index) => (
          <div className="pl-2" key={index}>
            &nbsp;#{tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostTags;