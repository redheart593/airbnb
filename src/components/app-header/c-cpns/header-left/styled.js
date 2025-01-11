import styled from "styled-components"
export const LeftWrapper = styled.div`
    flex: 1;
    display: flex;
    // 居中
    align-items: center;
    // svg标签颜色默认为里其最近以及盒子设置的颜色
    // 这里颜色在多处都会用到，所以使用变量
    /* 可以使用less语法@primaryColor，也可以使用css使用全局变量的语法var(--primaryColor) */
    // 也可以使用styled-components提供的方法,在{}内部调用theme对象中的color对象中的primaryColor
    color: ${props => props.theme.isAlpha ? "#fff" : props.theme.color.primaryColor};

    .logo {
        margin-left: 24px;
        cursor: pointer;
    }
`