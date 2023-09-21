import React, { Component } from 'react';
import classes from "../../assets/static/indexdrive_style.module.css";

export class SearchFilter extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={classes.filter_bar}>
                {this.props.filter["values"].map((element, index) => (<div key={index} className={classes.filter}>
                    <input value={element} type='radio' checked={this.props.markFilter === element || this.props.engineFilter === element || this.props.transmissionFilter === element}
                    hidden id={element} name={this.props.group} onChange={(e) => {
                        switch (this.props.group){
                            case "mark":
                                this.props.setMarkFilter(e.target.value);
                                break;
                            case "engine":
                                this.props.setEngineFilter(e.target.value);
                                break;
                            case "transmissions":
                                this.props.setTransmissionFilter(e.target.value);
                                break;
                        }
                    }}/>
                    <label htmlFor={element}>{element}</label></div>))}
            </div>
        )
    }
}

export default SearchFilter