import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
    // const { tabNames } = props
    // 设置状态变量，判断左右按钮是否显示
    const [showRight, setShowRight] = useState(false)
    const [showLeft, setShowLeft] = useState(false)
    // 判断当前最左侧tab为tab栏中第几个
    const [poIndex, setPosIndex] = useState(0)

    // 获取scroll-content的盒子dom
    const scrollContentRef = useRef()
    // 保存每次总宽度减盒子可显示宽度的距离，可以用useState，但不想要每次重新渲染，所以使用useRef
    const totalDistanceRef = useRef()

    /** 判断初次渲染是否显示右按钮 
     * 1、逻辑是内容有溢出父盒子部分就显示，反之不显示。
     * 2、方法是用盒子宽度（scrollWidth）减去父盒子显示宽度（clientWidth），保存到ref并看是否大于零。
     * 3、大于零就说明还有溢出部分，显示右按钮。
    */
    // 第一次渲染不显示，在异步逻辑中判断是否显示右侧按钮。每次传来新数据就重新渲染
    useEffect(() => {
        // 判断盒子总宽度减盒子可显示宽度（父盒子宽度）是否大于零，大于零就设置showRight为true，显示右侧按钮
        const scrollWidth = scrollContentRef.current.scrollWidth    // scrollWidth是盒子总宽度（包括溢出父盒子不显示的部分）
        const clientWidth = scrollContentRef.current.clientWidth    // clientWidth是盒子可显示宽度（不包括溢出父盒子不显示的部分）
        const totalDistance = scrollWidth - clientWidth
        // 把每次相差距离保存到totalDistanceRef
        totalDistanceRef.current = totalDistance
        setShowRight(totalDistance > 0)
    }, [])


    /**按钮点击函数 
     * 1、先根据传来参数判断时做按钮或右按钮，给poIndex加一或减一
     * 2、由于每个tab宽度不一，所以不能直接移动固定距离
     * 3、可以看是第几个tab，用offsetLeft取到该tab在父盒子scroll-content中离左侧的距离（注意要给父盒子scroll-content设置定位才能使用offsetLeft）
     * 4、通过transform = `translate(-${newOffsetLeft}px)`，将scroll-content左移到 -offsetLeft 位置，从而做到将当前下一个或上一个的tab显示在最左侧
     * 5、设置新的poIndex
     * 6、如果左移一个tab后，最左侧的newOffsetLeft仍然小于相差距离，说明scroll-content还有溢出没有显示的部分，则接着显示右侧按钮。反之不显示
     * 7、如果最左侧tab里父盒子边界的距离仍然大于0，则继续显示左侧按钮
     * */
    function controlClickHindle(isRight) {
        const newIndex = isRight ? poIndex + 1 : poIndex - 1
        const newEl = scrollContentRef.current.children[newIndex]
        const newOffsetLeft = newEl.offsetLeft
        scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
        setPosIndex(newIndex)
        setShowRight(totalDistanceRef.current > newOffsetLeft)
        setShowLeft(newOffsetLeft > 0)
    }
    return (
        <ViewWrapper>
            {/* 这里onClick绑定函数不需要调用，后续根据react的事件处理机制调用。这里需要传递参数，所以通过一个箭头函数包装。箭头函数依然是后续自己调用 */}
            {/* 传入判断左右按钮的参数 */}
            {showLeft &&
                <div className='control left' onClick={() => controlClickHindle(false)}>
                    <IconArrowLeft />
                </div>}
            {showRight &&
                <div className='control right' onClick={() => controlClickHindle(true)}>
                    <IconArrowRight />
                </div>}
            <div className="scroll">
                <div className="scroll-content" ref={scrollContentRef}>
                    {/* 展示出所有的tab组件中所有代码 */}
                    {props.children}
                </div>
            </div>
        </ViewWrapper>
    )
})

ScrollView.propTypes = {
    // tabNames: PropTypes.array
}

export default ScrollView