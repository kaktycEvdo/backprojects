import React from "react";
import Modal from "./UI/Modal/Modal.jsx";
import classes from "../assets/static/favlinks_style.module.css";
import axios from "axios";

class AddModal extends React.Component{
    state = {
        link: "",
        name: "",
        color: "#000000"
    }

    constructor(props) {
        super(props);
        this.state = {
            link: "",
            name: "",
            color: "#000000"
        }
    }

    add(){
        let object = {
            name: this.state.name,
            link: this.state.link,
            color: this.state.color,
        }
        if (!object.name || object.name === ""){
            // не придумал как на уровне бек-энда это сделать
            object.name = object.link.split(".")[0];
        }
        axios.post("http://localhost:8000/favlinks/"+this.props.active_user_id+"/links", object).then(this.props.update)
            .catch(reason => alert(reason));
    }

    render() {
        return(
            <Modal class={"modal__add"} opened={this.props.opened} close={this.props.close}>
                <form className={classes.add__form} onSubmit={(e) => {
                    e.preventDefault();
                    this.add();
                }}>
                    <label>Название:</label><input type={"text"}
                                                   value={this.state.name}
                                                   onChange={(e) => this.setState({name: e.target.value})}/>
                    <label>Ссылка:</label><input type={"text"}
                                                 value={this.state.link}
                                                 onChange={(e) => this.setState({link: e.target.value})}
                                                 required={true}/>
                    <label>Цвет:</label><input type={"color"}
                                               value={this.state.color}
                                               onChange={(e) => this.setState({color: e.target.value})}/>
                    <input type={"submit"} value={"Создать"} />
                </form>
            </Modal>
        )
    }
}

export default AddModal;
