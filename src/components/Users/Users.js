import React from 'react';
import style from './users.module.css';
import userPhoto from '../img/user.png'
import {NavLink} from "react-router-dom";
import {followUnfollow} from "../API/api";


let Users = (props) => {

    let totalPage = Math.ceil(props.totalCount / props.PageSize)

    let nextPage = () => {
        let number = props.pageNumber + 1
        let newPage = props.page.map((u) => u + 1)
        props.updatePage(number, newPage)
    }


    let prevPage = () => {
        let number = props.pageNumber - 1
        let newPage = props.page.map((u) => u - 1)
        props.updatePage(number, newPage)
    }

    props.page.splice(3, 1, totalPage)


    return <div>
        <div className={style.numb}>
            <span onClick={() => prevPage()} className={'material-icons'}>arrow_back_ios</span>
            <span>
                {props.page.map((u) => {
                        return (<span className={`${u === props.pageNumber && style.numberActive} ${style.number}`}
                                      onClick={() => {
                                          props.updatePage(u)
                                      }}>{u}</span>)
                    }
                )}
            </span>
            <span onClick={() => nextPage()} className={'material-icons'}>arrow_forward_ios</span>
        </div>
        {
            props.userState.map(u =>
                <div className={style.uBlock} key={u.id}>
                    <NavLink to={`profile/${u.id}`}>
                        <img src={u.photos.small == null
                            ? userPhoto : u.photos.small}
                             className={style.avatar}/>
                    </NavLink>
                    <div className={style.blockName}>
                        <h5>{u.name}</h5>
                        <p>{u.status}</p>
                    </div>
                    {u.followed
                        ? <button disabled={props.followProgress.some(id => id === u.id)} onClick={() => {
                            props.followUserAction(u.id)
                        }}
                                  className={style.btn}>Unfollow</button>
                        : <button disabled={props.followProgress.some(id => id === u.id)} onClick={() => {
                            props.unFollowUserAction(u.id)
                        }}
                                  className={style.btn}>Follow</button>
                    }
                </div>)
        }
    </div>
}
export default Users;