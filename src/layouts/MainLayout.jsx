import React from "react"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import Navi from "../components/Navi"

const MainLayout = () => {
  return (
    <>
      <Navi />
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default MainLayout
