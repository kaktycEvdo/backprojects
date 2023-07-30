import classes from "../../assets/static/indexdrive_style.module.css";
import {Form, Link, useLoaderData, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import BKCar from "../../components/indexdrive/BKCar";
import axios from "axios";
import classNames from "classnames";


export default function Booking(){
    const navigate = useNavigate();
    const data = useLoaderData();
    const user_data = data[0];
    const basket = data[1];
    const cars = data[2];
    const active_card = data[3];
    let basket_list = [];
    let namings_list = [];
    let finalPrice = 0;

    Object.keys(basket).forEach(function(key, index) {
        let car_image;
        cars.map((output) => {
            if (output.name === basket[key].name){
                car_image = output.image;
            }
        })

        basket_list.push(<BKCar key={index} index={key.match(/\d+/)} username={user_data.username}
                                car_image={car_image} data={basket[key]}/>);
        namings_list.push({
            name: basket[key].name,
            price: basket[key].final
        });

        finalPrice+=basket[key].final;
    });

    function sendData(){
        axios.post("http://localhost:8000/indexdrive/"+user_data.id+"/orders", basket)
            .catch(reason => {alert("ошибка: "+reason)});
    }

    if(user_data.id !== null){
        return(
            <>
                <h2>Бронирование</h2>
                <div className={classes.bk_list}>

                        {basket_list.length !== 0 ?
                            <>
                                <div className={classes.bk_list__container}>
                                    {basket_list}
                                </div>
                                <div className={classes.bk_receipt}>
                                    <div className={classes.bk_receipt__text}>Выбранные товары:</div>
                                    <div>
                                        {namings_list.map((naming, index) => (
                                            <div className={classes.bk_receipt__text} key={index}>
                                                {naming.name}: {naming.price}₽
                                            </div>
                                        ))
                                        }
                                    </div>
                                    <div className={classes.bk_receipt__text}>Способ оплаты:</div>

                                    <div className={classes.cards}>
                                        <div className={classes.ac_card}>
                                            <div className={classes.card}>
                                                <h4>Активная карта</h4>
                                                <i className={classes.accent_text}>{active_card ? active_card.number : "Нету"}</i>
                                            </div>
                                            <Link className={classes.generic_button} to="/indexdrive/cards">Изменить</Link>
                                        </div>
                                    </div>

                                    <div className={classes.bk_receipt__text}>Итоговая цена:</div>
                                    <div>{finalPrice}₽</div>
                                    <Form method={"post"} className={classes.submit}>
                                        <button className={classes.generic_button} name={"car"}
                                                value={[JSON.stringify({}), 3]}>
                                            Оформить
                                        </button>
                                    </Form>
                                </div>
                            </>
                            :
                            (<Link to={"/indexdrive/car-select"} className={classes.no_items}>У вас нет выбранных автомобилей.</Link>)}
                </div>
            </>
        )
    }
    else useEffect(() => {
        navigate("/indexdrive/register")
    })
}