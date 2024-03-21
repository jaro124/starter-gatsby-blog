import React from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const PostDate = ({ date }) => (
  <div>
    <div className="flex flex-wrap text-xs text-gray-500 uppercase justify-start">
        <div>
        <CalendarDaysIcon className="h-5 w-5 text-gray-500" />
        </div>
          <div className="pl-2">
            {date}
          </div>
      </div>
  </div>
);

export default PostDate;
