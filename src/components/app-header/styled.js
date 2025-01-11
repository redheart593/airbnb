// 通过js-in-css方式进行设置样式，首先安装styled-components库并引用styled
import styled from "styled-components"

// 导出一个名为HeaderWrapper的styled.div，styled后是什么元素就导出一个该元素，通过模板字符串设置样式
export const HeaderWrapper = styled.div`
    &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }
       
  .content {
    position: relative;
    z-index: 19;
    /* 根据变量判断颁奖颜色和底边颜色 */
    transition: all 250ms ease;
    background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
    border-bottom: 1px solid #eee;
    border-bottom-color: ${props => props.theme.isAlpha ? "rgba(233,233,233,0)" : "rgba(233,233,233,1)"};
    .top {
      display: flex;
      align-items: center;
      height: 80px;

    }
  }
  .cover {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, .3);
  }
`

export const SearchAreaWrapper = styled.div`
  transition: height 250ms ease;
  height: ${props => props.isSearch ? "100px" : "0"};
`