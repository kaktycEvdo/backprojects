import React from "react";
import classes from "../../assets/static/lagushki_style.module.css";
import FrogImage from "../../components/lagushki/FrogImage.jsx";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import axios from "axios";


class Build extends React.Component{
    constructor(props) {
        super(props);
        this.items = [
            {id:"frog1", number:1},{id:"frog2", number:2},{id:"frog3", number:3},{id:"frog4", number:4},
            {id:"frog5", number:5},{id:"frog6", number:6},{id:"frog7", number:7},{id:"frog8", number:8},
            {id:"frog9", number:9},{id:"frog10", number:10},{id:"frog11", number:11},{id:"frog12", number:12},
            {id:"frog13", number:13},{id:"frog14", number:14},{id:"frog15", number:15},{id:"frog16", number:16},
            {id:"frog17", number:17},{id:"frog18", number:18},{id:"frog19", number:19},{id:"frog20", number:20},
            {id:"frog21", number:21},{id:"frog22", number:22},{id:"frog23", number:23},{id:"frog24", number:24},
            {id:"frog25", number:25},{id:"frog26", number:26},{id:"frog27", number:27},{id:"frog28", number:28},
            {id:"frog29", number:29},{id:"frog30", number:30},{id:"frog31", number:31},{id:"frog32", number:32},
        ];
        this.state = {
            A: [],
            B: [],
            C: [],
            D: [],
            archive: [...this.items]
        }
    }


    handleOnDragEnd = (result) => {
        if (!result.destination) return;
        for (let key in this.state){
            if (result.source.droppableId === key){
                const items = Array.from(this.state[key]);
                let olditems = Array.from(this.state[key]);
                const [reorderedItem] = items.splice(result.source.index, 1);
                if (result.destination.droppableId === result.source.droppableId){
                    items.splice(result.destination.index, 0, reorderedItem);
                }
                switch (result.source.droppableId){
                    case "A": this.setState({A: items}); break;
                    case "B": this.setState({B: items}); break;
                    case "C": this.setState({C: items}); break;
                    case "D": this.setState({D: items}); break;
                    case "archive": this.setState({archive: items}); break;
                }
                if (result.destination.droppableId !== result.source.droppableId){
                    switch (result.destination.droppableId){
                        case "A": this.setState({A: this.state.A.concat(olditems[result.source.index])}); break;
                        case "B": this.setState({B: this.state.B.concat(olditems[result.source.index])}); break;
                        case "C": this.setState({C: this.state.C.concat(olditems[result.source.index])}); break;
                        case "D": this.setState({D: this.state.D.concat(olditems[result.source.index])}); break;
                        case "archive": this.setState({archive: this.state.archive.concat(olditems[result.source.index])}); break;
                    }
                }
                break;
            }
        }
    }


    sendData(){
        let a = "";
        for (let i = 0; i < this.state.A.length; i++){
            a += this.state.A[i].number+";"
        }
        let b = "";
        for (let i = 0; i < this.state.B.length; i++){
            b += this.state.B[i].number+";"
        }
        let c = "";
        for (let i = 0; i < this.state.C.length; i++){
            c += this.state.C[i].number+";"
        }
        let d = "";
        for (let i = 0; i < this.state.D.length; i++){
            d += this.state.D[i].number+";"
        }
        let archive = "";
        for (let i = 0; i < this.state.archive.length; i++){
            archive += this.state.archive[i].number+";"
        }
        const object = {
            A: a,
            B: b,
            C: c,
            D: d,
            archive: archive,
        }
        axios.post("http://localhost:8000/lagushki/tiers", object).then().catch(reason => alert(reason));
    }


    render() {
        return(
            <>
                <DragDropContext onDragEnd={this.handleOnDragEnd}>
                    <table>
                        <tr className={classes.A}>
                            <td className={classes.theader}>A</td>
                                <Droppable droppableId={"A"} direction={"horizontal"}>
                                    {(provided) => (
                                        <td className={classes.tcontent} {...provided.droppableProps} ref={provided.innerRef}>
                                            {this.state.A ?
                                                this.state.A.map(({id, number}, index) => (
                                                    <Draggable draggableId={id} index={index} key={id}>
                                                        {(provided) => (
                                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={this.props.number}>
                                                                <FrogImage number={number}/>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))
                                                : null}
                                            {provided.placeholder}
                                        </td>
                                    )}
                                </Droppable>
                        </tr>
                        <tr className={classes.B}>
                            <td className={classes.theader}>B</td>
                                <Droppable droppableId={"B"} direction={"horizontal"}>
                                    {(provided) => (
                                        <td className={classes.tcontent} {...provided.droppableProps} ref={provided.innerRef}>
                                            {this.state.B ?
                                                this.state.B.map(({id, number}, index) => (
                                                    <Draggable draggableId={id} index={index} key={id}>
                                                        {(provided) => (
                                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={this.props.number}>
                                                                <FrogImage number={number}/>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))
                                                : null}
                                            {provided.placeholder}
                                        </td>
                                    )}
                                </Droppable>
                        </tr>
                        <tr className={classes.C}>
                            <td className={classes.theader}>C</td>
                                <Droppable droppableId={"C"} direction={"horizontal"}>
                                    {(provided) => (
                                        <td className={classes.tcontent} {...provided.droppableProps} ref={provided.innerRef}>
                                            {this.state.C ?
                                                this.state.C.map(({id, number}, index) => (
                                                    <Draggable draggableId={id} index={index} key={id}>
                                                        {(provided) => (
                                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={this.props.number}>
                                                                <FrogImage number={number}/>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))
                                                : null}
                                            {provided.placeholder}
                                        </td>
                                    )}
                                </Droppable>
                        </tr>
                        <tr className={classes.D}>
                            <td className={classes.theader}>D</td>
                                <Droppable droppableId={"D"} direction={"horizontal"}>
                                    {(provided) => (
                                        <td className={classes.tcontent} {...provided.droppableProps} ref={provided.innerRef}>
                                            {this.state.D ?
                                                this.state.D.map(({id, number}, index) => (
                                                    <Draggable draggableId={id} index={index} key={id}>
                                                        {(provided) => (
                                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={this.props.number}>
                                                                <FrogImage number={number}/>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))
                                                : null}
                                            {provided.placeholder}
                                        </td>
                                    )}
                                </Droppable>
                        </tr>
                    </table>
                    <Droppable droppableId={"archive"} direction={"horizontal"}>
                        {(provided) => (
                            <div className={classes.archive} {...provided.droppableProps} ref={provided.innerRef}>
                                {this.state.archive.map(({id, number}, index) => (
                                    <Draggable draggableId={id} index={index} key={id}>
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={this.props.number}>
                                                <FrogImage number={number}/>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                <button className={classes.send_button} onClick={() => this.sendData()}>Отправить</button>
            </>
        )
    }
}

export default Build;
