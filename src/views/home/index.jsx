import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home_banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
const Home = memo(() => {
    const { goodPriceInfo } = useSelector((state) => state.home, shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHomeDataAction())
    }, [dispatch])
    return (
        <HomeWrapper>
            <HomeBanner></HomeBanner>
            <div className="content">
                <div className="good-price">
                    <SectionHeader title={goodPriceInfo.title} ></SectionHeader>
                    {/* 可选链 */}
                    <ul className='room-list'>
                        {goodPriceInfo.list?.slice(0, 8).map((item) => {
                            return <RoomItem key={item.id} itemData={item}></RoomItem>
                        })}
                    </ul>
                </div>
            </div>

        </HomeWrapper>
    )
})

export default Home