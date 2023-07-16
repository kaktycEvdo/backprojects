import React from "react";
import classes from "./Modal.module.css"
import classNames from "classnames";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Modal extends React.Component{
    state = {
        content: classNames(classes.modal, this.props.class)
    }

    constructor(props) {
        super(props);
        this.state = {
            content: classNames(classes.modal, this.props.class)
        }
    }

    render() {
        if (this.props.opened === true){
            return(
            <div className={this.state.content} onClick={(e) => {
                if (e.target.className === this.state.content) {
                    this.props.close()
                }
            }}>
                <div className={classes.content}>
                    <div className={classes.close_button__container}>
                        <button onClick={this.props.close} className={classes.close_button}>
                            <FontAwesomeIcon icon={faXmark}/>
                        </button>
                    </div>
                    {this.props.children}
                </div>
            </div>
            )
        }
    }
}

export default Modal;
