import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import theme from '@/assets/theme'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
    const { name } = props
    // 添加跳转逻辑，点击更多时跳转到详情页
    const navigate = useNavigate()  // 使用useNavigate实现
    function moreClickHandle() {
        navigate("/entire") // 给路由后边加上括号里的字符串，跳转至该页面
    }
    return (
        <FooterWrapper color={name ? theme.color.secondaryColor : "#000"}>
            {/* 有的组件需要动态显示当前选中的tab名，有的不需要。有需要的会传入name数据，通过三元表达式来判断实现 */}
            <div className="info" onClick={moreClickHandle}>
                <span className='text'>{name ? `显示更多${name}房源` : "显示全部"}</span>
                <IconArrowRight />
            </div>
        </FooterWrapper>
    )
})

SectionFooter.propTypes = {
    name: PropTypes.string
}

export default SectionFooter