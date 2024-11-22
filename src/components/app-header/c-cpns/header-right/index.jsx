import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './styled'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'

const HeaderRight = memo(() => {
    // 定义组件内部的状态，panel面板是否显示
    const [showPanel, setShowPanel] = useState(false)
    // 副作用代码，useEffect绑定了空数组，只在页面最开始渲染一次
    // 副作用函数作用是点击panel面板外部时不再显示，只需要组件渲染最开始绑定一次，后续渲染时不需要再绑定，所以使用useEffect

    /* 在这里由于冒泡阶段会触发所有父元素的事件监听，而window绑定的是setShowPanel(false)，所以即使点击了profile，通过profileClickHandle将
     showPanel设置为true了，但由于window是profile的父元素，所以还会再次触发windowHandleClick，将showPanel设置为false，造成panel无法出现*/

    /** 解决方法有两种
     * 一、阻止冒泡，点击profile之后不冒泡，就不会再执行window的事件监听
     * 二、将window的事件监听绑定到捕获阶段。由于捕获阶段先执行，所以冒泡过程profileClickHandle再执行，能够成功设置showPanel为true
     */
    useEffect(() => {
        const windowHandleClick = () => {
            setShowPanel(false)
        }
        // 默认是冒泡阶段执行，后边加上参数true变为捕获阶段执行
        window.addEventListener("click", windowHandleClick, true)
        // 组件销毁时移除副作用
        return () => {
            window.removeEventListener("click", windowHandleClick, true)
        }
    }, [])
    /** 事件处理函数 点击个人资料会显示panel*/
    const profileClickHandle = () => {
        setShowPanel(true)
    }
    return (
        <RightWrapper>
            <div className='btns'>
                <span className='btn'>登录</span>
                <span className='btn'>注册</span>
                <span className='btn'>
                    <IconGlobal />
                </span>
            </div>

            <div className='profile' onClick={profileClickHandle}>
                <IconProfileMenu />
                <IconProfileAvatar />
                {showPanel && (
                    <div className='panel'>
                        <div className='top'>
                            <div className='item register'>注册</div>
                            <div className='item login'>登录</div>
                        </div>
                        <div className='bottom'>
                            <div className='item'>出租房源</div>
                            <div className='item'>开展体验</div>
                            <div className='item'>帮助</div>
                        </div>
                    </div>
                )}
            </div>
        </RightWrapper>
    )
})

export default HeaderRight