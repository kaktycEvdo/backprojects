import classes from '../assets/static/favlinks_style.module.css'
import Header from "../components/Header.jsx";
import Favlink from "../components/Favlink.jsx";
import React from "react";
import axios from "axios";
import AddObjects from "../components/AddObjects.jsx";

class Favlinks extends React.Component{
    state = {
        amount: 0,
        active_user: null,
        active_user_id: null,
        message: <></>,
        add_objects: <></>,
        header: <></>
    }

    update(){
        let data;
        if (!this.state.active_user){
            this.setState({
                message: <div className={classes.message}>Для рабоспособности веб-приложения необходимо зарегистрироваться</div>
            })
        }
        else{
            axios.get('https://backproj.onrender.com/favlinks/'+this.state.active_user_id+'/links').then((res) =>
            {
                data = res.data;
                this.setState({
                    amount: data.length,
                    favl: data.map((output) => (
                        <Favlink output={output} key={output.id}
                                 delete_link={() => this.delete_link(output.id)}
                                 active_user_id={this.state.active_user_id}
                                 update={() => this.update()}/>
                    )),
                    message: <></>,
                    add_objects: <AddObjects active_user_id={this.state.active_user_id}
                                             update={() => this.update()}/>
                });
            })
            .catch(err => {
                alert("Ошибка: "+err);
            });
        }
    }

    update_activeUser = (data) => {
        this.setState({active_user_id: data});
        axios.get("https://backproj.onrender.com/users/"+data).then((res) => {
            this.setState({active_user: {
                username: res.data.username
                }}, () => {
                this.update();
            });
        })
            .catch(reason => alert(reason));
    }

    componentDidMount() {
        this.update();
    }

    delete_link(link_id){
        axios.delete("https://backproj.onrender.com/favlinks/"+this.state.active_user_id+"/links/"+link_id).then(() => this.update())
            .catch(reason => alert(reason));
    }

    render(){
        return(
            <div className={classes.favlinks__body}>
                {this.state.message}
                <Header amount={this.state.amount}
                        active_user={this.state.active_user}
                        update={() => this.update()}
                        update_activeUser={this.update_activeUser}
                        classes={classes}/>
                <div className={classes.content}>
                    <div className={classes.favlinks}>
                        {this.state.favl}
                        {this.state.add_objects}

                    </div>
                </div>
            </div>
        )
    }
}

export default Favlinks;
