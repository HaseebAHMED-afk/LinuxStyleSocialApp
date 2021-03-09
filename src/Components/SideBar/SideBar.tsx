import React, {useState} from 'react'
//@ts-ignore
import style from './SideBar.module.css'
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';
import PostAddIcon from '@material-ui/icons/PostAdd';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Button } from '@material-ui/core'

const SideBar = () => {

    const [title , setTitle] = useState(false)

    return (
        <div onMouseOver={()=>{
            setTitle(true)
        } } onMouseOut={()=>{
            setTitle(false)
        }} className={style.sideBar} >
            
            <ul className={style.sideBarUL} >
                  <h1  className={style.sideBarItem} >{title ? 'Sociella' : 'S'}</h1>
                <li className={style.sideBarItem} ><a title='Home' href='/' > <HomeIcon className={style.icon} htmlColor='white' /></a></li>
                <li className={style.sideBarItem} ><a title='Profile' href='/Profile/Profile' > <AccountCircleIcon className={style.icon} htmlColor='white'  /></a></li>
                <li className={style.sideBarItem} ><a title='Create a new post' href='/NewPost/NewPost' > <PostAddIcon className={style.icon} htmlColor='white'  /></a></li>
                <li className={style.sideBarItem} ><a title='View All My Post' href='/MyPost/MyPosts' > <LibraryBooksIcon className={style.icon} htmlColor='white'  /></a></li>
                <li className={`${style.sideBarItem} ${title ?  style.showlogbtn  : style.hidelogbtn } `} ><Button variant='outlined' color='primary' >Log In</Button></li>
                <li className={`${style.sideBarItem} ${title ?  style.showlogbtn  : style.hidelogbtn }`} ><Button variant='outlined' color='secondary'  >Sign Up</Button></li>
                <li className={`${style.sideBarItem} ${style.github}`} ><a title='Click to see the source code' target='_blank' href='https://github.com/HaseebAHMED-afk/LinuxStyleSocialApp' > <GitHubIcon className={style.icon} htmlColor='white'  /></a></li>
                <li className={`${style.sideBarItem} ${style.githubProfile}`} ><a title='Click to see my developer profile' target='_blank' href='https://github.com/HaseebAHMED-afk/' > <GitHubIcon className={style.icon} htmlColor='white'  /></a></li>

            </ul>
        </div>
    )
}

export default SideBar
