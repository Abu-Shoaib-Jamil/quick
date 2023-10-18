import { initialState } from "../state";

const {ADD_NEWS } = require("../actions/actiontypes/actiontypes");

// const initialState = [];

const newsreducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_NEWS : 
        //PENDING!!! : I need to add the latest news in the previous state of news , i.e, news = [...action.news,...state.news]
        // const beforeState = state.news;
        // const latestState = action.news;
        // const toBeAddedNews = latestState.filter((news)=>{
        //     return news.urlhash!=state.news.
        // })
        return{
            ...state,
            news : [...action.news]
        }
        default : return state
    }
}

export default newsreducer;