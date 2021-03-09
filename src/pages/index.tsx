import React from "react"
import Postcard from "../Components/Postcard/Postcard"
import SideBar from "../Components/SideBar/SideBar"


export default function Home() {
  return (
    <div  >
      <SideBar />
      <div  >
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
      </div>
      
    </div>
  )
}
