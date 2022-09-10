import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { SketchPicker } from "react-color";
import classes from "./dashboard.module.css";

let bgColor = { background: sessionStorage.getItem('bg-color') != null ? sessionStorage.getItem('bg-color') : "#fff" }; // to set default BG color based on the session storage value

const Dashboard = () => {

    const [color, setColor] = useState('');
    //const[alpha, setAlpha] = useState(30);
    const [showColorPicker, setShowColorPicket] = useState(false); // state for show hide color picker


    const handleColorPcikerClick = () => { // to hinadle button click and set state for color picker
        setShowColorPicket(!showColorPicker);
    }

    const colorChangeHandler = (color, event) => { // sets color based on the color picker value changes
        console.log(color);
        setColor(color.hex);
        sessionStorage.setItem('bg-color', color.hex); // this is to retain selected color code on page refresh
    }

    

    if (color !== "") {
        bgColor = { background: color };
    }

    return (
        <>
            <Card style={bgColor} >
                <Card.Header>Col-More Test</Card.Header>
                <Card.Body>
                    <Card.Title>Backgroud color Changer</Card.Title>
                    <Card.Text>
                        Pick any color from using color picker and accordigly background color will change
                    </Card.Text>
                    <p>Current backhround color is : <span className={classes.colorCode} >{bgColor.background}</span></p>
                    <Button variant="primary" onClick={handleColorPcikerClick} >{!showColorPicker ? 'Show' : 'Hide'}  Color Picker</Button>
                </Card.Body>
            </Card>
            {showColorPicker && <SketchPicker onChangeComplete={colorChangeHandler} color={bgColor.background} alpha="30" />}
        </>
    )
}

export default Dashboard;