import styled from "styled-components";


export const IndicatorWrapper = styled.div`
    // 这里设置超出隐藏，使其只显示七个指示点
  overflow: hidden;  

  .i-content {
    display: flex;
    position: relative;
    transition: transform 200ms ease;

    > * {
      flex-shrink: 0;
    }
  }
`