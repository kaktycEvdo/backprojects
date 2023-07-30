import React from "react";
import Modal from "./UI/Modal/Modal.jsx";
import UserModalPages from "./UserModalPages.jsx";
import classes from "../assets/static/favlinks_style.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

class UserModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            page: this.props.active_user ? 1 : 2,
            page_name: this.props.active_user ? "Профиль" : "Регистрация"
        }
    }

    close(){
        this.props.setOpened(false)
    }

    page_up(){
        if (this.state.page < 3){
            this.setState({page: this.state.page+1}, () => {
                    switch (this.state.page){
                    case 2: this.setState({page_name: "Регистрация"}); break;
                    case 3: this.setState({page_name: "Авторизация"}); break;
                }
            });
        }
    }
    page_down(){
        if (this.state.page > 1 && this.props.active_user || this.state.page > 2 && !this.props.active_user){
            this.setState({page: this.state.page-1}, () => {
                    switch (this.state.page){
                    case 1: this.setState({page_name: "Профиль"}); break;
                    case 2: this.setState({page_name: "Регистрация"}); break;
                }
            });
        }
    }

    render() {
        return(
            <Modal opened={this.props.opened} close={() => this.close()} className={classes.modal__override}>
                <nav className={classes.modal__nav}>
                    <button onClick={() => this.page_down()}><FontAwesomeIcon icon={faAngleLeft}/></button>
                        {this.state.page_name}
                    <button onClick={() => this.page_up()}><FontAwesomeIcon icon={faAngleRight}/></button>
                </nav>
                <UserModalPages page={this.state.page} update={this.props.update} update_pages={()=>this.update_pages()}
                                active_user={this.props.active_user} update_activeUser={this.props.update_activeUser}/>
            </Modal>
        )
    }
}

export default UserModal;
