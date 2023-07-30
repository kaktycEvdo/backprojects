import React from "react";
import classes from "./Modal.module.css"
import classNames from "classnames";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Modal extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.opened === true){
            return(
            <div className={classes.modal} onClick={(e) => {
                if (e.target.className === classes.modal) {
                    this.props.close()
                }
            }}>
                <div className={classNames(classes.content, this.props.className)}>
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
