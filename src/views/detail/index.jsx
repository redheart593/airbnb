import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HousePicture from './c-cpns/house-picture'
import { DetailWrapper } from './style'
import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'

// import { changeHeaderConfigAction } from '@/store/features/main'

const Detail = memo(() => {
    // 拿到点击的detailInfo数据
    const { detailInfo } = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }))
    console.log(detailInfo)
    const { picture_urls } = detailInfo
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(changeHeaderConfigAction({ topSearch: false, topFixed: false }))
    // }, [dispatch])

    return (
        <>
            <AppHeader isFixed={false} topAlpha={false} />
            <DetailWrapper>
                {/* 将图片传到图片组件 */}
                <HousePicture picturesData={picture_urls} />
            </DetailWrapper>

        </>

    )
})

export default Detail