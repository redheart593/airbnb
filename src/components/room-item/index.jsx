import React, { memo } from 'react'
import { ItemWrapper } from './style'
import PropTypes from "prop-types"
const RoomItem = memo((props) => {
  const { itemData } = props
  return (
    <ItemWrapper>{itemData.name}</ItemWrapper>
  )
})
// RoomItem.protoTypes = {
//   itemData: PropTypes.object
// }
export default RoomItem