import React from "react";
import classes from "../../assets/static/indexdrive_style.module.css";
import {useLoaderData} from "react-router-dom";
import classNames from "classnames";
import CatItem from "../../components/indexdrive/CatItem.jsx";


export default function Catalog(){
    let data = useLoaderData();
    const cars = data[0];
    let basket = data[1];

    return (
        <>
            <h2>Выбор для бронирования</h2>
            <div className={classes.catalog}>
                {cars.map((output) => (
                    <CatItem basket={basket} output={output} key={output.name}/>
                ))}
            </div>
        </>
    );
}
