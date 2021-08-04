import { useState } from "react";

/*useForm recibe un argumento, el cual es el objeto
que quiero manipular (el campo de texto)*/
export const useForm = (initialState = {}) => {
 
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }
    /*1er valor: estado de mi formulario
    2do valor: handleinput para cambiar los valores del formulario*/
    return [values, handleInputChange, reset];
}
