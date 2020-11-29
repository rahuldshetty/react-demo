const initState = {
    blogs: [
        {id: '1', title:'abcd',content:'abcd'},
        {id: '2', title:'asdasd',content:'asd'},
        {id: '3', title:'sadgda',content:'saddsd'}
    ]    
}

const blogReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_BLOG': 
            console.log('created project', action.blog);
    }
    return state
}

export default blogReducer;