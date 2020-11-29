import React from 'react';

const BlogSummary = ({blog}) => {
    return (
        <div className="card z-depth-0 blog-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{blog.title}</span>
                <p>Posted by the Net Ninja</p>
                <p className="grey-text">3rd September, 2AM</p>
            </div>
        </div>
    )
}

export default BlogSummary