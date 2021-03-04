import React, {useState} from 'react'
//@ts-ignore
import style from './SideBar.module.css'
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GitHubIcon from '@material-ui/icons/GitHub';

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
                <li className={style.sideBarItem} ><a title='Home' href='#' > <HomeIcon htmlColor='white' /></a></li>
                <li className={style.sideBarItem} ><a title='Profile' href='#' > <AccountCircleIcon htmlColor='white'  /></a></li>
                <li className={`${style.sideBarItem} ${style.github}`} ><a title='Click to see the source code' target='_blank' href='https://github.com/HaseebAHMED-afk/LinuxStyleSocialApp' > <GitHubIcon htmlColor='white'  /></a></li>
                <li className={`${style.sideBarItem} ${style.githubProfile}`} ><a title='Click to see my developer profile' target='_blank' href='https://github.com/HaseebAHMED-afk/' > <GitHubIcon htmlColor='white'  /></a></li>

            </ul>
        </div>
    )
}

export default SideBar
