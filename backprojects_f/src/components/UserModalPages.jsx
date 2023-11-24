import React from "react";
import classes from "../assets/static/favlinks_style.module.css"
import axios from "axios";

class UserModalPages extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            r_username: "",
            r_email: "",
            r_password: "",
            a_username: "",
            a_password: ""
        }
    }

    register(){
        let object = {
            username: this.state.r_username,
            email: this.state.r_email,
            password: this.state.r_password
        }
        // для точности я после отправки данных для создания юзера запрашиваю данные того юзера, что создал
        axios.post("https://backproj.onrender.com/users", object).then(() => {
            axios.get("https://backproj.onrender.com/users", { params:
                {
                    username: object.username,
                    password: object.password
                }
            }).then((res) => this.props.update_activeUser(res.data.id))
                .catch(reason => alert(reason));
        }).catch((reason) => alert(reason));

    }

    auth(){
        let object = {
            username: this.state.a_username,
            password: this.state.a_password
        };
        axios.get("https://backproj.onrender.com/users", { params:
            {
                username: object.username,
                password: object.password
            }
        }).then((res) => this.props.update_activeUser(res.data.id))
            .catch(reason => alert(reason));
    }

    render() {
        switch (this.props.page){
            case 1:{
                return(
                    <div className={classes.profile__modal}>
                        <div className={classes.profile__page}>

                        </div>
                    </div>
                )
            }
            case 2:{
                return(
                    <div className={classes.profile__modal}>
                        <form className={classes.profile__form} onSubmit={(e) => {
                            e.preventDefault();
                            this.register();
                        }}>
                            <label>Почта</label><input type={"email"}
                                                       value={this.state.r_email}
                                                       onChange={(e) => this.setState({r_email: e.target.value})}/>
                            <label>Пароль</label><input type={"password"}
                                                        value={this.state.r_password}
                                                        onChange={(e) => this.setState({r_password: e.target.value})}/>
                            <label>Никнейм</label><input type={"text"}
                                                         value={this.state.r_username}
                                                         onChange={(e) => this.setState({r_username: e.target.value})}/>
                            <input type={"submit"} value={"Зарегистрироваться"}/>
                        </form>
                    </div>
                )
            }
            case 3:{
                return(
                    <div className={classes.profile__modal}>
                        <form className={classes.profile__form} onSubmit={(e) => {
                            e.preventDefault();
                            this.auth();
                        }}>
                            <label>Никнейм</label><input type={"text"}
                                                         value={this.state.a_username}
                                                         onChange={(e) => this.setState({a_username: e.target.value})}/>
                            <label>Пароль</label><input type={"password"}
                                                        value={this.state.a_password}
                                                        onChange={(e) => this.setState({a_password: e.target.value})}/>
                            <input type={"submit"} value={"Авторизоваться"}/>
                        </form>
                    </div>
                )
            }
        }

    }
}

export default UserModalPages;
