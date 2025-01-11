import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper } from './styled'
import { SearchAreaWrapper } from './styled'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo((props) => {
    // 判断是否在搜索状态
    const [isSearch, setIsSearch] = useState(false);
    // isFixed判断是否appheader固定在视口上
    const { isFixed, topAlpha } = props
    /** 监听滚动的监听 */
    const { scrollY } = useScrollPosition()
    // 用useRef记录滚动位置，默认是0。用useRef好处是不需要每次更新就渲染
    const prevY = useRef(0)
    // 在正常情况的情况下(搜索框没有弹出来), 不断记录值
    if (!isSearch) prevY.current = scrollY
    // 在弹出搜索功能的情况, 滚动的距离大于之前记录的距离的30就设置isSearch为false，不再显示弹出的搜索框
    if (isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)
    // 通过isAlpha变量判断是否有顶部切换动画效果和默认顶部情况
    const isAlpha = (topAlpha && scrollY === 0)
    return (
        // 把isAlpha放到themeProvider中，从而使得内部的组件都可以使用
        <ThemeProvider theme={{ isAlpha }}>
            <HeaderWrapper className={classNames({ fixed: isFixed })}>
                <div className='content'>
                    <div className='top'>
                        <HeaderLeft />
                        {/* 如果isAlpha为true则说明现在是home页面且位于顶部，所以显示搜索栏，传递的属性为true，不需判断后边的变量 */}
                        <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e => setIsSearch(true)} />
                        <HeaderRight />
                    </div>
                    {/* 搜索栏，页面位于顶部时isSearch属性为true，显示。不位于顶部时当isSearch变量为true时显示 */}
                    <SearchAreaWrapper isSearch={isAlpha || isSearch} />
                </div>
                {/* 蒙版，当搜索时出现，点击就设置setIsSearch为false不再弹出搜索栏 */}
                {isSearch && <div className='cover' onClick={e => setIsSearch(false)}></div>}
            </HeaderWrapper>
        </ThemeProvider>
    )
})


export default AppHeader