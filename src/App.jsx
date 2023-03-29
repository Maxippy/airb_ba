import React, { memo, Suspense, useEffect } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import routes from '@/router'
// import { Button } from 'antd';
import 'antd/dist/reset.css';
import AppHeader from 'components/app-header'
import AppFooter from 'components/app-footer'

const App = memo(() => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <div className="app">
      <div className="header">
        <AppHeader />
      </div>
      <div className="content">
        <Suspense fallback="loading">
          {useRoutes(routes)}
        </Suspense>
      </div>
      <div className="footer">
        {/* <Button>按钮</Button> */}
        <AppFooter />
      </div>
    </div>
  )
})

export default App