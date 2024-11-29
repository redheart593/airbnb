import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { fetchEntireListAction } from '@/store/modules/entire/createActions'

const Entire = memo(() => {
    // 通过dispatch将网络请求这个action派发
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEntireListAction())
    }, [dispatch])
    return (
        <EntireWrapper>
            {/* 筛选条件 */}
            <EntireFilter />
            {/* 房间列表 */}
            <EntireRooms />
            {/* 分页器 */}
            <EntirePagination />
        </EntireWrapper>
    )
})

export default Entire
