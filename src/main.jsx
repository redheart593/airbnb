import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import App from './App.jsx'

import "normalize.css"
import "./assets/css/index.less"
import store from './store/index.js'
import theme from './assets/theme/index.js'

createRoot(document.getElementById('root')).render(
  <>
    {/* Provider放在最外层，确保内部所有组件都能访问到provider的store.把store对象绑定到store属性，套住的app组件可以使用store中的状态 */}
    {/* 页面懒加载是一个异步事件，放在provider内部才能确保被监听到 */}
    < Provider store={store} >
      {/* Suspense组件通常配合路由懒加载使用，作用是在组件加载过程中显示。组件必须有fallback属性，属性值是加载过程中显示的内容，可以是一个dom元素等 */}
      <Suspense fallback={< div > Loading...</ div>} >
        {/* 放在ThemeProvider中，把theme对象绑定到theme属性，套住的app组件可以使用可以用其中的样式 */}
        <ThemeProvider ThemeProvider theme={theme} >
          <App />
        </ThemeProvider >
      </Suspense >
    </Provider >
  </>
)
