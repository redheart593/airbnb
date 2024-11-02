import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo } from 'react'
import { CenterWrapper } from './style'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="searrch-bar">
        <div className="text">
          搜索房源
        </div>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div>

    </CenterWrapper>
  )
})

export default HeaderCenter