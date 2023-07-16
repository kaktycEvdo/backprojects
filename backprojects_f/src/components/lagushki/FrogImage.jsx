import React from "react";
import classes from "../../assets/static/lagushki_style.module.css";
import img1 from "../../assets/static/img/1.jpeg";
import img2 from "../../assets/static/img/2.jpg";
import img3 from "../../assets/static/img/3.jpg";
import img4 from "../../assets/static/img/4.jpg";
import img5 from "../../assets/static/img/5.jpg";
import img6 from "../../assets/static/img/6.jpg";
import img7 from "../../assets/static/img/7.jpg";
import img8 from "../../assets/static/img/8.jpg";
import img9 from "../../assets/static/img/9.jpg";
import img10 from "../../assets/static/img/10.png";
import img11 from "../../assets/static/img/11.jpg";
import img12 from "../../assets/static/img/12.jpg";
import img13 from "../../assets/static/img/13.jpeg";
import img14 from "../../assets/static/img/14.jpeg";
import img15 from "../../assets/static/img/15.jpeg";
import img16 from "../../assets/static/img/16.jpeg";
import img17 from "../../assets/static/img/17.jpeg";
import img18 from "../../assets/static/img/18.jpeg";
import img19 from "../../assets/static/img/19.jpeg";
import img20 from "../../assets/static/img/20.jpeg";
import img21 from "../../assets/static/img/21.jpeg";
import img22 from "../../assets/static/img/22.jpeg";
import img23 from "../../assets/static/img/23.jpeg";
import img24 from "../../assets/static/img/24.jpeg";
import img25 from "../../assets/static/img/25.jpeg";
import img26 from "../../assets/static/img/26.jpeg";
import img27 from "../../assets/static/img/27.jpeg";
import img28 from "../../assets/static/img/28.jpeg";
import img29 from "../../assets/static/img/29.jpeg";
import img30 from "../../assets/static/img/30.jpeg";
import img31 from "../../assets/static/img/31.jpeg";
import img32 from "../../assets/static/img/32.jpeg";
import Modal from "../UI/Modal/Modal.jsx";


class FrogImage extends React.Component{
    constructor(props) {
        super(props);
        this.images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15,
        img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31,
        img32]
        this.state = {
            opened: false
        }
    }

    closeModal = () => this.setState({opened: false})

    render() {
        return(
            <>
                <img src={this.images[this.props.number-1]} onClick={() => this.setState({opened: true})}
                     alt={"лягушка/жаба "+this.props.number} {...this.props}/>
                <Modal opened={this.state.opened} close={this.closeModal}>
                    <img src={this.images[this.props.number-1]} className={classes.modal__img}
                         alt={"лягушка/жаба "+this.props.number}/>
                </Modal>
            </>
            )
    }
}

export default FrogImage;
