import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'
const SectionFooter = memo((props) => {
  const { name } = props
  //显示的内容
  let textMeg = '显示全部'
  if (name) {
    textMeg = `显示${name}更多房源`
  }
  const navigator = useNavigate()
  function moreClickHandle() {
    navigator('/entire')
  }
  return (
    <FooterWrapper color={name ? "#00848A" : "#000"
    }>
      <div className='info' onClick={moreClickHandle}>
        <span className='text'> {textMeg}</span>
        <IconMoreArrow></IconMoreArrow>
      </div>
    </FooterWrapper >
  )
})

export default SectionFooter