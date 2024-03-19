import React from "react";
import ClockIcon from "!svg-react-loader!../images/svg-icons/clock.svg?name=ClockIcon";

const PostDate = ({ date }) => (
  <div>
    <div>
      <p className="text-xs text-gray-500 flex items-center pb-3 pr-8">
        <ClockIcon />
        {date}
      </p>
    </div>
  </div>
);

export default PostDate;