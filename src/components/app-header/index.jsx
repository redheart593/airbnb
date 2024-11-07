import React, { memo } from 'react'
import { HeaderWrapper } from './styled'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'

const AppHeader = memo(() => {
    return (
        // 引入样式元素，包裹在这个盒子内部的元素都可以调用样式
        <HeaderWrapper>
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
        </HeaderWrapper>
    )
})

export default AppHeader