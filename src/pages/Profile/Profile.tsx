import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
//@ts-ignore
import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.display} >
            <SideBar />
            
            <div className={style.profile} >
            <img className={style.userProfile} src='https://pngimg.com/uploads/google/google_PNG19635.png' alt='user-profile' title='Profile' />
            <div className={style.userInfo} >
                <h1 className={style.userName} >
                    User Name
                </h1>
                <p className={style.userRealName}>
                    User real name
                </p>
                <p className={style.userFollwers}>
                    Followers
                </p>
            </div>
            <div className={style.userLogistics} >
                <div className={style.logisticCard} >
                <h2 className={style.userJoinDate}>
                   User Joining Date
               </h2>
               <p>info</p>
                </div>
               
               <div className={style.logisticCard} >
               <h2 className={style.userCountry}>
                   Country
               </h2>
               <p>info</p>
                </div>
               
               <div className={style.logisticCard} >
               <h2 className={style.likesRecieved}>
                   Likes recieved
               </h2>
               <p>info</p>
                </div>
               
            </div>
            </div>
        </div>
    )
}

export default Profile
