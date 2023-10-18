import rootreducer from "./reducers/rootreducer";
const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer : rootreducer
})

export default store;