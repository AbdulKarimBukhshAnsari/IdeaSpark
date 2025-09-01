import React , {ReactNode} from 'react'
import MainNavbar from '../components/Navbar/Navbar'

function Layout({children} : Readonly<{children: ReactNode}>) {
  return (
    <main>
      <MainNavbar />
      {children}
    </main>
  )
}

export default Layout
