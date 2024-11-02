import styled from "styled-components";


export const RightWrapper = styled.div`
//这里是为了这个 =子盒子与左边平分剩余空间，而让中间居中  
flex:1;
//下面是为了从右边开始占据，要不然占据的是从左边开始
  display:flex;
  justify-content:flex-end;
  align-items:center;
  .btns{
    display:flex;
    align-items: center;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  } 
.profile {
    position:relative;
    display: flex;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color:${props => props.theme.text.primaryColor}
    cursor: pointer;

    /* transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,0.18);
    } */
//因为这里的盒子阴影多出都可以用，直接在theme练写用 props.theme.mixin.xxx来调用某个样式，记住里面的对象是要用反引号包含起来
    ${props => props.theme.mixin.boxShadow}

    .panel{
        position:absolute;
        top:60px;
        right:0;
        width:240px;
        height:240px;

        background-color:#fff;
        border-ridius:10px;
        color:#666;
        box-shadow: 0 0 6px rgba(0,0,0,.18);

        .top, .bottom{
          padding:10px 0;

           .item{
            height:40px;
            line-height:40px;
            padding:0 15px;

              &:hover{
                background-color:#f5f5f5;
              }
           }

        }
    }
  }
`