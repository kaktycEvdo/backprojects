import React, { Component } from 'react'
import Modal from '../UI/Modal/Modal';
import classes from "../../assets/static/indexdrive_style.module.css";
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            opened: false
        }
    }

    changeName(value) {
        this.props.setValue(value);
    }

    showList(){
        let k = 0;
        return(
            <>
            {
                this.props.cars.map((output, index) => {
                    if(output.name.toLowerCase().includes(this.props.value.toLowerCase()) && this.props.value.length > 2){
                        this.k=true;
                        return (
                            <Link key={index} to={"/indexdrive/car-select/"+(index+1)}>
                                <div>{output.name}</div>
                                <img src={output.image} alt={"изображение "+output.name}/>
                                <div>от <i className={classes.accent_text}>{output.price}₽</i></div>
                            </Link>)
                    }
                    else{
                        k-=1;
                    }
                    if (k === -12){this.k=false}
                })
            }
            </>
        )
    }

    render() {
        return (
            <>
                
                {this.props.modal ? (
                    <>
                    <input placeholder={"Поиск по имени автомобиля"} onClick={() => this.setState({opened: true})} className={classes.search_input}/>
                    <Modal opened={this.state.opened} close={() => this.setState({opened: false})} className={classNames(classes.search_page, classes.page__container)}>
                        <div className={classes.search_page__content}>
                            <input type="text" autoFocus onChange={(e) => this.changeName(e.target.value)} value={this.props.value} className={classes.search_input} placeholder='Наименование машины'/>
                            <div className={classes.search_variants}>
                                {
                                    this.showList()
                                }
                                {this.k === true ? null : <div style={{"gridColumn": "1 / 5"}}>Ничего не найдено :(</div>}
                            </div>
                        </div>
                    </Modal>
                    </>
                    
                ):
                <input placeholder={"Поиск по имени автомобиля"} onChange={(e) => this.changeName(e.target.value)} value={this.props.value} className={classes.search_input}/>
            }
                
            </>
        )
    }
}

export default SearchBar