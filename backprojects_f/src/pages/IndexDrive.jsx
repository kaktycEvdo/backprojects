import React from "react";
import {Outlet, useLoaderData, redirect} from "react-router-dom";
import classes from "../assets/static/indexdrive_style.module.css";
import Header from "../components/indexdrive/Header.jsx";
import Footer from "../components/indexdrive/Footer.jsx";
import img1 from "../assets/static/img/car1.png";
import img2 from "../assets/static/img/car2.png";
import img3 from "../assets/static/img/car3.png";
import img4 from "../assets/static/img/car4.png";
import img5 from "../assets/static/img/car5.png";
import img6 from "../assets/static/img/car6.png";
import img7 from "../assets/static/img/car7.png";
import img8 from "../assets/static/img/car8.png";
import img9 from "../assets/static/img/car9.png";
import img10 from "../assets/static/img/car10.png";
import img11 from "../assets/static/img/car11.png";
import img12 from "../assets/static/img/car12.png";
import axios from "axios";


function generateTag(){
    let res = "";
    const pool1 = "АВЕКМНОРСТУХ";
    const pool2 = "0123456789";
    res += pool1[Math.round(Math.random()*11)];
    res += pool2[Math.round(Math.random()*9)];
    res += pool2[Math.round(Math.random()*9)];
    res += pool2[Math.round(Math.random()*9)];
    res += pool1[Math.round(Math.random()*11)];
    res += pool1[Math.round(Math.random()*11)];
    return res;
}

const cars = [
    {
        "name": "Nissan Sentra, 2017",
        "mark": "Nissan",
        "model": "Sentra, 2017",
        "color": "Черный",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП u-АКП u-РКП",
        "price": 4000,
        "image": img1,
        "tag": generateTag()
    },
    {
        "name": "Toyota RAV4, 2018",
        "mark": "Toyota",
        "model": "RAV4, 2018",
        "color": "Синий",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП u-АКП u-РКП",
        "price": 8200,
        "image": img2,
        "tag": generateTag()
    },
    {
        "name": "Ferrari F12berlinetta, 2014",
        "mark": "Ferrari",
        "model": "F12berlinetta, 2014",
        "color": "Красный",
        "engine": "u-Дизель Бензин",
        "transmission": "u-МКП u-АКП РКП",
        "price": 56000,
        "image": img3,
        "tag": generateTag()
    },
    {
        "name": "Volkswagen Polo, 2016",
        "mark": "Volkswagen",
        "model": "Polo, 2016",
        "color": "Красный",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП АКП РКП",
        "price": 3600,
        "image": img4,
        "tag": generateTag()
    },
    {
        "name": "Hyundai Creta, 2020",
        "mark": "Hyundai",
        "model": "Creta, 2020",
        "color": "Оранжевый",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП АКП u-РКП",
        "price": 4650,
        "image": img5,
        "tag": generateTag()
    },
    {
        "name": "Mercedes-Benz C216, 2011",
        "mark": "Mercedes-Benz",
        "model": "C216, 2011",
        "color": "Белый",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП u-АКП РКП",
        "price": 12000,
        "image": img6,
        "tag": generateTag()
    },
    {
        "name": "Jaguar F-Type Coupe, 2015",
        "mark": "Jaguar",
        "model": "F-Type, 2015",
        "color": "Белый",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП АКП u-РКП",
        "price": 12500,
        "image": img7,
        "tag": generateTag()
    },
    {
        "name": "Honda NSX, 2021",
        "mark": "Honda",
        "model": "NSX, 2021",
        "color": "Черный",
        "engine": "u-Дизель Бензин",
        "transmission": "u-МКП u-АКП РКП",
        "price": 34000,
        "image": img8,
        "tag": generateTag()
    },
    {
        "name": "Mercedes-Benz GLK-Class, 2012",
        "mark": "Mercedes-Benz",
        "model": "GLK-Class, 2012",
        "color": "Белый",
        "engine": "u-Дизель Бензин",
        "transmission": "u-МКП АКП u-РКП",
        "price": 5800,
        "image": img9,
        "tag": generateTag()
    },
    {
        "name": "Audi A4 B9, 2016",
        "mark": "Audi",
        "model": "A4 B9, 2016",
        "color": "Желтый",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП АКП u-РКП",
        "price": 5700,
        "image": img10,
        "tag": generateTag()
    },
    {
        "name": "Audi A6, 2013",
        "mark": "Audi",
        "model": "A6, 2013",
        "color": "Серебристый",
        "engine": "u-Дизель Бензин",
        "transmission": "МКП АКП РКП",
        "price": 3900,
        "image": img11,
        "tag": generateTag()
    },
    {
        "name": "Buick Avista, 2018",
        "mark": "Buick",
        "model": "Avista, 2018",
        "color": "Синий",
        "engine": "u-Дизель Бензин",
        "transmission": "u-МКП АКП u-РКП",
        "price": 4700,
        "image": img12,
        "tag": generateTag()
    }
]

