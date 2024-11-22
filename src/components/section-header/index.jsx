import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
    // 解构获取传来的参数
    const { title, subtitle } = props
    return (
        <HeaderWrapper>
            <h2 className='title'>{title}</h2>
            {subtitle && <div className="subtitle">{subtitle}</div>}
        </HeaderWrapper>
    )
})

// 对组件进行类型验证，保证传过来的参数符合组件参数要求。如这里要求是字符串
SectionHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default SectionHeader