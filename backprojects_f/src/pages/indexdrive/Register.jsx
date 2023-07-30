import {Form, Link} from "react-router-dom";
import React, {useState} from "react";
import classes from "../../assets/static/indexdrive_style.module.css";
import classNames from "classnames";

export default function Register(){
    let [password, setPassword] = useState("");
    let [password_r, setPassword_r] = useState("");
    let [passport, setPassport] = useState("");
    let [phone, setPhone] = useState("");
    let [password_Error, setPassword_Error] = useState(null);
    let [passport_Error, setPassport_Error] = useState(null);
    let [phone_Error, setPhone_Error] = useState(null);

    function passportCheck(value){
        if (value.match(/\d{6} \d{4}/)){
            setPassport_Error(false);
            setPassport(value);
        }
        else {
            setPassport_Error(true);
            setPassport(value);
        }
    }

    function phoneCheck(value){
        if (value.match(/\+?\d{8}/)){
            setPhone_Error(false);
            setPhone(value);
        }
        else {
            setPhone_Error(true);
            setPhone(value);
        }
    }

    function passwordCheck(target){
        switch (target.name){
            case "password": {
                if (target.value === password_r){
                    setPassword_Error(false);
                }
                else{
                    setPassword_Error(true);
                }
                setPassword(target.value);
                break;
            }
            case "password_repeat": {
                if (target.value === password){
                    setPassword_Error(false);
                }
                else{
                    setPassword_Error(true);
                }
                setPassword_r(target.value);
                break;
            }
        }
    }

    return (
        <>
            <h2>Регистрация</h2>
            <Form className={classes.only_form} method={"post"}>
                <div className={classes.form__text}>Фамилия</div>
                <input type="text" required name="last_name" className={classes.generic_input}/>
                <div className={classes.form__text}>Имя</div>
                <input type="text" required name="first_name" className={classes.generic_input}/>
                <div className={classes.form__text}>Отчество</div>
                <input type="text" name="patronymic" className={classes.generic_input}/>
                <div className={classes.form__text}>Паспортные данные</div>
                <input type="text" required name="passport"
                       className={passport_Error ? classNames(classes.generic_input, classes.value_error) : classes.generic_input}
                       value={passport} onChange={(e) => passportCheck(e.target.value)}/>
                <div className={classes.form__text}>Телефон</div>
                <input type="tel" required name="phone"
                       className={phone_Error ? classNames(classes.generic_input, classes.value_error) : classes.generic_input}
                       value={phone} onChange={(e) => phoneCheck(e.target.value)}/>
                <div className={classes.form__text}>Дата рождения</div>
                <input type="date" required name="birth_date" className={classes.generic_input}/>
                <div className={classes.form__text}>Пароль</div>
                <input type="password" required name="password"
                       className={password_Error ? classNames(classes.generic_input, classes.value_error) : classes.generic_input}
                       value={password} onChange={(e) => passwordCheck(e.target)}/>
                <div className={classes.form__text}>Повторить пароль</div>
                <input type="password" required name="password_repeat"
                       className={password_Error ? classNames(classes.generic_input, classes.value_error) : classes.generic_input}
                       value={password_r} onChange={(e) => passwordCheck(e.target)}/>
                <button type="submit" className={classes.generic_button}
                        value={1} name="action">Отправить</button>
            </Form>
            <Link to={"/indexdrive/login"}><i className="accent-text">Авторизация</i></Link>
        </>
    )
}