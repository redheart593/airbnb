import styled from "styled-components";


export const FooterWrapper = styled.div`
  // 使hover时小手只在info文字上显示，而不是一行都显示
  display: flex;
  margin-top: 10px;

  .info {
    // 居中
    display: flex;
    align-items: center;
    cursor: pointer;

    font-size: 17px;
    font-weight: 700;
    color: ${props => props.color};
    
    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
  }
`