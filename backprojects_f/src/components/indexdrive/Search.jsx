import React, { Component } from 'react'
import SearchBar from './SearchBar'
import SearchGroup from './SearchGroup'
import classes from '../../assets/static/indexdrive_style.module.css'

export class Search extends Component {
    constructor(props){
        super(props);
        this.filters = [{
            filter: "mark",
            values: ["Nissan", "Audi", "Toyota", "Ferrari", "Volkswagen", "Honda", "Jaguar", "Mercedes-Benz", "Hyundai", "Buick"]
        },
        {
            filter: "engine",
            values: ["Дизель", "Бензин"]
        },
        {
            filter: "transmissions",
            values: ["МКП", "АКП", "РКП"]
        }
        ]
        this.names = [];
        this.props.cars.forEach(element => this.names.push(element["name"]));
    }


    render() {
        return (
            <>
                {this.props.full ?
                    (
                        <>
                        <SearchGroup updateList={this.props.updateList} setMarkFilter={this.props.setMarkFilter}
                        setTransmissionFilter={this.props.setTransmissionFilter} setEngineFilter={this.props.setEngineFilter}
                        markFilter={this.props.markFilter} engineFilter={this.props.engineFilter} transmissionFilter={this.props.transmissionFilter} filters={this.filters}/>
                        <SearchBar cars={this.props.cars} modal={this.props.modal}
                                   value={this.props.value} setValue={this.props.setValue}/>
                        </>
                    ):
                    <SearchBar cars={this.props.cars} modal={this.props.modal}
                               value={this.props.value} setValue={this.props.setValue}/>
                }
            </>
        )
    }
}

export default Search