import React, { useMemo, useState } from "react";
import classes from "../../assets/static/indexdrive_style.module.css";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import CatItem from "../../components/indexdrive/CatItem.jsx";
import Search from "../../components/indexdrive/Search";


export default function Catalog(){
    let data = useLoaderData();
    const cars = data[0];
    let basket = data[1];
    const params = useParams();
    const navigate = useNavigate();
    let [value, setValue] = useState("");
    let [markFilter, setMarkFilter] = useState("");
    let [engineFilter, setEngineFilter] = useState("");
    let [transmissionFilter, setTransmissionFilter] = useState("");
    let p = false;

    function makeList(){
        let k = 0;
        let ACF = {};
        return (
            <>
                {cars.map((output, index) => {
                    ACF.mark = markFilter ? markFilter : output.mark;
                    ACF.engine = engineFilter ? engineFilter : output.engine;
                    ACF.transmissions = transmissionFilter ? transmissionFilter : output.transmission;
                    if (output.mark === ACF.mark
                        && (!output.engine.includes("u-"+ACF.engine))
                        && (!output.transmission.includes("u-"+ACF.transmissions))){
                        if (output.name.toLowerCase().includes(value.toLocaleLowerCase()) && value.length > 2){
                            p = true;
                            return (
                            <CatItem basket={basket} output={output} key={output.name}
                            opened={index+1 == params.carID} open={() => navigate("/indexdrive/car-select/"+(index+1))}
                            close={() => navigate("/indexdrive/car-select")}/>)
                        }
                        else if (value.length <= 2){
                            p = true;
                            return (
                            <CatItem basket={basket} output={output} key={output.name}
                            opened={index+1 == params.carID} open={() => navigate("/indexdrive/car-select/"+(index+1))}
                            close={() => navigate("/indexdrive/car-select")}/>)
                        }
                        else{
                            k -= 1;
                        }
                    }
                    else{
                        k -= 1;
                    }
                    if (k === -12){p = false; return(<></>)}
                })}
            </>
        )
    }

    return (
        <>
            <Search full={true} cars={cars} value={value} setValue={setValue} setMarkFilter={setMarkFilter}
            setTransmissionFilter={setTransmissionFilter} setEngineFilter={setEngineFilter}
            markFilter={markFilter} engineFilter={engineFilter} transmissionFilter={transmissionFilter}/>
            <button onClick={() => {
                setValue("");
                setMarkFilter("");
                setEngineFilter("");
                setTransmissionFilter("");
            }} className={classes.generic_button}>Сброс</button>
            <h2>Выбор для бронирования</h2>
            <div className={classes.catalog}>
                {makeList()}
                {p ? null : <div>Ничего не найдено :(</div>}
            </div>
        </>
    );
}
