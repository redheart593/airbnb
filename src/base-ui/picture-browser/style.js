import styled from "styled-components";


export const BrowserWrapper = styled.div`
  position: fixed;
  z-index: 999; // -1 1 9 99 999
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;

  background-color: #333;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;
    
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

      /* 动画的样式 */
      // 根据CSSTransition属性确定的类名决定
      // 直接在enter/exit和enter-active/exit-active中设置不同阶段的开始和最终效果即可

      // 传入样式
      .pic-enter {
        // 如果isNext就从右侧进，反之从左侧进
        transform: translateX(${props => props.isNext ? "100%" : "-100%"});
        // 开始透明，结束不透明
        opacity: 0;
      }

      // 传入结束样式
      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        // 结束时要设置transition
        transition: all 200ms ease;
      }

      // 传出样式
      .pic-exit {
        // 开始不透明。结束透明
        opacity: 1;
      }

      // 传出结束样式
      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }

  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;
    
    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        /* 设置显示或隐藏指示器indictor组件的高度，并加上动画效果 */
        height: ${props => props.showList ? "67px" : "0"};

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`