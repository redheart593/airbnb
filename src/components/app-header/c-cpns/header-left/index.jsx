import React, { memo } from 'react'
import { LeftWrapper } from './styled'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
    // 点击图标就跳转到主页。注意需要将appHeader包裹在router中才能使用。
    const navigate = useNavigate()
    function toHome() {
        window.scrollTo(0, 0)
        navigate("/home")
    }
    return (
        <LeftWrapper>
            {/* 通过svg方式来设置图标，svg本身是一种矢量图型，在网页中代替图片可以提升加载速度。 */}
            {/* svg有两种设置方式，一种是作为外部文件引入html或css文件。另一种是直接在html中设置svg元素和样式。后者好处是可以嵌入html中一起加载，无需多余外部文件，与网站同步加载。可以将svg放在组件中使用 */}
            {/* 把logo套到一个盒子里，对盒子定义悬浮箭头变小手，可以只限定在logo内 */}
            <div className='logo' onClick={toHome}><IconLogo /></div>
        </LeftWrapper>
    )
})

export default HeaderLeft