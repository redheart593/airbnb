import styled from "styled-components"
export const HomeWrapper = styled.div`
.content {
  width:1032px;
  margin:0 auto;
}
.good-price{
  margin-top:30px;

  .room-list{
    display:flex;
    //记得要换行
    flex-wrap:wrap;
    margin:0 -8px;//因为盒子左右距离是8px，而不是16，这样子设置可以让盒子向外面拓展8px，这样子字的内容就和上面一样了
  }
}
`