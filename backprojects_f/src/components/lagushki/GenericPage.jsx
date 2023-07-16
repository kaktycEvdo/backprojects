import React from "react";
import classes from "../../assets/static/lagushki_style.module.css";
import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";


class GenericPage extends React.Component{
    constructor(props) {
        super(props);

    }


    render() {
        return(
            <div className={classes.lagushki__body}>
                <Header/>
                <div className={classes.content}>
                    <Outlet/>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default GenericPage;
