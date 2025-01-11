import PictureBrowser from '@/base-ui/picture-browser'
import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { PicturesWrapper } from './style'

const DetailPictures = memo(() => {
  /** 定义组件内部的状态，是否显示图片浏览器的状态，默认false不显示 */
  const [showBrowser, setShowBrowser] = useState(false)

  /** redux获取数据 */
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  return (
    <PicturesWrapper>
      <div className='pictures'>
        <div className='left'>
          <div className='item'>
            {/* 最左边的首要图片 */}
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          {
            // 右边展示接下来的四张图片
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className='item' key={item}>
                  <img src={item} alt="" />
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* 点击显示图片，状态变为true，重新渲染显示图片浏览器 */}
      <div className='show-btn' onClick={e => setShowBrowser(true)}>显示照片</div>
      {/* 图片浏览器 */}
      {showBrowser && (
        <PictureBrowser
          // 将所有照片数据传过去
          pictureUrls={detailInfo.picture_urls}
          // 将关闭图片浏览器函数传给子函数来调用
          closeClick={e => setShowBrowser(false)}
        />
      )}
    </PicturesWrapper>
  )
})

export default DetailPictures