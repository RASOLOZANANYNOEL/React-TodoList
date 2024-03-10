import { useState } from "react";

const useFieldError = () => {

    const [error, setError] = useState(null);

    const validateField = (value, { type, required, minLength, maxLength }) => {

        if (type && typeof value !== type) { // si le type est different de la valeur type
            setError(`The value must be a ${type}`);
        } else if (required && !value) { // si la valeur requis et qu'il n'y a pas de valeur
            setError(`The field is required`)
        } else if (minLength && value.length < minLength) { // si la longueur minimum existe et supérieur à 0 et que si la longueur de value est inférieur à minLength
            setError(`The value must have at least ${minLength} characters`);
        } else if (maxLength && value.length > maxLength) { // si la longueur max existe et  que si la longueur de value est supérieur à maxLength
            setError(`The value is limited to ${maxLength} characters `);
        } else {
            setError(null);
        }
    };

    return {
        error,
        validateField
    }
}
export default useFieldError;