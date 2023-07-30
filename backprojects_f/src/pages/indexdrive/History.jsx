import {Form, Link, useLoaderData, useNavigate} from "react-router-dom";
import classes from "../../assets/static/indexdrive_style.module.css";
import classNames from "classnames";
import React, {useEffect} from "react";

export default function History(){
    let data = useLoaderData();
    let orders = data[0];
    let user_data = data[1];
    const navigate = useNavigate();

    if (user_data.id !== null) {
        return (
            <>
                <h2>История бронирования:</h2>
                <div className={classes.hbk_list}>
                    <div className={classes.hbk_list__container}>
                        {orders ?
                            Object.values(orders).map((order, index) => (
                                <div key={index} className={classes.hbksc}>
                                    <h3>Заказ {index+1}</h3>
                                    {order.car_id.split("||").map((output, index) =>
                                        (
                                            <div key={index} className={classes.hbkit}>
                                                <h4>Машина {index}</h4>
                                                <div className={classes.hbktxt}>ID автомобиля</div>
                                                <div className={classes.hbktxt}>
                                                    {order.car_id.split("||")[index]}
                                                </div>
                                                <div className={classes.hbktxt}>Марка автомобиля</div>
                                                <div className={classes.hbktxt}>
                                                    {order.car_mark.split("||")[index]}
                                                </div>
                                                <div className={classes.hbktxt}>Модель автомобиля</div>
                                                <div className={classes.hbktxt}>
                                                    {order.car_name.split("||")[index]}
                                                </div>
                                                <div className={classes.hbktxt}>Начало бронирования</div>
                                                <div className={classes.hbktxt}>
                                                    {order.days_begin.split("||")[index]}
                                                </div>
                                                <div className={classes.hbktxt}>Конец бронирования</div>
                                                <div className={classes.hbktxt}>
                                                    {order.days_end.split("||")[index]}
                                                </div>
                                                <div className={classes.hbktxt}>Номер автомобиля</div>
                                                <div className={classes.hbktxt}>
                                                    {order.car_tag.split("||")[index]}
                                                </div>
                                                <div className={classes.hbktxt}>Филиал</div>
                                                <div className={classes.hbktxt}>
                                                    {order.fel_name.split("||")[index]}
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className={classes.acbkit}>
                                        <div className={classNames(classes.acbktxt, classes.accent_text)}>Итоговая цена</div>
                                        <div className={classNames(classes.acbktxt, classes.accent_text)}>{order.price}</div>
                                    </div>
                                </div>
                            ))
                            : "Нету заказов"}
                    </div>
                </div>
            </>
        )
    }
    else useEffect(() => {
        navigate("/indexdrive/register")
    })
}