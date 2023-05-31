import React, { createContext, useContext, useMemo, useState } from "react";
import { IFormProvider } from "../../types/component";

const FormContext = createContext({
    values: {},
    handleSetValues: (key: string, keyValue: string) => {},
    focusedKey: "",
    setFocusedKey: (key: string) => {}
})

const FormProvider = ({ children, initialState= {} }: IFormProvider) => {

    const [values, setValues] = useState(initialState)
    const [focusedKey, setFocusedKey] = useState("")
    
    const handleSetValues = (key: string, keyValue: string) => {
        const newValues = {
            ...values,
            [key]: keyValue
        }
        setValues(newValues)
    }

    const memoedValue = useMemo(() => ({
        values,
        focusedKey,
        handleSetValues,
        setFocusedKey
    }), [values, focusedKey])

    return(
        <FormContext.Provider value={memoedValue}>
            {children}
        </FormContext.Provider>
    )
}

const useForm = () => useContext(FormContext);

export { FormProvider };
export default useForm;