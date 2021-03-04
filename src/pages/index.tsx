import React from "react"
import SideBar from "../Components/SideBar/SideBar"
//@ts-ignore
import style from './global.module.css'

export default function Home() {
  return (
    <div className={style.display} >
      <SideBar />
      <div className={style.homepage} >
      <h1>Hello</h1>
      </div>
      
    </div>
  )
}
