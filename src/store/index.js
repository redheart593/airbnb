import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"
import detailRedecer from "./modules/detial"
// configureStore作用是创建一个总的store，里边可以包含所有的reducer，再把这个store导出
const store = configureStore({
    reducer: {
        home: homeReducer,
        entire: entireReducer,
        detail: detailRedecer,
    }
})

export default store