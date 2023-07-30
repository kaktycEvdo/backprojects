import React from "react";
import classes from "../../assets/static/indexdrive_style.module.css";
import {Form} from "react-router-dom";


class FelItem extends React.Component{
    constructor(props) {
        super(props);
        this.car = this.props.car;
        this.car.fel = this.props.fel;
    }

    render() {
        return (
            <div className={classes.fel__car}>
                <img src={this.props.car.image} alt={"машинка"}/>
                <div>{this.props.car.name}</div>
                <div>от <i className={classes.accent_text}>{this.props.car.price}</i></div>
                <Form method={"post"} className={classes.button_container}>
                    <button type={"submit"} name={"car"} className={classes.generic_button}
                            value={[JSON.stringify(this.car), 1]}>Выбрать</button>
                </Form>
            </div>
        );
    }
}

export default FelItem;
