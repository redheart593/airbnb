import PropTypes from 'prop-types'
import React, { memo, useState, useRef } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indictor';
import classNames from 'classnames';


const RoomItem = memo((props) => {

    const { itemData, itemWidth = "25%", itemClick } = props
    // 设置当前选中第几张图片的状态变量，默认是0第一张
    const [selectIndex, setSelectIndex] = useState(0)
    // 设置sliderRef绑定到轮播图的dom上，用来执行轮播图内置的函数
    const sliderRef = useRef()

    /** 事件处理的逻辑 点击箭头就调用相应的函数。*/
    function controlClickHandle(isNext = true, event) {
        // 上一个面板/下一个面板。根据传过来的参数判断，调用轮播图dom相应的函数
        isNext ? sliderRef.current.next() : sliderRef.current.prev()

        // 最新的索引   也是根据参数判断
        let newIndex = isNext ? selectIndex + 1 : selectIndex - 1

        // 判断当前是否处于第一张/最后一张，如果是新索引就回到最后一张/第一张
        const length = itemData.picture_urls.length
        if (newIndex < 0) newIndex = length - 1
        if (newIndex > length - 1) newIndex = 0

        // 最后把新索引设置进去
        setSelectIndex(newIndex)

        // 阻止事件冒泡
        event.stopPropagation()
    }

    // 点击指示器跳转到相应指示点的图片
    function itemClickTo(index, event) {
        // 轮播图设置好了goto函数
        sliderRef.current.goTo(index)
        setSelectIndex(index)
        event.stopPropagation()
    }


    // 这部分是图片不用轮播图展示的
    const coverElement = (
        <div className="cover" key={itemData._id}>
            <img src={itemData.picture_url} alt="" />
        </div>
    )

    // const noNavi = e => { e.stopPropagation() }

    // 这部分是图片用轮播图展示的
    // const swiperElement = (
    //     <div className="swiper">
    //         {/* 调用轮播图 */}
    //         <Carousel arrows infinite={false} afterChange={noNavi}>
    //             {
    //                 itemData?.picture_urls?.map((item) => {
    //                     return (
    //                         <div className="cover" key={item}>
    //                             <img src={item} alt="" />
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </Carousel>
    //     </div>
    // )
    const sliderElement = (
        <div className='slider'>
            {/* 设置左右箭头，点击时调用控制函数。左箭头传false过去，右箭头传true过去，以便其判断是哪个操作 */}
            {/* 注意这里点击时，不止执行子组件的控制函数，还会冒泡到父组件调用其切换页面函数，导致子组件无法实现轮播效果 */}
            {/* 所以要阻止冒泡，要通过箭头函数将点击事件传递过去，执行event.stopPropagation() */}
            {/* 按照chatgpt说法，普通函数调用时会自动将事件对象传递过去。但这里不知为何无法实现。只好通过箭头函数显式传递 */}
            <div className='control'>
                <div className='btn left' onClick={e => controlClickHandle(false, e)}>
                    {/* <div className='btn left' onClick={controlClickHandle}> */}
                    <IconArrowLeft width="30" height="30" />
                </div>
                <div className='btn right' onClick={e => controlClickHandle(true, e)}>
                    {/* <div className='btn right' onClick={controlClickHandle}> */}
                    <IconArrowRight width="30" height="30" />
                </div>
            </div>
            {/* 设置指示器，封装成了一个组件，把当前索引传进去判断边缘情况。整个对各指示点遍历过程都作为children传进去 */}
            <div className='indicator'>
                <Indicator selectIndex={selectIndex}>
                    {
                        itemData?.picture_urls?.map((item, index) => {
                            return (
                                <div className="item" key={item} onClick={(e) => itemClickTo(index, e)}>
                                    {/* 老规矩，如果遍历到当前索引就加上active属性 */}
                                    <span className={classNames("dot", { active: selectIndex === index })}></span>
                                </div>
                            )
                        })
                    }
                </Indicator>
            </div>
            {/* 引入轮播图，绑定上ref */}
            <Carousel dots={false} ref={sliderRef}>
                {
                    itemData?.picture_urls?.map(item => {
                        return (
                            <div className='cover' key={item}>
                                <img src={item} alt="" />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )

    // 子传父操作。点击函数调用，先判断父组件中是否有itemClick函数传过来。
    // 有的话就调用该函数，将子组件的数据传到父组件的函数中使用。没有就不用。
    // 这样来判断是在entire页还是home页点击。只需在entire页点击图片时跳转到详情页，所以使用该方法
    function itemClickHandle() {
        if (itemClick) itemClick(itemData)
    }

    return (
        // 各处用到该组件文字颜色可能不同，如果数据有该用什么颜色就传给style，没有就默认颜色
        <ItemWrapper
            $verifyColor={itemData?.verify_info?.text_color || "#39576a"}
            $itemWidth={itemWidth}
            // 点击该盒子就调用点击函数
            onClick={itemClickHandle}
        >
            <div className="inner">
                {/* 判断是否具有多张图片，如果有就用轮播图展示，反之就直接展示 */}
                {itemData.picture_urls ? sliderElement : coverElement}
                <div className="desc">
                    {/* 用join将照片信息数据的数组化为字符串，中间用点隔开 */}
                    {itemData.verify_info.messages.join(" · ")}
                    <div className="name">{itemData.name}</div>
                    <div className="price">￥{itemData.price}/晚</div>
                </div>
                <div className="bottom">
                    {/* 引入MUI中的Rating组件来设置评分部分，对其中的属性进行设置 */}
                    <Rating
                        // 默认是五分，系统有数据就按数据。这里使用??进行短路逻辑，因为数据可能是0，用||会造成误解
                        value={itemData.star_rating ?? 5}
                        // 评分颗粒度
                        precision={0.1}
                        // 只读
                        readOnly
                        // 自定义样式
                        sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
                    />
                    <span className='count'>{itemData.reviews_count}</span>
                    {
                        itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
                    }
                </div>
            </div>
        </ItemWrapper>
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object,
    itemWidth: PropTypes.string
}

export default RoomItem