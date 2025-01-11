import { useEffect, useState } from "react";
import { throttle } from "underscore"

export default function useScrollPosition() {
    // 状态来记录位置，记录滚动到哪里
    const [scrollX, setScrollX] = useState(0)
    const [scrollY, setScrollY] = useState(0)

    // 监听window滚动
    useEffect(() => {
        // 一滚动就会设置新的值，所以通过underscore的throttle实现节流操作
        const handleScroll = throttle(function () {
            setScrollX(window.scrollX)
            setScrollY(window.scrollY)
        }, 100)
        // 给视窗滚动事件绑定handleScroll函数，记录当前位置
        window.addEventListener("scroll", handleScroll)
        // 结束时撤销绑定
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // 返回x轴和y轴滚动了多少
    return { scrollX, scrollY }
}