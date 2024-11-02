import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import("@/views/home"))
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))

const routes = [
    // 路由中必须要有单斜杠的路径作为首页
    {
        path: "/",
        // 首页导航至home
        element: <Navigate to={"/home"} />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/entire",
        element: <Entire />
    },
    {
        path: "/detail",
        element: <Detail />
    },
]

export default routes