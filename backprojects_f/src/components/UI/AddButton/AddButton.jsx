import classes from "./AddButton.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import axios from "axios";

class AddButton extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={classes.add_button} onClick={this.props.show}>
                <div className={classes.add_button__container}>
                    <FontAwesomeIcon icon={faPlusSquare} className={classes.add_button__icon}/>
                </div>
            </div>
        )
    }
}

export default AddButton;
