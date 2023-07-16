import React from "react";
import classes from "../../assets/static/lagushki_style.module.css";
import FrogImage from "../../components/lagushki/FrogImage.jsx";


class Rating extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <>
                <table>
                    <tr className={"A"}>
                        <td className="theader">A</td>
                        <td className="tcontent">
                            <FrogImage number={2}/>
                            <FrogImage number={3}/>
                            <FrogImage number={5}/>
                            <FrogImage number={7}/>
                            <FrogImage number={9}/>
                            <FrogImage number={10}/>
                            <FrogImage number={13}/>
                            <FrogImage number={14}/>
                            <FrogImage number={17}/>
                            <FrogImage number={18}/>
                            <FrogImage number={19}/>
                            <FrogImage number={20}/>
                            <FrogImage number={21}/>
                            <FrogImage number={31}/>
                            <FrogImage number={25}/>
                            <FrogImage number={26}/>
                            <FrogImage number={27}/>
                            <FrogImage number={28}/>
                            <FrogImage number={29}/>
                            <FrogImage number={30}/>
                            <FrogImage number={32}/>
                        </td>
                    </tr>
                    <tr className="B">
                        <td className="theader">B</td>
                        <td className="tcontent">
                            <FrogImage number={1}/>
                            <FrogImage number={4}/>
                            <FrogImage number={6}/>
                            <FrogImage number={8}/>
                            <FrogImage number={12}/>
                            <FrogImage number={23}/>
                            <FrogImage number={24}/>
                        </td>
                    </tr>
                    <tr className="C">
                        <td className="theader">C</td>
                        <td className="tcontent">
                            <FrogImage number={11}/>
                        </td>
                    </tr>
                    <tr className="D">
                        <td className="theader">D</td>
                        <td className="tcontent">
                            <FrogImage number={22}/>
                        </td>
                    </tr>
                </table>
            </>
        )
    }
}

export default Rating;
