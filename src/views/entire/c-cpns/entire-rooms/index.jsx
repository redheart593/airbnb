import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import RoomItem from '@/components/house-item'
import { shallowEqual, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changedetailInfo } from '@/store/modules/detial';

const EntireRooms = memo((props) => {
    // 获取redecer中的数据
    const { houseList = [], totalCount, isLoading } = useSelector((state) => ({
        houseList: state.entire.houseList,
        totalCount: state.entire.totalCount,
        isLoading: state.entire.isLoading
    }), shallowEqual)


    const navigate = useNavigate()
    const dispatch = useDispatch()
    // 子传父操作，设置函数来获取到子组件的数据，并将数据在父组件中操作。点击room跳转到详情页。将这个room中的数据传到redux。用useCallback优化
    const itemClickHandel = useCallback((itemData) => {
        dispatch(changedetailInfo(itemData))
        navigate("/detail")
    }, [dispatch, navigate])
    return (
        <RoomsWrapper>
            {/* 展示数据 */}
            <h2 className='title'>有{totalCount}处房源</h2>
            <div className="list">
                {
                    houseList.map((item) => {
                        return (
                            <RoomItem key={item._id} itemData={item} itemWidth="20%" itemClick={itemClickHandel} />
                        )
                    })
                }
            </div>
            {/* 设置蒙版，当网络请求中isloading为false，显示蒙版。 */}
            {isLoading && <div className="cover"></div>}
        </RoomsWrapper>
    )
})

EntireRooms.propTypes = {
}

export default EntireRooms