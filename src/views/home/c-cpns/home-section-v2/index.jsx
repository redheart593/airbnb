import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/sections-tabs'
import { SectionV2Wrapper } from './style'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {

  /** 从props获取数据 */
  const { infoData } = props

  /** 定义内部的state */
  //显示第一个对象的名字
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  //处理接受来的的数据，这是为了直接传到组件里面的是个相对应的数组
  const tabNames = infoData.dest_address?.map((item) => item.name)
  //这里使用useCallback的原因就是每次组件更新，都会重新创建这个函数，并且传入，这样不利于性能,空依赖
  const tabClickHandle = useCallback(function (name) {
    setName(name || '佛山')
    console.log(name);
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClickHandle={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33333%" />
      <SectionFooter name={name}></SectionFooter>
    </SectionV2Wrapper>
  )

})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2