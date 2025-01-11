import React, { memo } from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'


// memo检测组件的props是否发生了变化。如果props没有变化，memo会跳过组件的重新渲染，从而提高性能。
const App = memo(() => {
  return (
    <div className='app'>

      <div className="page">
        {/* 通过RouterProvider接受路由实例并渲染 */}
        <RouterProvider router={routes} />
      </div>
      <AppFooter />
    </div>
  )
})

export default App
