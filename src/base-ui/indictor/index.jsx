import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'


/** 轮播图指示器的目的是总共显示不超过七个指示点，正在显示的指示点放大。
 *  如果是中间指示点，那么点击键头会移动指示器并切换指示点，使当前指示点始终在中间
 *  如果是前后边缘指示点，那么点击键头不会移动指示器只切换指示点，使当前指示点像边缘移动
 */
const Indicator = memo((props) => {
    const { selectIndex = 0 } = props
    // contentRef绑定到指示器的div的dom上，来获得他的父盒子显示宽度（clientWidth）和自己盒子宽度（scrollWidth）
    const contentRef = useRef()

    useEffect(() => {
        // 1.获取selectIndex对应的item。得到item对应的宽度和离左侧父盒子边缘距离
        const selectItemEl = contentRef.current.children[selectIndex]
        const itemLeft = selectItemEl.offsetLeft
        const itemWidth = selectItemEl.clientWidth
        // 2.content的宽度
        const contentWidth = contentRef.current.clientWidth
        const contentScroll = contentRef.current.scrollWidth
        // 3.获取selectIndex要滚动的距离。计算公式如下，据左侧距离+盒子本身宽度*0.5-显示宽度
        let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
        // 4.特殊情况的处理
        if (distance < 0) distance = 0 // 左边的特殊情况处理。如果为负数说明左侧有空缺。若移动盒子左侧会出现空缺。此时不移动盒子，distance保持为0
        const totalDistance = contentScroll - contentWidth  // 最大距离
        if (distance > totalDistance) distance = totalDistance // 右边的特殊情况处理。如果大于最大距离说明右侧有空缺，若移动盒子右侧会出现空缺。此时不移动盒子，distance保持为0

        // 5.改变位置即可
        contentRef.current.style.transform = `translate(${-distance}px)`
    }, [selectIndex])

    return (
        <IndicatorWrapper>
            <div className='i-content' ref={contentRef}>
                {
                    props.children
                }
            </div>
        </IndicatorWrapper>
    )
})

Indicator.propTypes = {
    selectIndex: PropTypes.number
}

export default Indicator