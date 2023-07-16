import React from "react";
import classes from "../../assets/static/lagushki_style.module.css"
import classNames from "classnames";
import {Link, NavLink} from "react-router-dom";


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            linkssmenu: classNames(classes.linkssmenu),
            bar1: classNames(classes.bar1),
            bar2: classNames(classes.bar2),
            bar3: classNames(classes.bar3),
            shown: false,
        }
    }


    showLMenu(){
        if (this.state.shown === false) {
            this.setState({
                linkssmenu: classNames(classes.linkssmenu, classes.visible),
                linkssmenu__cover: classNames(classes.linkssmenu__cover, classes.visible),
                bar1: classNames(classes.bar1, classes.change),
                bar2: classNames(classes.bar2, classes.change),
                bar3: classNames(classes.bar3, classes.change),
                shown: true
            })
        }
        else{
            this.setState({
                linkssmenu: classNames(classes.linkssmenu),
                linkssmenu__cover: classNames(classes.linkssmenu__cover),
                bar1: classNames(classes.bar1),
                bar2: classNames(classes.bar2),
                bar3: classNames(classes.bar3),
                shown: false
            })
        }
    }


    render() { // тут бред бредятиной, но так проще.
        return(
            <>
                <div className={classes.menu}>
                    <Link to={"../"} className={classes.betalabel}>Назад</Link>
                    <div className={classes.t1}>
                        <NavLink to={""} className={classNames(classes.titlel, classes.title)}>🐸 Лагушки и жабы</NavLink>
                        <NavLink to={""} className={classNames(classes.titles, classes.title)}>🐸</NavLink>
                    </div>
                    <div className={classes.linksl}>
                        <NavLink to={"faq"} className={({isActive, isPending}) =>
                                 isActive ? classNames(classes.link, classes.active) : classes.link}><div>🐸</div>ЧЗВ</NavLink>
                        <NavLink to={"index2"} className={({isActive, isPending}) =>
                                 isActive ? classNames(classes.link, classes.active) : classes.link}><div>🐸</div>Index2</NavLink>
                        <NavLink to={"info"} className={({isActive, isPending}) =>
                                 isActive ? classNames(classes.link, classes.active) : classes.link}><div>🐸</div>Info</NavLink>
                        <NavLink to={"rating"} className={({isActive, isPending}) =>
                                 isActive ? classNames(classes.link, classes.active) : classes.link}><div>🐸</div>Рейтинг</NavLink>
                        <NavLink to={"build"} className={({isActive, isPending}) =>
                                 isActive ? classNames(classes.link, classes.active) : classes.link}><div>🐸</div>Build</NavLink>
                    </div>
                    <div className={classes.menu_button} onClick={() => this.showLMenu()}>
                        <div className={this.state.bar1}/>
                        <div className={this.state.bar2}/>
                        <div className={this.state.bar3}/>
                    </div>
                </div>
                <div className={this.state.linkssmenu__cover} onClick={() => this.showLMenu()}/>
                <div className={this.state.linkssmenu}>
                    <NavLink to={"faq"} className={({isActive, isPending}) =>
                                 isActive ? classNames(classes.llink, classes.active) : classes.llink}><div>🐸</div>ЧЗВ</NavLink>
                        <NavLink to={"index2"} className={({isActive, isPending}) =>
                                 isActive ? classNames(classes.llink, classes.active) : classes.llink}><div>🐸</div>Index2</NavLink>
                        <NavLink to={"info"} className={({isActive, isPending}) =>
                                 isActive ? classNames(classes.llink, classes.active) : classes.llink}><div>🐸</div>Info</NavLink>
                        <NavLink to={"rating"} className={({isActive, isPending}) =>
                                 isActive ? classNames(classes.llink, classes.active) : classes.llink}><div>🐸</div>Рейтинг</NavLink>
                        <NavLink to={"build"} className={({isActive, isPending}) =>
                                 isActive ? classNames(classes.llink, classes.active) : classes.llink}><div>🐸</div>Build</NavLink>
                </div>
            </>
        )
    }
}

export default Header;
