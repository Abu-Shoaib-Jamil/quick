const { ADD_NEWS } = require("../actiontypes/actiontypes")

const addnews = (news) =>{
    return {
        type : ADD_NEWS,
        news : news
    }
}


export default addnews;