import React, { Fragment, useState } from "react";

const Pregunta = () => {

    // definir el state
    const [cantidad, guardarCantidad] = useState(0);

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // validar

        // si pasa la validación

        
    }

    return ( 
        <Fragment>
            <h2>Colocá tu presupuesto</h2>

            <form
                onSubmit = {agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Colocá aquí tu presupuesto"
                    onChange={e =>{ guardarCantidad( parseInt(e.target.value,10) )}}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />                
            </form>
        </Fragment>
    );
}
 
export default Pregunta;