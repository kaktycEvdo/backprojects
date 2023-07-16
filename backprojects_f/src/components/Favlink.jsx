import React from "react";
import classes from "../assets/static/favlinks_style.module.css";
// import axios from "axios";
import classNames from "classnames";
import EditModal from "./EditModal.jsx";

class Favlink extends React.Component{
    state = {
        text_color: "#000000",
        content: classNames(classes.favlink__container, classes.favlink__visible),
        options: classNames(classes.favlink__options),
        opened: false
    }
    changed = false;
    touch_duration = 500;
    timer;

    constructor(props) {
        super(props);
        this.state = {
            text_color: "#000000",
            content: classNames(classes.favlink__container, classes.favlink__visible),
            options: classNames(classes.favlink__options),
            opened: false
        }
    }

    update_text_color(){
        let sum = 0;
        for (let i = 1; i < this.props.output.color.length; i++){
            if (this.props.output.color[i].match(/[0-9]/)){
                sum += parseInt(this.props.output.color[i]);
            }
            else{
                sum += 15
            }
        }
        if (sum < 20){  // если сумма цифр после # меньше 20, что означает тёмный цвет
            this.setState({text_color: "#FFFFFF"});
        }
    }

    componentDidMount() {
        this.update_text_color();
    }

    change(event){
        event.preventDefault();
        if (!this.changed){
            this.setState({
                content: classNames(classes.favlink__container),
                options: classNames(classes.favlink__options, classes.favlink__visible)
            })
            this.changed = true;
        }
        else{
            this.setState({
                content: classNames(classes.favlink__container, classes.favlink__visible),
                options: classNames(classes.favlink__options)
            })
            this.changed = false;
        }
    }

    drop(e){
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
    }

    showEdit(){
        this.setState({opened: true});
    }

    closeEdit(){
        this.setState({opened: false});
    }

    onLongTouch(e){
        this.change(e);
    }

    touchStart(e){
        this.timer = setTimeout(() => this.onLongTouch(e), this.touch_duration);
    }

    touchEnd(){
        if(this.timer !== null){
            clearTimeout(this.timer);
        }
    }

    render() {
        return(
            <>
                <div style={{backgroundColor: this.props.output.color, color: this.state.text_color}} className={classes.favlink}
                     onContextMenu={(event) => {this.change(event)}} draggable={true}
                     onTouchStart={(e) => this.touchStart(e)}
                     onTouchEnd={() => this.touchEnd()}
                     onDrag={(e) => e.dataTransfer.setData("text", e.target.id)}
                     onDragOver={(e) => e.preventDefault()}
                     onDrop={(e) => this.drop(e)}>
                    <div className={this.state.options}>
                        <div className={classes.favlink__option} onClick={(e) => {
                            this.change(e);
                            this.showEdit();
                        }}>Edit</div>
                        <div className={classes.favlink__option} onClick={this.props.delete_link}>Del</div>
                    </div>
                    <a href={this.props.output.link} className={this.state.content}>
                        <div><img src={'http://www.google.com/s2/favicons?domain='+this.props.output.link+'&sz=128'} alt={""} className={classes.favlink__favicon}/></div>
                        <div className={classes.favlink__name}>{this.props.output.name}</div>
                        <div className={classes.favlink__link}>{this.props.output.link}</div>
                    </a>
                </div>
                <EditModal output={this.props.output}
                           opened={this.state.opened}
                           close={() => this.closeEdit()}
                           active_user_id={this.props.active_user_id}
                           update_text_color={() => this.update_text_color()}
                           update={this.props.update}/>
            </>
        )
    }
}

export default Favlink

// TODO: доделать drag-and-drop
