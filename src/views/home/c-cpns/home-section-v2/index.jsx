import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'

import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
    // 获取数据
    const { infoData } = props


    // 获取列表中第一项数据作为默认数据
    const initialName = Object.keys(infoData.dest_list)[0]
    // 对数据进行处理，将所有折扣数据的name提出并传入SectionTabs
    const tabNames = infoData.dest_address?.map(item => item.name) || []
    // 设置城市名变量，默认是第一项数据
    const [name, setName] = useState(initialName)
    /**
     * 在组件初次渲染时，由于第一次渲染传过来的数据一定是空，只有异步网络请求执行完之后才会获取数据进行第二次渲染
     * 所以必须在第二次渲染后重新给name赋值
     * 可以通过useEffect在传过来数据发生改变时重新setName
     * 但这样会导致组件再次渲染，如果过多会影响性能，所以考虑在外部直接保证第一次是有数据的
     */
    // useEffect(() => {
    //   setName("xxxxx")
    // }, [infoData])


    // 设置传递的函数，函数体中设置城市名为传过来的参数。使用useCallback来优化，依赖项不改变时函数不改变。
    const tabClick = useCallback((index, name) => {
        setName(name)
    }, [])
    return (
        <SectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            {/* 选中的tab名在子组件中，通过传递函数的方式将tab名子传父 */}
            <SectionTabs tabNames={tabNames} tabClick={tabClick} />
            <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.3333%" />
            <SectionFooter name={name} /*将当前选中的tab名传给footer，在其中显示*/ />
        </SectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV2