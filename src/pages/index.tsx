import React from "react"
import Postcard from "../Components/Postcard/Postcard"
import SideBar from "../Components/SideBar/SideBar"
//@ts-ignore
import style from './global.module.css'

export default function Home() {
  return (
    <div className={style.display} >
      <SideBar />
      <div className={style.homepage} >
      <Postcard />
      </div>
      
    </div>
  )
}
