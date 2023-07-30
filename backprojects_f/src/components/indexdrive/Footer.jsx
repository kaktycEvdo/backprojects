import React from "react";
import classes from "../../assets/static/indexdrive_style.module.css";
import {Link, NavLink} from "react-router-dom";


class Footer extends React.Component{
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <>
                <footer>
                    <div className={classes.footer__container}>
                        <ul className={classes.footer__link}>
                            <li>Телефон:</li>
                            <li><a href={"tel:8-800-555-35-35"}>8-800-555-35-35</a></li>
                        </ul>
                        <ul className={classes.footer__link}>
                            <li>Аккаунт:</li>
                            <li><NavLink to="profile">Личный кабинет</NavLink></li>
                            <li><NavLink to="cards">Привязанные карты</NavLink></li>
                            <li><NavLink to="login">Вход/Регистрация</NavLink></li>
                        </ul>
                        <ul className={classes.footer__link}>
                            <li>Сайт:</li>
                            <li><NavLink to="booking">Бронирование</NavLink></li>
                            <li><NavLink to="history">История бронирования</NavLink></li>
                            <li><NavLink to="branches">Филиалы</NavLink></li>
                            <li><NavLink to="car-select">Автомобили</NavLink></li>
                            <li><NavLink to="">Главная</NavLink></li>
                        </ul>
                        <div className={classes.back_link}>
                            <Link to={"../"}>Обратно</Link>
                        </div>
                    </div>
                </footer>
                <h1 className={classes.wow}>Мы не рассматривали вариант существования вашего устройства.</h1>
            </>
        );
    }
}

export default Footer