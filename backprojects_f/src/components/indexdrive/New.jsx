import React from "react";
import classNames from "classnames";
import classes from "../../assets/static/indexdrive_style.module.css";
import Modal from "../UI/Modal/Modal.jsx";


class New extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
        }
    }


    render() {
        return (
            <>
                <div className={classNames(classes.new)} onClick={() => this.setState({opened: true})}>
                    <div className={classes.new__name}>
                        {this.props.name}
                    </div>
                    <div className={classes.new__image}>
                        <img src={this.props.img} alt={"картинка машины"}/>
                    </div>
                    <div className={classes.new__description}>
                            {this.props.description}
                    </div>
                </div>
                <Modal className={classes.page__container} opened={this.state.opened}
                       close={() => this.setState({opened: false})}>
                    <div className={classes.new_page_content}>
                        <div className={classes.new__name}>
                            {this.props.name}
                        </div>
                        <div className={classes.new__image}>
                            <img src={this.props.img}/>
                        </div>
                        <div className={classes.new__description}>
                            {this.props.description}
                        </div>
                    </div>
                </Modal>
            </>
        );
    }
}

export default New;
