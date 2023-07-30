import img1 from "../../assets/static/img/Kras.png";
import img2 from "../../assets/static/img/Moskow.png";
import img3 from "../../assets/static/img/Novos.png";
import img4 from "../../assets/static/img/Piter.png";
import img5 from "../../assets/static/img/Томск.png";
import {useLoaderData} from "react-router-dom";
import Felial from "../../components/indexdrive/Felial.jsx";
import classes from "../../assets/static/indexdrive_style.module.css";


export default function Felials(){
    const cars = useLoaderData();
    const felials = [
        {
            name: "Первый",
            image: img1,
            address: "ул. Северо-Западная, д. 159",
            cars: [cars[5], cars[7], cars[1]]
        },
        {
            name: "Второй",
            image: img2,
            address: "ул. Северо-Западная, д. 159",
            cars: [cars[10], cars[11], cars[4]]
        },
        {
            name: "Третий",
            image: img3,
            address: "ул. Проспект Космонавтов, д. 10/4, Автокомплекс \"Техно-Маркет\"",
            cars: [cars[7], cars[2], cars[0]]
        },
        {
            name: "Четвертый",
            image: img4,
            address: "ул. Павловский тракт, д. 164",
            cars: [cars[3], cars[6], cars[8]]
        },
        {
            name: "Пятый",
            image: img5,
            address: "ул. Герцена, д. 7/524",
            cars: [cars[9], cars[5], cars[4]]
        }
    ]

    return(
        <>
            <h2>Выберите филиал (г. Барнаул)</h2>
            <div className={classes.fel_list}>
                <div className={classes.fel_list__container}>
                    {felials.map((fel) => (<Felial key={fel.name} felial={fel}/>))}
                </div>
            </div>
        </>
    )
}