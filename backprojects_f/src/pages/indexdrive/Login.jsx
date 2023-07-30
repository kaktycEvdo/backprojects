import {Form, Link} from "react-router-dom";
import React, {useState} from "react";
import classes from "../../assets/static/indexdrive_style.module.css";

export default function Login(){
    return (
        <>
            <h2>Авторизация</h2>
            <Form className={classes.only_form} method={"post"}>
                <div className={classes.form__text}>Никнейм</div>
                <input className={classes.generic_input} type="text" required name="username"/>
                <div className={classes.form__text}>Пароль</div>
                <input className={classes.generic_input} type="password" required name="password"/>
                <button type="submit" className={classes.generic_button}
                        value={2} name="action">Отправить</button>
            </Form>
            <Link to={"/indexdrive/register"}><i className="accent-text">Регистрация</i></Link>
        </>
    )
}