import React from "react";
import "../assets/static/main_style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import classes from "../assets/static/index_style.module.css";
import {Link} from "react-router-dom";


class Index extends React.Component{
    render(){
        return(
            <div className={classes.body}>
                <div className={classes.container}>
                    <div className={classes.title}><FontAwesomeIcon icon={faBriefcase}/><br/>BackProjects</div>
                    <nav className={classes.index_nav}>
                        <Link to="favlinks">Менеджер закладок FavLinks</Link>
                        <Link to="lagushki">Практика Lagushki</Link>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Index;
