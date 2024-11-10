import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './styly'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
const ScrollView = memo((props) => {
  //这里用来写组件内部的状态
  const [shwoRight, setShwoRight] = useState(false)
  const [shwoLight, setShwoLight] = useState(false)
  const [posIndex, setPostIndex] = useState(0)//用于计算移动的是那个一个盒子的偏移量
  let totalDistanceRef = useRef()

  //拿到数据后判断是否显示按钮
  const scrollContentRef = useRef(null)
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth//获取内容的大小
    const clientWidth = scrollContentRef.current.clientWidth//可见的区域的大小
    const totalDistance = scrollWidth - clientWidth//就是可滚动的距离
    totalDistanceRef.current = totalDistance
    if (totalDistance > 0) {
      setShwoRight(true)
    }
  }, [props.children])//根据传来的不同的对象来计算

  function controlClickHandle(isrtue) {
    const newIndex = isrtue ? posIndex + 1 : posIndex - 1
    console.log(newIndex);
    const newElm = scrollContentRef.current.children[newIndex]
    console.log(newElm.offsetLeft);
    //移动,并且移动的是scrollContent，是整个盒子一起移动，所以每次计算的索引值都要向后移动
    const newOffSetLeft = newElm.offsetLeft//这个是相较于移动盒子的距离
    //注意的是这里是直接赋值，所以是整体的移动，向左移动，移动的比原来的小，所以看上去向左移动
    scrollContentRef.current.style.transform = `translate(-${newOffSetLeft}px)`//默认正值是向右移动
    console.log(newOffSetLeft);
    console.log(totalDistanceRef.current);
    //判断右侧按钮是否显示
    //移动是的偏移量，当偏移量大于可滚动的距离，表示，超过的可滚动的区域，就要隐藏按钮
    setShwoRight(totalDistanceRef.current > newOffSetLeft)
    setShwoLight(newOffSetLeft > 0)
    setPostIndex(newIndex)

  }
  return (
    <ViewWrapper>
      {shwoLight && <div className='control left' onClick={() => controlClickHandle(false)}>
        <IconArrowLeft></IconArrowLeft>
      </div>}
      {shwoRight && <div className='control right' onClick={() => controlClickHandle(true)}>
        <IconArrowRight></IconArrowRight>
      </div>}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>

    </ViewWrapper>
  )
})

export default ScrollView

//移动逻辑，第二个盒子相较于左边的距离
// function rightHandle() {
//   //每次移动一个，然后idnex加一
//   const newIndex = posIndex + 1;
//   //取到要位移的距离
//   const newElm = scrollContentRef.current.children[newIndex]
//   console.log(newElm.offsetLeft);
//   //移动,并且移动的是scrollContent，是整个盒子一起移动，所以每次计算的索引值都要向后移动
//   const newOffSetLeft = newElm.offsetLeft//这个是相较于移动盒子的距离
//   scrollContentRef.current.style.transform = `translate(-${newOffSetLeft}px)`//默认正值是向右移动
//   console.log(newOffSetLeft);
//   console.log(totalDistanceRef.current);
//   //判断右侧按钮是否显示
//   //移动是的偏移量，当偏移量大于可滚动的距离，表示，超过的可滚动的区域，就要隐藏按钮
//   setShwoRight(totalDistanceRef.current > newOffSetLeft)
//   setShwoLight(newOffSetLeft > 0)
//   setPostIndex(newIndex)
// }
// function liftHandle() {
//   const newIndex = posIndex - 1;
//   const newElm = scrollContentRef.current.children[newIndex]
//   console.log(newElm.offsetLeft);
//   const newOffSetLeft = newElm.offsetLeft
//   scrollContentRef.current.style.transform = `translate(-${newOffSetLeft}px)`//这里整个盒子向右移动，所以为正值
//   console.log(newOffSetLeft);
//   console.log(totalDistanceRef.current);
//   setShwoRight(totalDistanceRef.current > newOffSetLeft)
//   setShwoLight(newOffSetLeft > 0)
//   setPostIndex(newIndex)
// }