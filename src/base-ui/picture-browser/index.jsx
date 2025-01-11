import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from "react-transition-group"

import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon_close'
import { BrowserWrapper } from './style'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import Indicator from '../indictor'
import classNames from 'classnames'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'

const PictureBrowser = memo((props) => {
    const { pictureUrls, closeClick } = props
    // 设置状态变量保存当前图片index
    const [currentIndex, setCurrentIndex] = useState(0)
    // 设置状态变量保存点击了哪个箭头，再交给样式文件判断给什么样的动画效果
    const [isNext, setIsNext] = useState(true)
    // 设置状态变量保存indictor的显隐
    const [showList, setShowList] = useState(true)

    // 当图片浏览器展示出来时, 滚动的功能消失。这里是组件渲染完之后实现，属于副作用，所以用useEffect
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            // 关闭后重新开启
            document.body.style.overflow = "auto"
        }
    }, [])

    /** 点击关闭按钮 当有关闭函数传来时执行。*/
    function closeBtnClickHandle() {
        if (closeClick) closeClick()
    }

    /** 点击箭头按钮，执行图片切换并设置新Index。原理与指示器indictor相同，这里不再赘述 */
    function controlClickHandle(isNext = true) {
        let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
        if (newIndex < 0) newIndex = pictureUrls.length - 1
        if (newIndex > pictureUrls.length - 1) newIndex = 0

        setCurrentIndex(newIndex)
        setIsNext(isNext)
    }

    // 点击指示器中的图片后调用这一函数，设置新的index值，并根据index判断不同的动画效果
    function bottomItemClickHandle(index) {
        setIsNext(index > currentIndex)
        setCurrentIndex(index)
    }

    return (
        // 传入isNext来判断执行左右箭头不同的动画效果
        <BrowserWrapper isNext={isNext} showList={showList}>
            <div className='top'>
                <div className='close-btn' onClick={closeBtnClickHandle}>
                    <IconClose />
                </div>
            </div>
            <div className='slider'>
                {/* 点击箭头触发控制函数，传递参数判断是上一张/下一张 */}
                <div className='control'>
                    <div className='btn left' onClick={e => controlClickHandle(false)}>
                        <IconArrowLeft width="77" height="77" />
                    </div>
                    <div className='btn right' onClick={e => controlClickHandle(true)}>
                        <IconArrowRight width="77" height="77" />
                    </div>
                </div>
                {/* 这里不是轮播图，因为个高图片大小不一，使用轮播图展示较麻烦。直接在div里放一个img并受控制 */}
                <div className='picture'>
                    {/** SwitchTransition专注于在两个组件之间切换时的动画处理，可以控制切换时的动画顺序
                     *  mode属性来控制切换方式，"out-in": 当前组件先退出，新的组件再进入。"in-out": 新的组件先进入，当前组件再退出。
                     *  子组件必须使用 CSSTransition 或 Transition，并确保 key 属性唯一。
                     */}
                    <SwitchTransition mode='in-out'>
                        {/** CSSTransition设置单一盒子的动画效果。
                         *   内部属性：in来控制动画触发与否
                         *            key确保多个组件切换时都有唯一标识
                         *            classNames设置类名
                         *            timeout设置动画时长
                         */}
                        <CSSTransition
                            key={pictureUrls[currentIndex]}
                            classNames="pic"
                            timeout={200}
                        >
                            {/* 图片src根据当前index设置 */}
                            <img src={pictureUrls[currentIndex]} alt="" />
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
            <div className='preview'>
                <div className='info'>
                    <div className='desc'>
                        <div className='count'>
                            {/* 显示当前第几页/总共页数 */}
                            <span>{currentIndex + 1}/{pictureUrls.length}:</span>
                            {/* 显示当前第几页 */}
                            <span>room apartment图片{currentIndex + 1}</span>
                        </div>
                        {/* 点击实现显示隐藏切换 */}
                        <div className='toggle' onClick={e => setShowList(!showList)}>
                            <span>{showList ? "隐藏" : "显示"}照片列表</span>
                            {showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
                        </div>
                    </div>
                    <div className='list'>
                        {/* 将当前index传过去，逻辑与轮播图中的indicator一致 */}
                        <Indicator selectIndex={currentIndex}>
                            {
                                pictureUrls.map((item, index) => {
                                    return (
                                        <div
                                            className={classNames("item", { active: currentIndex === index })}
                                            key={item}
                                            onClick={e => bottomItemClickHandle(index)}
                                        >
                                            <img src={item} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Indicator>
                    </div>
                </div>
            </div>
        </BrowserWrapper>
    )
})

PictureBrowser.propTypes = {
    pictureUrls: PropTypes.array
}

export default PictureBrowser