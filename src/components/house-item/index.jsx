import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'

const RoomItem = memo((props) => {
    const { itemData } = props
    return (
        // 各处用到该组件文字颜色可能不同，如果数据有该用什么颜色就传给style，没有就默认颜色
        <ItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"}>
            <div className="inner">
                <div className="cover">
                    <img src={itemData.picture_url} alt="" />
                </div>
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
    itemData: PropTypes.object
}

export default RoomItem