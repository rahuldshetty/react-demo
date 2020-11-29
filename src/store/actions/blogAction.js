const createBlog = (blog) => {
    return (dispatch, getState) => {
        // make async call to db
        dispatch({
            type: "CREATE_BLOG",
            blog
        })
    }
}

export default createBlog