import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyO } from '@/utils/is-empty-object'
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'


const Home = memo(() => {
    /** useSelector可以将存储在store中的所有状态拿过来
     *  1、先创建一个常量，一般名为state。这里是通过解构形式获取
     *  2、useSelector中return 一个对象赋值给常量。将store中要获取的状态赋值给对象的属性，一般属性名与状态相同。
     *  3、useSelector更新依赖于要获取的状态，默认是比较引用
     */
    const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } = useSelector((state) => {
        // 记得return多行需要加小括号！！！！
        return ({
            goodPriceInfo: state.home.goodPriceInfo,
            highScoreInfo: state.home.highScoreInfo,
            discountInfo: state.home.discountInfo,
            recommendInfo: state.home.recommendInfo,
            longforInfo: state.home.longforInfo,
            plusInfo: state.home.plusInfo
        })
    }, shallowEqual) // shallowEqual作用是改为浅比较，如果对象引用改变但内容不变组件就不需要重新渲染。有的时候只是创建了新对象，但内容相同，这样就无需重新渲染

    // 发起相关网络请求，如果网络请求是同步的（阻塞式），网络阻塞时主线程会被卡住，直到网络响应返回。产生如下问题：
    // 1、冻结： 如果页面在等待网络响应时无法执行其他任务，用户体验会非常糟糕。
    // 2、性能低下： 一个耗时的网络请求可能阻塞其他重要任务，比如用户交互或动画渲染。
    // 所以网络请求是个异步事件，用到dispatch派发异步事件
    const dispatch = useDispatch()
    // 通过useEffect控制异步任务执行，由于网络请求只需要一次，每次页面打开组件挂载时执行一次即可，所以依赖项可以是一个空数组，也可以把dispatch放进去（因为dispatch不会改变）
    useEffect(() => {
        // 组件第一次渲染时执行dispatch获得数据
        dispatch(fetchHomeDataAction())
    }, [dispatch])


    return (
        <HomeWrapper>
            <HomeBanner />
            <div className="content">
                {/* 将每部分房间列表封装为组件，传入数据 */}
                {/* 封装一个isEmptyO函数来判断是否有数据 */}
                {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} />}
                {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
                {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
                {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
                {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
                {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
            </div>
        </HomeWrapper>
    )
})

export default Home
