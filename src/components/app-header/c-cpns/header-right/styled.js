import styled from "styled-components";

export const RightWrapper = styled.div`
    // 左右各占1，中间不占，使得中间能够对齐
    flex: 1;
    // 为使右侧盒子内的元素从右往左开始排列，定义一个justify-content: end
    display: flex;
    justify-content: end;
`