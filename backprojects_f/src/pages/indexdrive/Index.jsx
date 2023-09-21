import React, { useState } from "react";
import classes from "../../assets/static/indexdrive_style.module.css";
import New from "../../components/indexdrive/New.jsx";
import img1 from "../../assets/static/img/ew-car-png-cb-car-png-car-11563267985ea0mqfwilw.png";
import img2 from "../../assets/static/img/images.jfif";
import img3 from "../../assets/static/img/images (1).jfif";
import img4 from "../../assets/static/img/Vintage_blue_car.png";
import img5 from "../../assets/static/img/plan-road-trip-tips-ideas.jpg";
import {useLoaderData} from "react-router-dom";
import Search from "../../components/indexdrive/Search";


export default function Index(){
    const news = [
        {
            name: "В России вынесли первый приговор за продажу аккаунтов каршеринга ",
            description: "В конце 2020 года в России вынесли первый приговор за продажу аккаунтов каршеринга. " +
                "Приморский районный суд Петербурга оштрафовал гражданина РФ Романа Амелина на 50 тыс. рублей. " +
                "Как сообщает РАПСИ со ссылкой на Объединенную пресс-службу судов Петербурга, 21-летний молодой " +
                "человек обвинялся по части 2 статьи 272 УК РФ (неправомерный доступ к компьютерной информации, " +
                "совершенный из корыстной заинтересованности).",
            img: img1
        },
        {
            name: "Программа поддержки каршеринга не заработала из-за российского телематического оборудования ",
            description: "25 августа 2020 года стало известно о том, что программа поддержки каршеринга, которая " +
                "была анонсирована ещё в апреле на совещании у президента РФ Владимира Путина, так и не заработала.",
            img: img2
        },
        {
            name: "Мошенничество с данными клиентов",
            description: "По сообщениям на июль 2020 г каршеринг становится отличным помощником для мошенников." +
                "С помощью селфи клиентов с паспортом на людей берут кредиты в микрофинансовых компаниях. Также " +
                "базы каршерингов используют для звонков из фальшивой службы безопасности банков - так можно " +
                "узнать наличие денег на счёте, данные банковских карт.",
            img: img3
        },
        {
            name: "Столичный каршеринг обвинил Роспотребнадзор в блокировке деятельности. " +
                "Новые правила операторам объяснять не спешат",
            description: "Каршеринг не может возобновить работу по докоронавирусному сценарию из-за отсутствия " +
                "предписаний Роспотребнадзора. Представители сервисов обвинили ведомство в блокировке их " +
                "деятельности и 9 июня направили коллективное обращение.",
            img: img4
        }
    ]
    const cars = useLoaderData();
    const car1 = sessionStorage.getItem("car1") ? sessionStorage.getItem("car1") : sessionStorage.setItem("car1", cars[Math.round(Math.random()*12)].image)
    const car2 = sessionStorage.getItem("car2") ? sessionStorage.getItem("car2") : sessionStorage.setItem("car2", cars[Math.round(Math.random()*12)].image)
    let [value, setValue] = useState("");

    return(
        <>
            <div className={classes.banner}>
                <img src={img5} alt={"баннер"}/>
                <div className={classes.banner__container}>
                    ПОПРОБУЙТЕ ВПЕЧАТЛЕНИЯ ПРОИЗВОДИТЕЛЯ.<br/><br/>

                    С нами ваша дорога пройдёт гладко, насыщенно и безопасно.
                </div>
            </div>
            <div className={classes.search}>
                <img src={car1} alt={"картинка"}/>
                <div className={classes.search_text}>
                    <div>
                        Вот эти машины нам доверяют.<br/>
                        А вы нам нет?<br/>
                        Попробуйте поиск и убедитесь в их качестве.
                    </div>
                    <Search cars={cars} modal={true} value={value} setValue={setValue}/>
                </div>
                <img src={car2} alt={"картинка"}/>
            </div>
            <h2>Новости</h2>
            <div className={classes.news}>
                {news.map((output) => (
                    <New name={output.name} description={output.description}
                         img={output.img} key={output.name}/>
                ))}
            </div>
        </>
    )
}
