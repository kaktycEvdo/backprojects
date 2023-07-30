import React from "react";
import axios from "axios";
import classes from "../../assets/static/lagushki_style.module.css";
import FrogImage from "../../components/lagushki/FrogImage.jsx";


class Index2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tiers: null,
            tables: null
        }

        axios.get("http://localhost:8000/lagushki/tiers").then((res) => {
            this.setState({
                tables: res.data.map((output, index) =>(
                    <>
                        Таблица {index+1}
                        <table>
                            <tr className={classes.A}>
                                <td className={classes.theader}>A</td>
                                <td className={classes.tcontent}>
                                    {output.A ? output.A.split(";", output.A.length-1).map((output) =>(
                                        <>
                                            {output ? <FrogImage number={output}/> : null}
                                        </>
                                    )) : null}
                                </td>
                            </tr>
                            <tr className={classes.B}>
                                <td className={classes.theader}>B</td>
                                <td className={classes.tcontent}>
                                    {output.B ? output.B.split(";", output.B.length-1).map((output) =>(
                                        <>
                                            {output ? <FrogImage number={output}/> : null}
                                        </>
                                    )) : null}
                                </td>
                            </tr>
                            <tr className={classes.C}>
                                <td className={classes.theader}>C</td>
                                <td className={classes.tcontent}>
                                    {output.C ? output.C.split(";", output.C.length-1).map((output) =>(
                                        <>
                                            {output ? <FrogImage number={output}/> : null}
                                        </>
                                    )) : null}
                                </td>
                            </tr>
                            <tr className={classes.D}>
                                <td className={classes.theader}>D</td>
                                <td className={classes.tcontent}>
                                    {output.D ? output.D.split(";", output.D.length-1).map((output) =>(
                                        <>
                                            {output ? <FrogImage number={output}/> : null}
                                        </>
                                    )) : null}
                                </td>
                            </tr>
                        </table>
                    </>
                ))
            })
        })
    }


    render() {
        return(
            <>
                {this.state.tables}
            </>
        )
    }
}

export default Index2;
