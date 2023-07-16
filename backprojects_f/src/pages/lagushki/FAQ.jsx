import React from "react";
import classes from "../../assets/static/lagushki_style.module.css";
import classNames from "classnames";
import GenericPage from "../../components/lagushki/GenericPage.jsx";


class FAQ extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <>
                <div className={classes.qcontent}>
                    <div className={classes.questions} id="q1">
                        <div className={classNames(classes.question, classes.l)}>
                            Зачем этот сайт?
                        </div>
                        <div className={classNames(classes.answer, classes.l)}>
                            Данный сайт был сделан с целью обучения созданию веб-сайта и использования новых
                            инструментов и идей для оформления. Также этот сайт понравится любителям лягушкам.
                        </div>
                    </div>
                    <div className={classes.questions} id="q2">
                        <div className={classNames(classes.question, classes.r)}>
                            Почему лягушки/жабы?
                        </div>
                        <div className={classNames(classes.answer, classes.r)}>
                            Лягушки и жабы милые и прикольные и классные и че бы нет.
                        </div>
                    </div>
                    <div className={classes.questions} id="q3">
                        <div className={classNames(classes.question, classes.l)}>
                            У автора всё норм с головой?
                        </div>
                        <div className={classNames(classes.answer, classes.l)}>
                            Да, всё норм. В будущем, если будет время у автора, добавится динамика и будут
                            использоваться базы данных для сохранения. Для продолжения был оставлен Index2.
                        </div>
                    </div>
                    <div className={classes.questions} id="q4">
                        <div className={classNames(classes.question, classes.r)}>
                            Зачем продолжать этот проект?
                        </div>
                        <div className={classNames(classes.answer, classes.r)}>
                            Поскольку автор могёт и есть какое-то желание.
                        </div>
                    </div>
                    <div className={classes.questions}>
                        <div className={classNames(classes.question, classes.l)}>
                            Кто автор?
                        </div>
                        <div className={classNames(classes.answer, classes.l)}>
                            Илья.
                        </div>
                    </div>
                    <div className={classes.questions}>
                        <div className={classNames(classes.question, classes.r)}>
                            Как долго заняло создание этого сайта?
                        </div>
                        <div className={classNames(classes.answer, classes.r)}>
                            Конкретно лагушки и не на React - около 7 часов. С React подольше.
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default FAQ