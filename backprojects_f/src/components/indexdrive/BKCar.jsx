import classes from "../../assets/static/indexdrive_style.module.css";
import React from "react";
import Modal from "../UI/Modal/Modal.jsx";
import {Form, Link, useSubmit} from "react-router-dom";
import classNames from "classnames";

export default class BKCar extends React.Component{
    constructor(props) {
        super(props);
        this.days = new Date(this.props.data.days_begin) < new Date(this.props.data.days_end) ?
                Math.floor((new Date(this.props.data.days_end)-new Date(this.props.data.days_begin))/(24*3600*1000)) :
                0
        this.state = {
            opened: false,
            days: this.days,
            discount: this.props.data.discount,
            final: this.props.data.price * this.days - (this.props.data.price * this.props.data.discount),
            fel: this.props.data.fel_name,
            days_begin: this.props.data.days_begin,
            days_end: this.props.data.days_end,
            data: {
                id: this.props.data.id,
                mark: this.props.data.mark,
                name: this.props.data.name,
                tag: this.props.data.tag,
                days_begin: this.props.data.days_begin,
                days_end: this.props.data.days_end,
                discount: this.props.data.discount,
                price: this.props.data.price,
                final: this.props.data.price * this.props.data.days - (this.props.data.price * this.props.data.discount),
                fel_name: this.props.data.fel_name,
            }
        }
    }

    updateData(){
        this.setState({
            days: new Date(this.state.days_begin) < new Date(this.state.days_end) ?
                Math.floor((new Date(this.state.days_end)-new Date(this.state.days_begin))/(24*3600*1000)) :
                0
        }, () => {
            this.setState({
                discount: this.state.days < 16 ? Math.floor(this.state.days / 3) / 20 : 0.25,
            }, () => {
                this.setState({
                    final: this.props.data.price * this.state.days - (this.props.data.price * this.state.discount),

                }, () => {
                    this.setState({
                        data: {
                            id: this.props.data.id,
                            mark: this.props.data.mark,
                            name: this.props.data.name,
                            tag: this.props.data.tag,
                            discount: this.state.discount,
                            price: this.props.data.price,
                            final: this.state.final,
                            fel_name: this.state.fel,
                            days_begin: this.state.days_begin,
                            days_end: this.state.days_end,
                        }
                    })
                })
            })
        })
    }


    render() {
        return (
            <>
                <div className={classes.bk_car} onClick={() => this.setState({opened: true})}>
                    <img src={this.props.car_image} alt={this.props.data.name}/>
                    <div>{this.props.data.name}</div>
                    <div>{this.state.final}₽</div>
                </div>
                <Modal className={classes.bk_page} opened={this.state.opened} close={() => {
                    this.setState({opened: false});
                }}>
                    <h2>{this.props.data.name}</h2>
                        <div className={classes.bk_page__content}>
                            <img className={classes.bk_page__image} src={this.props.car_image} alt={this.props.data.name}/>
                            <div>
                                <div className={classes.bk_page_parameters}>
                                    <div className={classes.bk_parameters__text}>Идентификатор машины:</div>
                                    <div className={classes.bk_parameters__text}>{this.props.data.id}</div>
                                    <div className={classes.bk_parameters__text}>Марка авто:</div>
                                    <div className={classes.bk_parameters__text}>{this.props.data.mark}</div>
                                    <div className={classes.bk_parameters__text}>Название авто:</div>
                                    <div className={classes.bk_parameters__text}>{this.props.data.name}</div>
                                    <div className={classes.bk_parameters__text}>Номер машины:</div>
                                    <div className={classes.bk_parameters__text}>{this.props.data.tag}</div>
                                    <div className={classes.bk_parameters__text}>Дата начала:</div>
                                    <input onChange={(e) => {this.setState({days_begin: e.target.value}, this.updateData);}}
                                           value={this.state.days_begin}
                                           className={classes.generic_input} type={"date"}/>
                                    <div className={classes.bk_parameters__text}>Дата окончания:</div>
                                    <input onChange={(e) => {this.setState({days_end: e.target.value}, this.updateData);}}
                                           value={this.state.days_end}
                                           className={classes.generic_input} type={"date"}/>
                                    <div className={classes.bk_parameters__text}>Кол-во бронируемых дней:</div>
                                    <div className={classes.bk_parameters__text}>{this.state.days}</div>
                                    <div className={classes.bk_parameters__text}>Цена:</div>
                                    <div className={classes.bk_parameters__text}>{this.state.final}₽</div>
                                    <div className={classes.bk_parameters__text}>Скидка:</div>
                                    <div className={classes.progress_bar} progress={this.state.discount*400}>
                                        {this.state.discount*100}%
                                    </div>
                                    <div className={classes.bk_parameters__text}>Филиал:</div>
                                    <select defaultValue={this.props.data.fel_name}
                                            onChange={(e) => this.setState({fel: e.target.value}, this.updateData)}
                                            className={classes.generic_dropdown}>
                                        <option value={"Первый"}>Первый</option>
                                        <option value={"Второй"}>Второй</option>
                                        <option value={"Третий"}>Третий</option>
                                        <option value={"Четвертый"}>Четвертый</option>
                                        <option value={"Пятый"}>Пятый</option>
                                    </select>
                                    <div className={classes.bk_parameters__text}>Пользователь:</div>
                                    <Link to={"/indexdrive/profile"}
                                          className={classNames(classes.bk_parameters__text, classes.accent_text)}>
                                        {this.props.username}
                                    </Link>
                                </div>
                                <Form method={"post"} className={classes.bk_page_buttons}>
                                    <button className={classes.generic_button} type={"submit"} name={"car"}
                                        value={[JSON.stringify(this.state.data), 4]}>Сохранить</button>
                                    <button type={"submit"} name={"car"}
                                            className={classNames(classes.generic_button, classes.g_button__red)}
                                            value={[JSON.stringify({id: this.props.data.id}), 2]}>Отменить</button>
                                </Form>
                            </div>


                        </div>
                </Modal>
            </>
        );
    }
}