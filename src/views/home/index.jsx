import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home_banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
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
                {goodPriceInfo.title}
            </div>
        </HomeWrapper>
    )
})

export default Home