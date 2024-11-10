import React, { memo, useCallback, useEffect, useState } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home_banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchHomeDataAction } from '@/store/modules/home'
import HomeSectionV1 from './c-cpns/home-section-v1'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/sections-tabs'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { inEmpO } from '@/utils'
import HomeLongFor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
const Home = memo(() => {
    const { goodPriceInfo, highScoreInfo, discountInfo, hotCommInfo, longforInfo, plusInfo } = useSelector((state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        hotCommInfo: state.home.hotCommInfo,
        longforInfo: state.home.longforInfo,
        plusInfo: state.home.plusInfo
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHomeDataAction())
    }, [dispatch])
    return (
        <HomeWrapper>
            <HomeBanner></HomeBanner>
            <div className="content">

                {inEmpO(discountInfo) && <HomeSectionV2 infoData={discountInfo} ></HomeSectionV2>}
                {inEmpO(hotCommInfo) && <HomeSectionV2 infoData={hotCommInfo} ></HomeSectionV2>}
                {inEmpO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>}
                {inEmpO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>}
                {inEmpO(longforInfo) && <HomeLongFor infoData={longforInfo}></HomeLongFor>}
                {inEmpO(plusInfo) && <HomeSectionV3 infoData={plusInfo}></HomeSectionV3>}


            </div>

        </HomeWrapper>
    )
})

export default Home