function randomUsername(){
    let res = "";
    const pool1 = "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЫЭЮЯабвгдежзиклмнопрстуфхцчшщыэюя";
    const pool2 = "0123456789";
    // стрёмно, но это просто сборка никнейма с помощью пулов
    res += pool1[Math.round(Math.random()*58)];
    res += pool1[Math.round(Math.random()*58)];
    res += pool1[Math.round(Math.random()*58)];
    res += pool2[Math.round(Math.random()*9)];
    res += pool2[Math.round(Math.random()*9)];
    res += pool2[Math.round(Math.random()*9)];
    res += pool1[Math.round(Math.random()*58)];
    res += pool1[Math.round(Math.random()*58)];
    res += pool1[Math.round(Math.random()*58)];
    res += pool1[Math.round(Math.random()*58)];
    res += pool1[Math.round(Math.random()*58)];
    res += pool2[Math.round(Math.random()*9)];
    return res;
}

export async function getCars(){
    return cars;
}

export async function getBasket(){
    let basket;
    try{
        basket = JSON.parse(sessionStorage.getItem("basket"));
    } catch (e){
        alert("ошибка: "+e);
    }
    if (!basket){
        basket = {};
    }
    return basket;
}

export async function getOrders(){
    let user_data = await getActiveUser();
    let orders = {};
    await axios.get("http://localhost:8000/indexdrive/"+user_data.id+"/orders")
        .then((res) => {
            res.data.map((output, index) => {
                orders["order"+index] = output;
            })
        })
    return orders;
}

export async function addToBasket(car){
    let basket = await getBasket()
    let place = 0;
    Object.keys(basket).forEach(function (key) {
        const key_number = key.match(/\d/)/1;
        if (!basket["car"+key_number+1]) place = key_number+1
    })
    basket["car"+place] = JSON.parse(car);
    basket["car"+place].id = place;
    return sessionStorage.setItem("basket", JSON.stringify(basket));
}

export async function addOrder(){
    const basket = await getBasket();
    sessionStorage.setItem("basket", null);
    let user_id = "";
    await getActiveUser().then(res => user_id = res.id);
    let cars_id = "";
    let cars_mark = "";
    let cars_name = "";
    let cars_tag = "";
    let fel_names = "";
    let days_begin = "";
    let days_end = "";
    let price = 0;
    const basket_length = Object.keys(basket).length;
    let i = 0;

    Object.keys(basket).forEach(function (key){
        let divider = i+1 < basket_length ? "||" : ""
        cars_id += basket[key].id+divider;
        cars_mark += basket[key].mark+divider;
        cars_name += basket[key].name+divider;
        cars_tag += basket[key].tag+divider;
        price+=basket[key].final;
        fel_names += basket[key].fel_name+divider;
        days_begin += basket[key].days_begin+divider;
        days_end += basket[key].days_end+divider;
        i++;
    })

    let order = {
        car_id: cars_id,
        car_name: cars_name,
        car_mark: cars_mark,
        price: price,
        car_tag: cars_tag,
        days_begin: days_begin,
        days_end: days_end,
        fel_name: fel_names
    }

    await axios.post("http://localhost:8000/indexdrive/"+user_id+"/orders", order)
        .catch(reason => alert("ошибка: "+reason));
}

export async function actionBasket({request}){
    const basket = await getBasket();
    const data = await request.formData();
    const car = JSON.parse(data.get("car").match(/\{.*\}/)[0]);
    const option = data.get("car")[data.get("car").indexOf("}")+2];
    if ((await getActiveUser()).id !== null){
        switch (option){
            case "1": {
                let final = car.final ? car.final : car.price;
                let discount = car.discount ? car.discount : 0;
                let currentdate = new Date();
                let currentday = currentdate.getFullYear()+"-"+
                    (currentdate.getMonth()+1 <= 9 ? "0"+(currentdate.getMonth()+1) : currentdate.getMonth()+1)+"-"+
                    (currentdate.getDate() <= 9 ? "0"+currentdate.getDate() : currentdate.getDate());
                let newday = new Date(currentdate.getTime()+(24*3600*1000));
                let newcurrentday = newday.getFullYear()+"-"+
                    (newday.getMonth()+1 <= 9 ? "0"+(newday.getMonth()+1) : newday.getMonth()+1)+"-"+
                    (newday.getDate() <= 9 ? "0"+newday.getDate() : newday.getDate());
                await addToBasket(JSON.stringify({
                    mark: car.mark,
                    name: car.name,
                    tag: car.tag,
                    days_begin: car.days_begin ? car.days_begin : currentday,
                    days_end: car.days_end ? car.days_end : newcurrentday,
                    discount: discount,
                    price: car.price,
                    final: final,
                    fel_name: car.fel_name ? car.fel_name : "Первый",
                }))
                break;
            }
            case "2": {
                delete basket["car"+car.id];
                sessionStorage.setItem("basket", JSON.stringify(basket));
                break;
            }
            case "3": {
                await addOrder();
                break;
            }
            case "4":{
                const data = {
                    mark: car.mark,
                    name: car.name,
                    tag: car.tag,
                    days_begin: car.days_begin,
                    days_end: car.days_end,
                    discount: car.discount,
                    price: car.price,
                    final: car.final,
                    fel_name: car.fel_name,
                    id: car.id
                };
                basket["car"+car.id] = data;
                sessionStorage.setItem("basket", JSON.stringify(basket));
                break;
            }
            default: return "неверная команда";
        }
    }
    return "не зарегистрированный пользователь";
}

