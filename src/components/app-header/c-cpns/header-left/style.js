import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${props => props.theme.color.primaryColor};
  //这里不能直接加鼠标样式，因为flex会导致整体的都有而不是部分
  .logo {
  //这里是给里面包含的内容设置鼠标样式
    margin-left: 24px;
    cursor: pointer;
  }
`
