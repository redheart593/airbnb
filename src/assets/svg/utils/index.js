
//这里函数的作用是为了，将css的样式转化为对象格式，因为在组件里面style是要传给一个对象格式
function styleStrToObject(styleStr) {
  const obj = {}
  const s = styleStr.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  }).replace(/;\s?$/g, "").split(/:|;/g)
  for (var i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g, "")] = s[i + 1].replace(/^\s+|\s+$/g, "")
  }

  return obj
}

export default styleStrToObject
