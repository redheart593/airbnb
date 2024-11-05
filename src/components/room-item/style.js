import styled from "styled-components";


export const ItemWrapper = styled.div`
    box-sizing:border-box;
    width:25%;
    padding:8px;//使用padding+border-box的方法可以让，盒子宽度保持不变，内容向内撑开8px，外面看roomList的布局
    .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;//这里配合下面img的绝对定位，是为了想让这个盒子占据三分之二的宽度，避免图片格式不一样
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;//不用绝对定位，会被内容会被挤下去
      left: 0;//下面的样式是为了使他占据父盒子cover的100%
      top: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }
  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .count {
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal {
      margin-right: -2px;
    }
  }
`