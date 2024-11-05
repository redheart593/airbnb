import React, { memo } from 'react'
import RoomItem from '../room-item'
import { RoomWrapper } from './style'
const SectionRooms = memo((props) => {
  const { roomList = [] } = props
  return (
    <RoomWrapper>
      {roomList?.slice(0, 8).map((item) => {
        return <RoomItem key={item.id} itemData={item}></RoomItem>
      })}
    </RoomWrapper>
  )
})

export default SectionRooms