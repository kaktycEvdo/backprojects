import React, {useState} from "react";
import UserModal from "./UserModal.jsx";
import classes from "../assets/static/favlinks_style.module.css";
import classNames from "classnames";
import {Link} from "react-router-dom";

const Header = function ({amount, active_user, update, update_activeUser}){
    let username = active_user ? active_user.username : "нету"
    let [opened, setOpened] = useState(false);

    return(
        <>
            <header className={classes.header}>
                <div className={classes.header__container}>
                    <div className={classes.logo}>FavLinks</div>
                    <div className={classes.smaller_text}>ссылок: {amount}</div>
                    <div className={classNames(classes.smaller_text, classes.profile_link)}
                         onClick={() => setOpened(true)}>профиль: {username}</div>
                    <Link to={"../"}>сделано ильей (назад)</Link>
                </div>
            </header>
            <UserModal update={update} opened={opened} setOpened={setOpened}
                       active_user={active_user} update_activeUser={update_activeUser}/>
        </>
    )
}

export default Header
