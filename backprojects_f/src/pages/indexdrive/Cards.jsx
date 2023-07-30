import classes from "../../assets/static/indexdrive_style.module.css";
import {Form, useLoaderData, useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import classNames from "classnames";

export default function Cards(){
    const navigate = useNavigate();
    const data = useLoaderData();
    let active_card = data[0];
    let cards = data[1];
    let user_data = data[2]; // только для проверки авторизации


    if (user_data.id){
        return (
            <div className={classes.cards_list}>
                <h2>Привязанные карты</h2>
                <div>
                    <div className={classes.cards}>
                        {Object.keys(cards).length >= 1 ? (
                            <>
                                <div className={classes.ac_card}>
                                    <div className={classes.card}>
                                        <h4>Активная карта</h4>
                                        <i className={classes.accent_text}>{active_card ? active_card.number : "Нету"}</i>
                                        <Form method={"post"}>
                                            <button type={"submit"} name={"card"} value={[JSON.stringify({number: null}), 3]}
                                                className={classNames(classes.generic_button, classes.g_button__red)}>
                                                Удалить
                                            </button>
                                        </Form>
                                    </div>
                                </div>
                                {
                                    Object.values(cards).map((output, index) => (
                                        <div className={classes.card} key={index}>
                                            <i className={classes.accent_text}>{output.number}</i>
                                            <Form method={"post"}>
                                                <button type={"submit"} name={"card"} value={[JSON.stringify(output), 2]}
                                                    className={classNames(classes.generic_button, classes.g_button__red)}>
                                                    Удалить
                                                </button>
                                                <button type={"submit"} name={"card"} value={[JSON.stringify(output), 3]}
                                                    className={classNames(classes.generic_button)}>
                                                    Сделать активной
                                                </button>
                                            </Form>
                                        </div>
                                    ))
                                }
                            </>
                        ) : "Нету карт"}
                    </div>
                </div>
                <h2>Привязать карту</h2>
                <Form className={classes.only_form} method={"post"}>
                    <div className={classes.form__text}>Номер</div>
                    <input type="text" name={"number"} className={classes.generic_input} required/>
                    <div className={classes.form__text}>До</div>
                    <input type="text" name={"date"} className={classes.generic_input} required/>
                    <div className={classes.form__text}>CVC2</div>
                    <input type="password" maxLength={3} name={"cvc"} className={classes.generic_input} required/>
                    <button type="submit" name="action"
                            className={classes.generic_button} value={1}>Привязать</button>
                </Form>
            </div>
        )
    }
    else useEffect(() => {
        navigate("/indexdrive/register")
    })
}