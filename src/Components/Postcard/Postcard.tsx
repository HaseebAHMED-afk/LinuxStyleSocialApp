import React, { useState } from 'react'
//@ts-ignore
import style from './Postcard.module.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Button } from '@material-ui/core'

const Postcard = () => {

    let [likes , setLikes] = useState(0)

    const handleLikeButton = () =>{
        setLikes(likes + 1)
    }

    return (
        <div className={style.card} >
            <div className={style.cardHeader} >
                <img className={style.headerProfile} src="http://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png" alt="profile"/>
                <div>
                <p className={style.headerUsername} >username</p>
                <p className={style.timePosted} >Time</p>
                </div>
                
            </div>
            <div className={style.cardBody} >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique porro eum expedita dolorum at cumque, tempora magnam excepturi, molestias quidem iste saepe! Pariatur at, libero porro eligendi quis similique?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique porro eum expedita dolorum at cumque, tempora magnam excepturi, molestias quidem iste saepe! Pariatur at, libero porro eligendi quis similique?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique porro eum expedita dolorum at cumque, tempora magnam excepturi, molestias quidem iste saepe! Pariatur at, libero porro eligendi quis similique?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique porro eum expedita dolorum at cumque, tempora magnam excepturi, molestias quidem iste saepe! Pariatur at, libero porro eligendi quis similique?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique porro eum expedita dolorum at cumque, tempora magnam excepturi, molestias quidem iste saepe! Pariatur at, libero porro eligendi quis similique?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique porro eum expedita dolorum at cumque, tempora magnam excepturi, molestias quidem iste saepe! Pariatur at, libero porro eligendi quis similique?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique porro eum expedita dolorum at cumque, tempora magnam excepturi, molestias quidem iste saepe! Pariatur at, libero porro eligendi quis similique?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique porro eum expedita dolorum at cumque, tempora magnam excepturi, molestias quidem iste saepe! Pariatur at, libero porro eligendi quis similique?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique porro eum expedita dolorum at cumque, tempora magnam excepturi, molestias quidem iste saepe! Pariatur at, libero porro eligendi quis similique?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique porro eum expedita dolorum at cumque, tempora magnam excepturi, molestias quidem iste saepe! Pariatur at, libero porro eligendi quis similique?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error similique porro eum expedita dolorum at cumque, tempora magnam excepturi, molestias quidem iste saepe! Pariatur at, libero porro eligendi quis similique?</p>
            </div>
            <div className={style.cardFooter} >
                <Button onClick={handleLikeButton} ><ThumbUpIcon className={style.icon} htmlColor='white' /><span className={style.span} >{likes}</span></Button>
                <Button><ThumbDownIcon className={style.icon} htmlColor='white' /></Button>            
                </div>
            
        </div>
    )
}

export default Postcard
