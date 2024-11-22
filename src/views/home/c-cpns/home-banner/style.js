import styled from "styled-components";
// 通过 import 的方式加载图片
import coverImg from "@/assets/img/cover_01.jpeg"

export const BannerWrapper = styled.div`
  height: 529px;
  // 不能直接引用图片，需要引用变量 
  // 教程中用的是require，是commonjs的内容，但由于vite中默认使用的是原生的es，所以不能那样做
  background: url('${coverImg}') center/cover;
`