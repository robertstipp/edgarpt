import React, { useContext } from "react"
import { GatsbyContext } from "../context/context"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)
  return (
    <>
      <Navbar />
      {isSidebarOpen && <Sidebar />}
      {children}
      <Footer />
    </>
  )
}

export default Layout
