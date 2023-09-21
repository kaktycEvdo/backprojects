import React, {useEffect, useState} from "react";
import classes from "../../assets/static/indexdrive_style.module.css";
import {Form, Link, useLoaderData, useNavigate} from "react-router-dom";
import classNames from "classnames";
import axios from "axios";


export default function Profile(){
    const data = useLoaderData();
    const user_data = data[0];
    const active_card = data[1];
    const orders = data[2];
    const navigate = useNavigate();


    if (user_data.id !== null) {
        return (
            <>
                <div className={classes.account__show}>
                    <section className={classes.ac_section}>
                        <h2>Аккаунт:</h2>
                        <div className={classes.ac_overview}>
                            <div>Фамилия:</div>
                            <div>{user_data.last_name}</div>
                            <div>Имя:</div>
                            <div>{user_data.first_name}</div>
                            <div>Отчество:</div>
                            <div>{user_data.patronymic ? user_data.patronymic : "-"}</div>
                            <div>Номер паспорта:</div>
                            <div>{user_data.passport}</div>
                            <div>Телефон:</div>
                            <div>{user_data.phone}</div>
                            <div>Дата рождения:</div>
                            <div>{user_data.birth_date}</div>
                            <div>Активная карта:</div>
                            <div className={classes.cards}>
                                <div className={classes.ac_card}>
                                    <div className={classes.card}>
                                        <h4>Активная карта</h4>
                                        <i className={classes.accent_text}>{active_card ? active_card.number : "Нету"}</i>
                                    </div>
                                    <Link className={classes.generic_button} to="/indexdrive/cards">Изменить</Link>
                                </div>
                            </div>
                            <Form method={"post"} className={classes.ac_logout_button}>
                                <button className={classNames(classes.generic_button, classes.g_button__red)}
                                        type={"submit"} value={3} name="action">
                                    Выйти
                                </button>
                            </Form>
                        </div>
                        <h2>Бронирования:</h2>
                        <div className={classes.acbk_list}>
                            <div className={classes.acbk_list__container}>
                                {orders.values ?
                                    Object.values(orders).map((order, index) => (
                                        <div key={index} className={classes.acbksc}>
                                            <h3>Заказ {index+1}</h3>
                                            {order.car_id.split("||").map((output, index) =>
                                                (
                                                    <div key={index} className={classes.acbkit}>
                                                        <h4>Машина {index}</h4>
                                                        <div className={classes.acbktxt}>ID автомобиля</div>
                                                        <div className={classes.acbktxt}>
                                                            {order.car_id.split("||")[index]}
                                                        </div>
                                                        <div className={classes.acbktxt}>Марка автомобиля</div>
                                                        <div className={classes.acbktxt}>
                                                            {order.car_mark.split("||")[index]}
                                                        </div>
                                                        <div className={classes.acbktxt}>Филиал</div>
                                                        <div className={classes.acbktxt}>
                                                            {order.fel_name.split("||")[index]}
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                    : "Нету заказов"}
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
    else useEffect(() => {
        navigate("/indexdrive/register")
    })
}
