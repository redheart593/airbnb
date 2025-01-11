import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchEntireListAction } from '@/store/modules/entire/createActions'
import { isEmptyO } from '@/utils/is-empty-object'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

const Entire = memo(() => {
    // 通过dispatch将网络请求这个action派发
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEntireListAction())
    }, [dispatch])
    return (
        <>
            <AppHeader isFixed={true} topAlpha={false} />
            <EntireWrapper>
                {/* 筛选条件 */}
                <EntireFilter />
                {/* 房间列表 */}
                {<EntireRooms />}
                {/* 分页器 */}
                <EntirePagination />
            </EntireWrapper>

        </>
    )
})

export default Entire
