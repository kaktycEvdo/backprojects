import React from "react";
import classes from "../../assets/static/indexdrive_style.module.css";
import Modal from "../UI/Modal/Modal.jsx";
import classNames from "classnames";
import {Form} from "react-router-dom";


class CatItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className={classes.cat__item}>
                    <div className={classes.cat__name}>{this.props.output.name}</div>
                    <div className={classes.cat__image}><img src={this.props.output.image} alt={"машинка"}/></div>
                    <div className={classes.cat__price}>
                        от <i className={classes.accent_text}>{this.props.output.price}₽</i>
                    </div>
                    <a className={classes.generic_button} onClick={this.props.open}>Подробнее</a>
                </div>
                <Modal className={classNames(classes.page__container, classes.car_page)}
                       opened={this.props.opened} close={this.props.close}>
                    <div className={classes.car_page__container}>
                        <div className={classes.car_page__image}><img src={this.props.output.image} alt={"машинка"}/></div>
                        <div className={classes.car_page_chars}>
                            <h2>Характеристики</h2>
                            <div>Марка:</div>
                            <div>{this.props.output.mark}</div>
                            <div>Модель:</div>
                            <div>{this.props.output.model}</div>
                            <div>Цвет:</div>
                            <div>{this.props.output.color}</div>
                            <div className={classes.car_page__text_wide}>Тип двигателя:</div>
                            <div className={classes.car_page__engine_type}>
                                {this.props.output.engine.split(" ").map(res => {return (
                                    res.startsWith("u-") ?
                                        <i key={res} className={classes.disabled_text}>{res.substring(2)}</i> :
                                        <i key={res}>{res}</i>)
                                })}
                            </div>
                            <div className={classes.car_page__text_wide}>Коробка передач:</div>
                            <div className={classes.car_page__transmission}>
                                {this.props.output.transmission.split(" ").map((res) => {return (
                                    res.startsWith("u-") ?
                                        <i key={res} className={classes.disabled_text}>{res.substring(2)}</i> :
                                        <i key={res}>{res}</i>)
                                })}
                            </div>
                            <div>Цена:</div>
                            <div className={classes.car_page__price}>
                                от <i className={classes.accent_text}>
                                    {this.props.output.price}₽
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className={classes.car_page__buttons}>
                        <Form method={"post"}>
                            <button type={"submit"} name={"car"} className={classes.generic_button}
                                    value={[JSON.stringify(this.props.output), 1]}>Выбрать</button>
                        </Form>
                        <a onClick={() => this.setState({opened: false})}
                           className={classNames(classes.generic_button, classes.g_button__red)}>Отмена</a>
                    </div>
                </Modal>
            </>
        );
    }
}

export default CatItem;