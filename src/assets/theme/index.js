
//用于给themeprovider 传给一个对象，之后把根组件全部包含，之后在cssinjs的样式就可以用props.theme.xx.某一个  使用
//多的属性就没必要了
const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A"
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222"
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
      }
    `
  }
}

export default theme
