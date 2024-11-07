// 通过js-in-css方式进行设置样式，首先安装styled-components库并引用styled
import styled from "styled-components"

// 导出一个名为HeaderWrapper的styled.div，styled后是什么元素就导出一个该元素，通过模板字符串设置样式
export const HeaderWrapper = styled.div`
    display: flex; // flex布局
    align-items: center;    // 垂直居中
    height: 80px;
    border-bottom: 1px solid #eee;
`