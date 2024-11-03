import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  //这里是控制面板的展示
  const [showPanel, setshouwPanel] = useState(false);
  //点击事件
  const profikeClickHandle = () => {
    setshouwPanel(true)
  }
  //给窗口window添加事件，只要给他添加一次，所以是空依赖
  useEffect(() => {
    function windowHandleClick() {
      setshouwPanel(false)
    }
    window.addEventListener("click", windowHandleClick, true)//表示的是事件捕获，默认的是冒泡，这样会导致触发显示的时候，会向上触发这个时间，这里既可以禁止冒泡，也可以换为捕获
    return () => {//取消事件
      window.removeEventListener('click', windowHandleClick)
    }
  }, [])
  return (
    <RightWrapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={() => profikeClickHandle()}>
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className=" item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className=" item">出售房源</div>
              <div className=" item">开展体验</div>
              <div className="item">帮助</div>

            </div>
          </div>)}

      </div>
    </RightWrapper>
  )
})

export default HeaderRight