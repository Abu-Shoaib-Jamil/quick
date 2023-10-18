import newsreducer from "./newsreducer";

const { combineReducers } = require("redux");

const rootreducer =  combineReducers({
    newsreducer,
})

export default rootreducer;
