const theme = {
  color: {
    primaryColor: "#FF385C",
    secondaryColor: "#00848A",
    textColor: "#484848",
    textColorSecondary: "#222222"
  },
  // 混入语法，可以在less css-in-js或sass中使用
  // 类似于一种函数，可以在外部调用，调用时执行混入内的样式。如js中是在模板样式中定义动画效果，外部${}时执行
  mixin: {
    boxShadow: `
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.18);
      }
    `
  }
}

export default theme