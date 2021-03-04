import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
//@ts-ignore
import style from './global.module.css'

const Profile = () => {
    return (
        <div className={style.display} >
            <SideBar />
            
            Profile page
        </div>
    )
}

export default Profile
