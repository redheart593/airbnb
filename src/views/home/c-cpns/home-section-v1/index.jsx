import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
const HomeSsctionV1 = memo(({ infoData }) => {
  return (
    <SectionV1Wrapper>

      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      {/* 可选链 */}
      <SectionRooms roomList={infoData.list}></SectionRooms>

    </SectionV1Wrapper>
  )
})

export default HomeSsctionV1