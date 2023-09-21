import React from "react";
import classes from "../../assets/static/indexdrive_style.module.css";
import Modal from "../UI/Modal/Modal.jsx";
import FelItem from "./FelItem.jsx";
import classNames from "classnames";


class Felial extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        }
    }

    render() {
        return (
            <>
                <div className={classes.fel} onClick={() => this.setState({opened: true})}>
                    <div className={classes.fel__name}>{this.props.felial.name}</div>
                    <img className={classes.fel__image} src={this.props.felial.image}/>
                    <div className={classes.fel__address}>{this.props.felial.address}</div>
                </div>
                <Modal opened={this.state.opened} className={classNames(classes.fl_page, classes.page__container)}
                       close={() => this.setState({opened: false})}>
                    <h2>Здесь доступны:</h2>
                    <div className={classes.fl_page__content}>
                        {this.props.felial.cars.map((car) => (<FelItem car={car} key={car.name} fel={this.props.felial.name}/>))}
                    </div>
                </Modal>
            </>
        );
    }
}

export default Felial;
