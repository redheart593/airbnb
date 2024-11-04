import styled from "styled-components";


export const ItemWrapper = styled.div`
    box-sizing:border-box;
    width:25%;
    padding:8px;//使用padding+border-box的方法可以让，盒子宽度保持不变，内容向内撑开8px，外面看roomList的布局
`