import React from 'react'

function BlogDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section blog-details">
            <div className="card z-depth-0">
                <span className="card-title">Blog Title - {id}</span>
                <p>
                lorem klasdnk lnasknd as ndsn
                </p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by NN</div>
                <div>2nd September, 2AM</div>
            </div>
        </div>
    )
}

export default BlogDetails
