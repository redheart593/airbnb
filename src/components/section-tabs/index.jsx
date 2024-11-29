import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { TabsWrapper } from './style'
import ScrollView from '../../base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  // 获取当前选中的tab，默认为0
  const [currentIndex, setCurrentIndex] = useState(0)

  // 点击后设置index索引值，并向父组件传递城市名
  function itemClickHandle(index, item) {
    setCurrentIndex(index)
    tabClick(index, item)
  }

  return (
    <TabsWrapper>
      {/* 在TabsWrapper内部包一个ScrollView组件，实现tab栏的滚动效果。把内部逻辑作为children传给ScrollView组件 */}
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div
                key={index}
                // 通过classNames，当前tab为选中的tab就添加选中样式
                className={classNames("item", { active: index === currentIndex })}
                onClick={() => itemClickHandle(index, item)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  tabClick: PropTypes.func
}

export default SectionTabs