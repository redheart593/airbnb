import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home_banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
const Home = memo(() => {
    const { goodPriceInfo, highScoreInfo } = useSelector((state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo

    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHomeDataAction())
    }, [dispatch])
    return (
        <HomeWrapper>
            <HomeBanner></HomeBanner>
            <div className="content">
                <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
                <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
            </div>

        </HomeWrapper>
    )
})

export default Home