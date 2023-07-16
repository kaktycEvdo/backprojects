import React from "react";
import AddButton from "./UI/AddButton/AddButton.jsx";
import AddModal from "./AddModal.jsx";

class AddObjects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            changed: false,
            opened: false
        }
    }

    showAdd(){
        this.setState({opened: true});
    }

    closeAdd(){
        this.setState({opened: false});
    }

    render(){
        return(
            <>
                <AddButton show={() => this.showAdd()}/>
                <AddModal update={this.props.update}
                          opened={this.state.opened}
                          active_user_id={this.props.active_user_id}
                          close={() => this.closeAdd()}/>
            </>
        )
    }

}

export default AddObjects;
