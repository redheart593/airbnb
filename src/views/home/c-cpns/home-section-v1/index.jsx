import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
    const { infoData } = props
    return (
        // <SectionV1Wrapper>
        //     {/* 先引入模块头部组件 */}
        //     <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
        //     {/* 再引入模块房间列表组件 */}
        //     <SectionRooms houseList={infoData.list} />
        // </SectionV1Wrapper>
        <SectionV1Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <SectionRooms houseList={infoData.list} itemWidth="25%" /*每个部分宽度不同，单独传入*/ />
            <SectionFooter />
        </SectionV1Wrapper>
    )
})

HomeSectionV1.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV1