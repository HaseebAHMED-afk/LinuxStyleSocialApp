import React, { ReactNode } from "react"
import Helmet from "react-helmet"
import NavBar from "./Navbar"

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Helmet title="Sociella"></Helmet>
      {children}
      <NavBar />
    </div>
  )
}

export default Layout