export async function getActiveUser(){
    let active_user;
    try{
        active_user = JSON.parse(sessionStorage.getItem("user"));
    } catch (e){
        alert("ошибка: "+e);
    }
    if (!active_user){
        active_user = {
            id: null,
            username: null
        }
    }
    return active_user;
}

export async function setActiveUser(data){
    await axios.get("http://localhost:8000/users/"+data.id)
        .then(res => {
            const user = {
                id: data.id,
                username: res.data.username,
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                patronymic: res.data.patronymic,
                passport: res.data.passport,
                birth_date: res.data.birth_date,
                phone: res.data.phone
            }
            sessionStorage.setItem("user", JSON.stringify(user));
        })
        .catch((reason) => alert("ошибка: " + reason));
    return null
}

export async function actionUser({request}){
    const data = await request.formData();
    const option = data.get("action");
    const username = randomUsername();
    switch (option){
        case "1":{
            await axios.post("http://localhost:8000/users", {
                first_name: data.get("first_name"),
                last_name: data.get("last_name"),
                patronymic: data.get("patronymic"),
                passport: data.get("passport"),
                phone: data.get("phone"),
                birth_date: data.get("birth_date"),
                password: data.get("password"),
                username: username
            }).then(() => {
                axios.get("http://localhost:8000/users", {params: {
                        username: username,
                        password: data.get("password")
                    }})
                    .then(res => {
                        setActiveUser({id: res.data.id, username: res.data.username});
                    })
                    .catch(reason => alert("ошибка: "+reason));
            }).catch((reason) => alert("ошибка: "+reason));
            break;
        }
        case "2":{
            await axios.get("http://localhost:8000/users", {params: {
                username: data.get("username"),
                password: data.get("password")
            }})
            .then(res => {
                setActiveUser({id: res.data.id});
            })
            .catch(reason => alert("ошибка: "+reason));
            break;
        }
        case "3":{
            sessionStorage.setItem("active-user", null); break;
        }
        default: {
            return alert("что")
        }
    }

    return redirect("/indexdrive/car-select");
}

export async function getCards(){
    let cards;
    try{
        cards = JSON.parse(sessionStorage.getItem("cards"));
    } catch (e){
        alert("ошибка: "+e);
    }
    if (!cards){
        cards = {};
    }
    return cards;
}

export async function actionCards({request}){
    let cards = await getCards();
    const data = await request.formData();
    let option = data.get("action");
    const card_data = data.get("card");
    let card = {};
    if (card_data){
        card = JSON.parse(card_data.match(/\{.*\}/)[0]);
        option = card_data[card_data.indexOf("}")+2];
    }
    switch (option){
        case "1":{
            let place = 0
            Object.keys(cards).forEach(function (key) { // перебирает массив ключей
                const key_number = key.match(/\d/)/1; // ключи всегда оканчиваются на цифру, это последний индекс
                if (!cards["card"+key_number+1]) place = key_number+1 // если такого ключа нет, то его забирает place.
            })
            cards["card"+place] = {
                number: data.get("number"),
                date: data.get("date"),
                cvc: data.get("cvc")
            };
            sessionStorage.setItem("cards", JSON.stringify(cards));
            sessionStorage.setItem("active-card", JSON.stringify(cards["card"+place]));
            break;
        }
        case "2":{

            Object.keys(cards).forEach((key) => {
                if (JSON.stringify(cards[key]) === JSON.stringify(card)){
                    delete cards[key];
                    sessionStorage.setItem("cards", JSON.stringify(cards));
                }
            });
            break;
        }
        case "3":{
            sessionStorage.setItem("active-card", JSON.stringify(card)); break;
        }
        default: {
            return alert("что")
        }
    }
    return null;
}

export async function getActiveCard(){
    return JSON.parse(sessionStorage.getItem("active-card"));
}


export default function IndexDrive(){
    let data = useLoaderData();
    let user = data[0];
    let basket = data[1];


    return(
        <div className={classes.indexdrive__body}>
            <Header amount={Object.keys(basket).length} username={user.username}/>
            <div className={classes.content}>
                <div className={classes.content__container}>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
