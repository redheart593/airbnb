import React, { memo, useState } from 'react'
import { TabsWrapper } from './styled'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'
const SectionTabs = memo((props) => {
  const { tabNames = [], tabClickHandle } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemClickHandel = (index, name) => {
    setCurrentIndex(index)
    tabClickHandle(name)//这里要传入名字，以便在tabs切换的时候，用它来获取不同的数组
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames("item", { active: index === currentIndex })}
              onClick={() => itemClickHandel(index, item)}
            >{item}</div>
          )
        })}
      </ScrollView>
    </TabsWrapper>
  )
})

export default SectionTabs