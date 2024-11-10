import React, { memo } from 'react'
import { ItemWarrper } from './style'
const LongForItem = memo((props) => {
  const { itemData } = props
  return (
    <ItemWarrper>
      <div className="inner">
        <div className="item-info">
          <img src={itemData.picture_url} alt="" className="cover" />
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">
              {itemData.city}
            </div>
            <div className="price">
              均价 {itemData.price}
            </div>
          </div>

        </div>
      </div>
    </ItemWarrper>
  )
})

export default LongForItem