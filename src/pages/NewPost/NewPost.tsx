import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
//@ts-ignore
import style from './NewPost.module.css'

const NewPost = () => {
    return (
        <div>
            <SideBar />

            <div className={style.newPostPage} >
                <h1  >Write words that inspire generations</h1>
            </div>
        </div>
    )
}

export default NewPost
