import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { RoomWrapper } from './style'
import RoomItem from '../house-item'

const SectionRooms = memo((props) => {
    const { roomList = [], itemWidth } = props
    return (
        <RoomWrapper>
            {
                roomList.slice(0, 8)?.map(item => {
                    return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id} />
                })
            }
        </RoomWrapper>
    )
})

SectionRooms.propTypes = {
    roomList: PropTypes.array,
    itemWidth: PropTypes.string
}

export default SectionRooms