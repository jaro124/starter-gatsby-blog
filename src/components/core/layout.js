import * as React from 'react'
import Footer from './footer'
import Header from './header'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className='bg-gray-200 dark:bg-gray-900 text-black dark:text-gray-400'>
      <Header />
      <main>
        {children}
      </main>
      <Footer siteTitle={ pageTitle } />
    </div>
  )
}

export default Layout;