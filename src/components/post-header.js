import React from "react"
import PostDate from "./post-header-date"
import PostTags from "./post-header-tags"

const PostHeader = ({ title, subtitle, date, tags }) => (
  <div>  
    <h1 className="text-4xl font-medium text-indigo-800 dark:text-gray-400 mb-2">{title}</h1>
    <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">{subtitle}</h2>

    <div className="flex flex-wrap justify-between mt-4 w-full">
      <div className="w-full md:w-1/3 text-left">
        <PostDate date={date} /> 
      </div>
      <div className="w-full md:w-2/3 pb-2 md:pb-0 text-left md:text-right">
        <PostTags tags={tags} />
      </div>
    </div>
    
    <hr className="border-1 mt-2 mb-4 border-indigo-400" />

</div>
)

export default PostHeader