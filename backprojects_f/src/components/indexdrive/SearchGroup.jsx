import React, { Component } from 'react'
import SearchFilter from './SearchFilter'

export class SearchGroup extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <SearchFilter markFilter={this.props.markFilter} setMarkFilter={this.props.setMarkFilter} group={this.props.filters[0].filter} filter={this.props.filters[0]}/>
                <SearchFilter engineFilter={this.props.engineFilter} setEngineFilter={this.props.setEngineFilter} group={this.props.filters[1].filter} filter={this.props.filters[1]}/>
                <SearchFilter transmissionFilter={this.props.transmissionFilter} setTransmissionFilter={this.props.setTransmissionFilter} group={this.props.filters[2].filter} filter={this.props.filters[2]}/>
            </>
        )
    }
}

export default SearchGroup