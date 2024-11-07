import React, { memo } from 'react'
import { LeftWrapper } from './styled'
import IconLogo from '@/assets/svg/icon_logo'

const HeaderLeft = memo(() => {
    return (
        <LeftWrapper>
            {/* 通过svg方式来设置图标，svg本身是一种矢量图型，在网页中代替图片可以提升加载速度。 */}
            {/* svg有两种设置方式，一种是作为外部文件引入html或css文件。另一种是直接在html中设置svg元素和样式。后者好处是可以嵌入html中一起加载，无需多余外部文件，与网站同步加载。可以将svg放在组件中使用 */}
            <IconLogo />
        </LeftWrapper>
    )
})

export default HeaderLeft