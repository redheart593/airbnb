import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"

// configureStore作用是创建一个总的store，里边可以包含所有的reducer，再把这个store导出
const store = configureStore({
    reducer: {
        home: homeReducer,
        entire: entireReducer
    }
})

export default store