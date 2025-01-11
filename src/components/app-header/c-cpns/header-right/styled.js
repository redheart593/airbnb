// import styled from "styled-components";

// export const RightWrapper = styled.div`
//     // 左右各占1，中间不占，使得中间能够对齐
//     flex: 1;
//     // 为使右侧盒子内的元素从右往左开始排列，定义一个justify-content: end
//     display: flex;
//     justify-content: end;


// `
import styled from "styled-components"

export const RightWrapper = styled.div`
// 左右各占1，中间不占，使得中间能够对齐
  flex: 1;
  display: flex;
  // 为使右侧盒子内的元素从右往左开始排列，定义一个justify-content: end
  justify-content: flex-end;
  // 居中
  align-items: center;
  /* 颜色为文字颜色 */
  color: ${props => props.theme.color.textColor};
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;
    color: ${props => props.theme.isAlpha ? "#fff" : props.theme.color.textColor};

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;
      
      // 在css-in-js less或sass中相当于.btns:hover {}
      &:hover {
        background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,.1)" : "#f5f5f5"};
      }
    }
  }

  .profile {
    display: flex;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;

    /* transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,0.18);
    } */
    // 调用混入，执行上边的动画效果
    ${props => props.theme.mixin.boxShadow}
    .panel {
      position: absolute;
      top: 70px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0,0,0,.2);
      color: #666;

      .top, .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
  
`