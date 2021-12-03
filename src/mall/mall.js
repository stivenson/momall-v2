import React, { useState } from "react";
import './mall.css'
import Parking from "../parking/parking";
import Coffee from "../coffee/coffee";
import Fruit from "../fruit/fruit";

function Mall() {

    const [numCars, setNumCars] = useState(0)

    function changeNumCars(value) {
        setNumCars(value)
    }

    const inputCars = <input type="text" onChange={env => changeNumCars(env.target.value)} ></input>

    return <div id="mall">
            {inputCars}
            <Parking color="blue" num={numCars}>
                <Coffee />
            </Parking>   
            <Parking color="yellow" num={numCars}>
                <Fruit />
            </Parking>
            <Parking color="#FFFFFF" num={numCars}/>
        </div>
}

export default Mall
