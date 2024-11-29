import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'

const LongforItem = memo((props) => {
    const { itemData } = props
    return (
        <ItemWrapper>
            <div className='inner'>
                <div className='item-info'>
                    {/* 展示图片 */}
                    <img className='cover' src={itemData.picture_url} alt="" />
                    {/* 添加蒙层 */}
                    <div className='bg-cover'></div>
                    {/* 添加城市和均价 */}
                    <div className='info'>
                        <div className='city'>{itemData.city}</div>
                        <div className='price'>均价 {itemData.price}</div>
                    </div>
                </div>
            </div>
        </ItemWrapper>
    )
})

LongforItem.propTypes = {
    itemData: PropTypes.object
}

export default LongforItem