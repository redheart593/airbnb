import React, { memo } from 'react'
import { LongForWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongForItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'
const HomeLongFor = memo((props) => {
  const { infoData } = props
  return (
    <LongForWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <div className='longfor-list'>
        <ScrollView>
          {infoData?.list.map(item => {
            return <LongForItem itemData={item} key={item.city}></LongForItem>
          })}
        </ScrollView>
      </div>
    </LongForWrapper>
  )
})

export default HomeLongFor