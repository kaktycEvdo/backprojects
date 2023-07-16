import React from "react";
import classes from "../../assets/static/lagushki_style.module.css";
import GenericPage from "../../components/lagushki/GenericPage.jsx";


class Index extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <div className={classes.iblock}>
                    Лягушки и жабы любимы многими. Это одно из самых полезных и приятных созданий. Чтоб больше о них узнать
                    можно посмотреть вкладку <a className={classes.infolink} onClick={() => this.props.changePage(3)}>Инфо</a>.
                </div>
                <div className={classes.iblock}>
                    Некоторым возможно интересна классификация по субьективному мнению автора сайта. Для этого можно посмотреть
                    вкладку <a className={classes.ratinglink} onClick={() => this.props.changePage(4)}>Рейтинг</a>.
                </div>
                <div className={classes.iblock}>
                    А для тех, кому интересно зачем автор создал этот сайт и всё ли у него в порядке, можно посмотреть
                    вкладку <a className={classes.faqlink} onClick={() => this.props.changePage(1)}>ЧЗВ</a>.
                </div>
                <div className={classes.iblock}>
                    Кому очень хочется создать собственный рейтинг лягушек на основе картинок с сайта, который можно увидеть
                    в Index2, можно посмотреть вкладку <a className={classes.buildlink} onClick={() => this.props.changePage(5)}>Build</a>.
                </div>
            </>
        )
    }
}

export default Index