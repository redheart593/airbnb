import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'

import "normalize.css"
import "./assets/css/index.less"
import store from './store/index.jsx'

createRoot(document.getElementById('root')).render(
  /* Suspense组件通常配合路由懒加载使用，作用是在组件加载过程中显示。组件必须有fallback属性，属性值是加载过程中显示的内容，可以是一个dom元素等 */
  <Suspense fallback={< div > Loading...</ div>} >
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense >
)
