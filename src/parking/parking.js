import React, {useState, useEffect} from "react";
import './parking.css'

function Parking(props) {

    const [cars, setCars] = useState([])

    const [names, setNames] = useState(['Carlos'])

    function addCar() {
        setNames(prev => prev.concat('Maria'))
        // ** Acá descomentariar alert para visualizar el array
        // alert(JSON.stringify(names)) // Sigue saliendo solo Carlos en el Alert ¿Por que? por el re-render asincrono de react.
        setCars(prev => prev.concat('🚛'))
    }

    function updateCars () {
        setCars('🚛'.repeat(props.num).split(''));
    }

    useEffect(updateCars, [props.num])

    const btnAdd = <button onClick={addCar}>+</button> 
    
    return (
        <div id="parking" style={{backgroundColor: props.color}} >
            {
                cars.map(car => <label>{car}</label>)
            }
            {btnAdd}
            {props.children}
        </div>
    )
}

export default Parking;
