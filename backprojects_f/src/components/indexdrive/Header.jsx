import React from "react";
import classes from "../../assets/static/indexdrive_style.module.css";
import {NavLink} from "react-router-dom";
import img from "../../assets/static/img/indexdrive__logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        }
    }

    open(){
        this.setState({opened: true});
    }

    close(){
        this.setState({opened: false});
    }

    render() {
        return (
            <>
                <header>
                    <div className={classes.header__container}>
                        <div className={classes.index}>
                            <NavLink to="">
                                <img src={img} alt={"indexdrive"}/>
                            </NavLink>
                        </div>
                        <div className={classes.menu}>
                            <NavLink to="branches" className={({isActive}) => isActive ? classes.active_link : null}>
                                <i className={classes.link_text}>Филиалы</i>

                            </NavLink>
                            <NavLink to="car-select" className={({isActive}) => isActive ? classes.active_link : null}>
                                <i className={classes.link_text}>Автомобили</i>
                            </NavLink>
                            <NavLink to="booking" className={({isActive}) => isActive ? classes.active_link : null}>
                                <i className={classes.link_text}>Бронирование</i>
                                <i className={classes.cars_amount}>{this.props.amount}</i>
                            </NavLink>
                        </div>
                        <div className={classes.account}>
                            <NavLink to="profile" className={({isActive}) => isActive ? classes.active_link : null}>
                                {this.props.username ? this.props.username : "Гость"}
                            </NavLink>
                        </div>
                        <i className={classes.menu_button} onClick={() => {
                            this.state.opened ? this.close() : this.open()
                        }}>
                            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                        </i>
                    </div>
                </header>
                <div className={classes.side_menu__trigger}></div>
                {this.state.opened ?
                    <div className={classes.side_menu}>
                        <div className={classes.side_menu__container}>
                            <NavLink to="booking"
                                     className={({isActive}) => isActive ?
                                         classNames(classes.replacements, classes.active_link) :
                                         classes.replacements}>
                                Бронирование
                                <i className={classes.cars_amount}>{this.state.amount}</i>
                            </NavLink>
                            <NavLink to="history" className={({isActive}) => isActive ?
                                classes.active_link :
                                null}>
                                <i className={classes.link_text}>История бронирования</i>
                            </NavLink>
                            <NavLink to="cards" className={({isActive}) => isActive ?
                                classes.active_link :
                                null}>
                                <i className={classes.link_text}>Карты</i>
                            </NavLink>
                            <NavLink to="car-select" className={({isActive}) => isActive ?
                                classNames(classes.replacements, classes.active_link) :
                                classes.replacements}>
                                <i className={classes.link_text}>Автомобили</i>
                            </NavLink>
                            <NavLink to="branches" className={({isActive}) => isActive ?
                                classNames(classes.replacements, classes.active_link) :
                                classes.replacements}>
                                <i className={classes.link_text}>Филиалы</i>
                            </NavLink>
                            <NavLink to="profile" className={({isActive}) => isActive ?
                                classNames(classes.replacements, classes.active_link) :
                                classes.replacements}>
                                <i className={classes.link_text}>ЛК</i>
                            </NavLink>
                        </div>
                    </div>
                    : null
                }
            </>
        );
    }
}

export default Header;
