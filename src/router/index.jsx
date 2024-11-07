import React from "react"
import { Navigate, createBrowserRouter } from "react-router-dom"

// 路由懒加载
const Home = React.lazy(() => import("@/views/home"))
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))

// 通过createBrowserRouter创建一个路由实例并导出
const routes = createBrowserRouter([
    // 路由中必须要有单斜杠的路径作为首页
    {
        path: "/",
        // 首页导航至home
        element: <Navigate to="/home" replace />
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
])

export default routes