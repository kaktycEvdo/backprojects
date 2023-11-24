import Modal from "./UI/Modal/Modal.jsx";
import classes from "../assets/static/favlinks_style.module.css";
import React from "react";
import axios from "axios";

class EditModal extends React.Component{
    state = {
        link: this.props.output.link,
        name: this.props.output.name,
        color: this.props.output.color
    }

    constructor(props) {
        super(props);
        this.state = {
            link: this.props.output.link,
            name: this.props.output.name,
            color: this.props.output.color
        }
    }

    put(){
        let link_id = this.props.output.id;
        let object = {
            name: this.state.name,
            link: this.state.link,
            color: this.state.color,
        }
        if (!object.name || object.name === ""){
            // не придумал как на уровне бек-энда это сделать
            object.name = object.link.split(".")[0];
        }
        axios.put("https://backproj.onrender.com/favlinks/"+this.props.active_user_id+"/links/"+link_id, object).then(
            () => this.props.update()
        )
            .catch(reason => alert(reason));
    }

    render() {
        return(
            <Modal className={classes.modal__override} opened={this.props.opened} close={this.props.close}>
                <form className={classes.edit__form} onSubmit={(e) => {
                    e.preventDefault();
                    this.put();
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
                    <input type={"submit"} value={"Изменить"}/>
                </form>
            </Modal>
        )
    }
}

export default EditModal;
