import React, { memo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Pagination from '@mui/material/Pagination'
import { PaginationWrapper } from './style'
import { fetchEntireListAction } from '@/store/modules/entire/createActions'

const CPagination = memo(() => {
    const { totalCount, currentPage, houseList } = useSelector(state => ({
        totalCount: state.entire.totalCount,
        currentPage: state.entire.currentPage,
        houseList: state.entire.houseList
    }), shallowEqual)

    const dispatch = useDispatch()

    // 计算分页器页数总数，除以显示数据量再向上取整得到
    const count = Math.ceil(totalCount / 20)
    // 计算本页数据从哪一条开始
    const start = currentPage * 20 + 1
    // 从哪一条结束
    const end = (currentPage + 1) * 20

    // 这个是设置好的根据点击页数获取相应数据的函数，默认传入点击的页数
    const handlePageChange = (event, newPage) => {
        // 每次点击新页数，回到顶部
        window.scrollTo(0, 0)
        // 派发网络请求，获取新页数的数据。参数是点击页数-1，因为获得的是从第0条开始，如果是第一页就是1-1=0第0条开始。后边的页数算法相同，从第(页数-1)*20开始。
        dispatch(fetchEntireListAction(newPage - 1))
    }

    return (
        <PaginationWrapper>
            {/** 引入MUI中封装好的分页器组件直接使用。count是页数。onchange是点击到第几页，调用已设置好的函数
             * 如果有样式在组件中未被设置需要自定义。
             * 方法一是通过创建theme（createTheme）重新定义primary，secondary等，再将app包装到ThemeProvider中
             * 方法二是直接找到该组件对应设置样式的css主题，对器进行设置，就会覆盖掉默认的属性。这里采取的是第二种
            */}
            {   // 有数据才显示分页器，所以用houseList.length做短路逻辑
                !!(houseList.length) && (
                    <div className="info">
                        <Pagination count={count} color="primary" onChange={handlePageChange} />
                        <div className='desc'>
                            <span>第 {start} - {end} 个房源，共超过 {totalCount} 个</span>
                        </div>
                    </div>)

            }
        </PaginationWrapper>
    )
})

export default CPagination