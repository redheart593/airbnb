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
  /* Suspense组件通常配合路由懒加载使用，作用是在组件加载过程中显示。组件必须有fallback属性，属性值是加载过程中显示的内容，可以是一个dom元素等 */
  <Suspense fallback={< div > Loading...</ div>} >
    {/* 放在Provider，把store对象绑定到store属性，套住的app组件可以使用store中的状态 */}
    <Provider store={store}>
      {/* 放在ThemeProvider中，把theme对象绑定到theme属性，套住的app组件可以使用可以用其中的样式 */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </Suspense >
)
